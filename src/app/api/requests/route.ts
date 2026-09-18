import { randomBytes } from "node:crypto";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";
import type { RequestData, RequestSegment, RequestSubmission } from "../../request/request-types";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 64_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, number[]>();

const experienceValues = new Set(["black-ride", "signature-chauffeur"]);
const tripTypeValues = new Set(["airport-transfer", "point-to-point", "multiple-transfers", "hourly-transportation", "long-distance", "custom-transportation"]);
const vehicleValues = new Set(["recommend", "sedan", "standard-suv", "premium-suv", "luxury-van"]);
const directionValues = new Set(["airport-pickup", "airport-dropoff"]);
const contactValues = new Set(["Email", "Phone", "Text message"]);
const preferenceValues = new Set(["Airport meet-and-greet", "Name sign", "Luggage assistance", "Child seat", "Accessibility assistance", "Bilingual chauffeur request"]);

function text(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function count(value: unknown, minimum: number, maximum: number) {
  const number = Number(value);
  return Number.isInteger(number) && number >= minimum && number <= maximum ? String(number) : "";
}

function cleanSegment(value: unknown): RequestSegment | null {
  if (!value || typeof value !== "object") return null;
  const segment = value as Record<string, unknown>;
  const cleaned = {
    pickup: text(segment.pickup, 300),
    destination: text(segment.destination, 300),
    date: text(segment.date, 20),
    time: text(segment.time, 20),
  };
  return Object.values(cleaned).every(Boolean) ? cleaned : null;
}

function validateSubmission(value: unknown): { submission?: RequestSubmission; error?: string } {
  if (!value || typeof value !== "object") return { error: "Invalid request." };
  const payload = value as Record<string, unknown>;
  if (text(payload.companyWebsite, 200)) return { error: "Unable to accept this request." };
  if (!payload.data || typeof payload.data !== "object") return { error: "Request details are missing." };

  const input = payload.data as Record<string, unknown>;
  const data: RequestData = {
    experience: text(input.experience, 40),
    tripType: text(input.tripType, 50),
    direction: text(input.direction, 30),
    pickup: text(input.pickup, 300),
    destination: text(input.destination, 300),
    date: text(input.date, 20),
    time: text(input.time, 20),
    passengers: count(input.passengers, 1, 50),
    carryOn: count(input.carryOn, 0, 50),
    checkedBags: count(input.checkedBags, 0, 50),
    airport: text(input.airport, 100),
    airline: text(input.airline, 100),
    flightNumber: text(input.flightNumber, 40),
    duration: text(input.duration, 40),
    itineraryNotes: text(input.itineraryNotes, 3000),
    vehicle: text(input.vehicle, 40),
    specificModel: text(input.specificModel, 150),
    preferences: Array.isArray(input.preferences) ? input.preferences.map((item) => text(item, 80)).filter((item) => preferenceValues.has(item)).slice(0, 10) : [],
    preferredLanguage: text(input.preferredLanguage, 80),
    specialRequests: text(input.specialRequests, 3000),
    name: text(input.name, 150),
    email: text(input.email, 254).toLowerCase(),
    phone: text(input.phone, 50),
    contactMethod: text(input.contactMethod, 30),
    consent: input.consent === true,
  };

  if (!experienceValues.has(data.experience) || !tripTypeValues.has(data.tripType) || !vehicleValues.has(data.vehicle)) return { error: "Choose a valid ride experience, trip type, and vehicle option." };
  if (!directionValues.has(data.direction) || !contactValues.has(data.contactMethod)) return { error: "Review the trip direction and contact preference." };
  if (!data.passengers || !data.carryOn || !data.checkedBags) return { error: "Enter valid passenger and luggage counts." };
  if (!data.name || !data.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: "Enter a valid name, email address, and telephone number." };
  if (!data.consent) return { error: "Agreement to the applicable policies is required." };

  const segments = Array.isArray(payload.segments) ? payload.segments.map(cleanSegment).filter((segment): segment is RequestSegment => Boolean(segment)).slice(0, 8) : [];
  if (data.tripType === "multiple-transfers") {
    if (segments.length < 2) return { error: "Add at least two complete transfers." };
  } else if (!data.pickup || !data.destination || !data.date || !data.time) {
    return { error: "Complete the pickup, destination, date, and time." };
  }

  if (data.tripType === "airport-transfer" && (!data.airport || (data.direction === "airport-pickup" && (!data.airline || !data.flightNumber)))) return { error: "Complete the required airport and flight details." };
  if (data.tripType === "hourly-transportation" && !data.duration) return { error: "Choose the expected hourly duration." };

  return { submission: { data, segments, companyWebsite: "" } };
}

function requestReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `RR-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function label(value: string) {
  return value.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function lines(submission: RequestSubmission) {
  const { data, segments } = submission;
  const route = data.tripType === "multiple-transfers"
    ? segments.map((segment, index) => `Transfer ${index + 1}: ${segment.pickup} → ${segment.destination} | ${segment.date} ${segment.time}`).join("\n")
    : `${data.pickup} → ${data.destination} | ${data.date} ${data.time}`;
  return [
    ["Ride experience", label(data.experience)], ["Trip type", label(data.tripType)], ["Route", route],
    ["Airport / flight", [data.airport, data.airline, data.flightNumber].filter(Boolean).join(" · ") || "Not applicable"],
    ["Travelers", `${data.passengers} passenger(s) · ${data.carryOn} carry-on · ${data.checkedBags} checked/large bag(s)`],
    ["Vehicle", `${label(data.vehicle)}${data.specificModel ? ` · ${data.specificModel}` : ""}`],
    ["Duration", data.duration || "Not applicable"], ["Preferences", data.preferences.join(", ") || "None"],
    ["Language", data.preferredLanguage], ["Itinerary notes", data.itineraryNotes || "None"],
    ["Special requests", data.specialRequests || "None"], ["Customer", data.name], ["Email", data.email],
    ["Phone", data.phone], ["Preferred contact", data.contactMethod],
  ] as const;
}

function smtpConfiguration() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const notificationEmail = process.env.REQUEST_NOTIFICATION_EMAIL;
  const from = process.env.REQUEST_FROM_EMAIL;
  if (!host || !user || !pass || !notificationEmail || !from) return null;
  return {
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
    notificationEmail,
    from,
  };
}

function clientAddress(request: NextRequest) {
  return request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(address: string) {
  const now = Date.now();
  const recent = (attempts.get(address) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  attempts.set(address, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const configuration = smtpConfiguration();
  if (!configuration) return Response.json({ error: "Request submission is not yet available." }, { status: 503, headers: { "Cache-Control": "no-store" } });

  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  if (origin && allowedOrigin && origin !== allowedOrigin && !(process.env.NODE_ENV === "development" && origin.startsWith("http://localhost:"))) {
    return Response.json({ error: "Request origin was not accepted." }, { status: 403 });
  }
  if (isRateLimited(clientAddress(request))) return Response.json({ error: "Too many attempts. Please wait and try again." }, { status: 429, headers: { "Retry-After": "900" } });

  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return Response.json({ error: "Request is too large." }, { status: 413 });
    const { submission, error } = validateSubmission(JSON.parse(raw));
    if (!submission) return Response.json({ error: error || "Review the request details." }, { status: 400 });

    const reference = requestReference();
    const detailLines = lines(submission);
    const detailText = detailLines.map(([key, value]) => `${key}: ${value}`).join("\n\n");
    const detailHtml = detailLines.map(([key, value]) => `<tr><th style="padding:10px 12px;border:1px solid #ddd;text-align:left;vertical-align:top">${escapeHtml(key)}</th><td style="padding:10px 12px;border:1px solid #ddd;white-space:pre-line">${escapeHtml(value)}</td></tr>`).join("");
    const transporter = nodemailer.createTransport({
      host: configuration.host,
      port: configuration.port,
      secure: configuration.secure,
      auth: configuration.auth,
    });

    await transporter.sendMail({
      from: configuration.from,
      to: configuration.notificationEmail,
      replyTo: submission.data.email,
      subject: `[${reference}] New ${label(submission.data.tripType)} request`,
      text: `New Regia Rides request\nReference: ${reference}\n\n${detailText}`,
      html: `<h1>New Regia Rides request</h1><p><strong>Reference:</strong> ${reference}</p><table style="border-collapse:collapse;width:100%">${detailHtml}</table>`,
    });

    try {
      await transporter.sendMail({
        from: configuration.from,
        to: submission.data.email,
        replyTo: process.env.REQUEST_REPLY_TO || configuration.notificationEmail,
        subject: `We received your Regia Rides request — ${reference}`,
        text: `Hello ${submission.data.name},\n\nWe received your transportation request.\n\nReference: ${reference}\nTrip type: ${label(submission.data.tripType)}\nRoute: ${detailLines.find(([key]) => key === "Route")?.[1]}\n\nThis is a request for quotes, not a confirmed booking. We will contact you using your preferred method when eligible provider options become available.\n\nRegia Rides`,
        html: `<p>Hello ${escapeHtml(submission.data.name)},</p><p>We received your transportation request.</p><p><strong>Reference:</strong> ${reference}<br><strong>Trip type:</strong> ${escapeHtml(label(submission.data.tripType))}<br><strong>Route:</strong> ${escapeHtml(detailLines.find(([key]) => key === "Route")?.[1] || "")}</p><p>This is a request for quotes, not a confirmed booking. We will contact you using your preferred method when eligible provider options become available.</p><p>Regia Rides</p>`,
      });
    } catch (confirmationError) {
      console.error("Request accepted but customer confirmation failed", { reference, confirmationError });
    }

    return Response.json({ reference }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Request submission failed", error);
    return Response.json({ error: "We could not submit the request. Please try again." }, { status: 500, headers: { "Cache-Control": "no-store" } });
  }
}
