import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteShell";
import { RequestWizard } from "./RequestWizard";

export const metadata: Metadata = {
  title: "Request Transportation Quotes",
  description: "Share your itinerary, ride experience, vehicle preferences, and service requests to prepare a Regia Rides transportation quote request.",
  alternates: { canonical: "/request" },
};

type RequestPageProps = {
  searchParams: Promise<{ experience?: string; trip?: string }>;
};

export default async function RequestPage({ searchParams }: RequestPageProps) {
  const params = await searchParams;
  const submissionEnabled = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD && process.env.REQUEST_NOTIFICATION_EMAIL && process.env.REQUEST_FROM_EMAIL);

  return (
    <main className="request-page">
      <SiteHeader />
      <section className="request-hero">
        <p className="eyebrow">START YOUR REQUEST</p>
        <h1>Tell us what the journey requires.</h1>
        <p>
          Build one detailed request so participating providers can prepare clear,
          comparable transportation options.
        </p>
      </section>
      <RequestWizard initialExperience={params.experience} initialTrip={params.trip} submissionEnabled={submissionEnabled} />
      <SiteFooter />
    </main>
  );
}
