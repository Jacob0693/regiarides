"use client";

import { FormEvent, useMemo, useState } from "react";

type Segment = { pickup: string; destination: string; date: string; time: string };

type RequestData = {
  experience: string;
  tripType: string;
  direction: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  carryOn: string;
  checkedBags: string;
  airport: string;
  airline: string;
  flightNumber: string;
  duration: string;
  itineraryNotes: string;
  vehicle: string;
  specificModel: string;
  preferences: string[];
  preferredLanguage: string;
  specialRequests: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  consent: boolean;
};

const steps = ["Ride Experience", "Trip Type", "Trip Details", "Vehicle", "Preferences", "Contact & Review"];

const experiences = [
  {
    value: "black-ride",
    kicker: "FLEXIBLE CHOICE",
    title: "Black Ride",
    copy: "Compare professional transportation across available vehicle classes, pricing, and included options.",
  },
  {
    value: "signature-chauffeur",
    kicker: "CURATED EXPERIENCE",
    title: "Signature Chauffeur",
    copy: "Request an elevated chauffeur standard, a designated premium vehicle, and trip-specific service details.",
  },
] as const;

const tripTypes = [
  ["airport-transfer", "Airport Transfer", "Airport pickup or drop-off with flight-aware details."],
  ["point-to-point", "Point-to-Point", "One scheduled pickup and one destination."],
  ["multiple-transfers", "Multiple Transfers", "Several independent rides in one organized request."],
  ["hourly-transportation", "Hourly Transportation", "A vehicle reserved for a continuous block of time."],
  ["long-distance", "Long Distance", "An intercity or longer regional journey."],
  ["custom-transportation", "Custom Transportation", "VIP, event, or itinerary-specific transportation."],
] as const;

const vehicles = [
  ["recommend", "Recommend a Vehicle", "Each provider may quote up to two suitable options based on your passenger and luggage details."],
  ["sedan", "Black Sedan", "For smaller parties and lighter luggage needs."],
  ["standard-suv", "Standard SUV", "More passenger and luggage flexibility."],
  ["premium-suv", "Full-Size Premium SUV", "More space and an elevated premium option."],
  ["luxury-van", "Luxury Van / Sprinter", "Additional cabin and cargo flexibility for groups."],
] as const;

const preferenceOptions = [
  "Airport meet-and-greet",
  "Name sign",
  "Luggage assistance",
  "Child seat",
  "Accessibility assistance",
  "Bilingual chauffeur request",
] as const;

const emptyData: RequestData = {
  experience: "",
  tripType: "",
  direction: "airport-pickup",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "1",
  carryOn: "0",
  checkedBags: "0",
  airport: "",
  airline: "",
  flightNumber: "",
  duration: "",
  itineraryNotes: "",
  vehicle: "",
  specificModel: "",
  preferences: [],
  preferredLanguage: "English",
  specialRequests: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  consent: false,
};

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function labelFor<T extends readonly (readonly string[])[]>(items: T, value: string) {
  return items.find((item) => item[0] === value)?.[1] ?? "Not selected";
}

export function RequestWizard({ initialExperience, initialTrip }: { initialExperience?: string; initialTrip?: string }) {
  const validExperience = experiences.some((item) => item.value === initialExperience) ? initialExperience! : "";
  const validTrip = tripTypes.some((item) => item[0] === initialTrip) ? initialTrip! : "";
  const [currentStep, setCurrentStep] = useState(validExperience && validTrip ? 2 : validExperience ? 1 : 0);
  const [data, setData] = useState<RequestData>({ ...emptyData, experience: validExperience, tripType: validTrip });
  const [segments, setSegments] = useState<Segment[]>([
    { pickup: "", destination: "", date: "", time: "" },
    { pickup: "", destination: "", date: "", time: "" },
  ]);
  const [previewComplete, setPreviewComplete] = useState(false);

  const selectedExperience = experiences.find((item) => item.value === data.experience)?.title ?? "Not selected";
  const selectedTrip = labelFor(tripTypes, data.tripType);
  const selectedVehicle = labelFor(vehicles, data.vehicle);

  const routeSummary = useMemo(() => {
    if (data.tripType === "multiple-transfers") {
      const complete = segments.filter((segment) => segment.pickup || segment.destination);
      return complete.length ? `${complete.length} transfer${complete.length === 1 ? "" : "s"}` : "Not entered";
    }
    return data.pickup || data.destination ? `${data.pickup || "Pickup TBD"} → ${data.destination || "Destination TBD"}` : "Not entered";
  }, [data.destination, data.pickup, data.tripType, segments]);

  function update<K extends keyof RequestData>(key: K, value: RequestData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function updateSegment(index: number, key: keyof Segment, value: string) {
    setSegments((current) => current.map((segment, itemIndex) => itemIndex === index ? { ...segment, [key]: value } : segment));
  }

  function togglePreference(preference: string) {
    setData((current) => ({
      ...current,
      preferences: current.preferences.includes(preference)
        ? current.preferences.filter((item) => item !== preference)
        : [...current.preferences, preference],
    }));
  }

  function goNext(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setPreviewComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (previewComplete) {
    return (
      <section className="request-complete" aria-live="polite">
        <p className="eyebrow">REQUEST PREVIEW COMPLETE</p>
        <h2>Your request is organized and ready for secure submission.</h2>
        <p>
          This staging page does not yet send personal or trip information to providers.
          Secure storage, email verification, and quote routing will be connected before public launch.
        </p>
        <div className="request-complete-summary">
          <span><small>Ride experience</small>{selectedExperience}</span>
          <span><small>Trip type</small>{selectedTrip}</span>
          <span><small>Route</small>{routeSummary}</span>
          <span><small>Vehicle</small>{selectedVehicle}</span>
        </div>
        <button className="button button-primary" type="button" onClick={() => { setPreviewComplete(false); setCurrentStep(5); }}>
          Return to Review
        </button>
      </section>
    );
  }

  return (
    <section className="request-shell">
      <aside className="request-progress" aria-label="Request progress">
        <p className="eyebrow">YOUR REQUEST</p>
        <ol>
          {steps.map((step, index) => (
            <li className={index === currentStep ? "is-current" : index < currentStep ? "is-complete" : ""} key={step}>
              <button type="button" disabled={index > currentStep} onClick={() => setCurrentStep(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{step}
              </button>
            </li>
          ))}
        </ol>
        <div className="request-progress-note">
          <strong>One request. Clear comparisons.</strong>
          <p>Providers receive the same trip details so you can compare confirmed vehicles, inclusions, and price.</p>
        </div>
      </aside>

      <form className="request-form" onSubmit={goNext}>
        <header className="request-step-heading">
          <span>STEP {String(currentStep + 1).padStart(2, "0")} OF {String(steps.length).padStart(2, "0")}</span>
          <h2>{steps[currentStep]}</h2>
          <p>{stepIntroduction(currentStep, data.experience)}</p>
        </header>

        {currentStep === 0 && (
          <div className="request-option-grid two-columns">
            {experiences.map((item) => (
              <label className="request-option-card" key={item.value}>
                <input required type="radio" name="experience" value={item.value} checked={data.experience === item.value} onChange={() => update("experience", item.value)} />
                <span className="request-option-indicator" aria-hidden="true" />
                <span className="request-option-copy"><small>{item.kicker}</small><strong>{item.title}</strong><span>{item.copy}</span></span>
              </label>
            ))}
          </div>
        )}

        {currentStep === 1 && (
          <div className="request-option-grid trip-options">
            {tripTypes.map(([value, title, copy]) => (
              <label className="request-option-card" key={value}>
                <input required type="radio" name="tripType" value={value} checked={data.tripType === value} onChange={() => update("tripType", value)} />
                <span className="request-option-indicator" aria-hidden="true" />
                <span className="request-option-copy"><strong>{title}</strong><span>{copy}</span></span>
              </label>
            ))}
          </div>
        )}

        {currentStep === 2 && (
          <TripDetails data={data} update={update} segments={segments} updateSegment={updateSegment} setSegments={setSegments} />
        )}

        {currentStep === 3 && (
          <div className="request-option-grid vehicle-options">
            {vehicles.map(([value, title, copy]) => (
              <label className="request-option-card" key={value}>
                <input required type="radio" name="vehicle" value={value} checked={data.vehicle === value} onChange={() => update("vehicle", value)} />
                <span className="request-option-indicator" aria-hidden="true" />
                <span className="request-option-copy"><strong>{title}</strong><span>{copy}</span></span>
              </label>
            ))}
            <div className="request-field request-field-wide specific-model-field">
              <label htmlFor="specific-model">{data.experience === "signature-chauffeur" ? "Designated premium vehicle" : "Preferred make or model — Special Request"}</label>
              <input id="specific-model" value={data.specificModel} onChange={(event) => update("specificModel", event.target.value)} placeholder={data.experience === "signature-chauffeur" ? "Example: Cadillac Escalade ESV" : "Example: Cadillac Escalade, if available"} />
              <small>{data.experience === "signature-chauffeur" ? "The selected quote must confirm the designated vehicle." : "A provider may confirm and price the requested model in its quote."}</small>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="request-fields">
            <fieldset className="request-check-group request-field-wide">
              <legend>Optional service requests</legend>
              <div className="request-check-grid">
                {preferenceOptions.map((preference) => (
                  <label key={preference}><input type="checkbox" checked={data.preferences.includes(preference)} onChange={() => togglePreference(preference)} /><span>{preference}</span></label>
                ))}
              </div>
            </fieldset>
            <div className="request-field">
              <label htmlFor="language">Preferred service language</label>
              <select id="language" value={data.preferredLanguage} onChange={(event) => update("preferredLanguage", event.target.value)}>
                <option>English</option><option>Korean</option><option>English or Korean</option><option>Other</option>
              </select>
            </div>
            <div className="request-field request-field-wide">
              <label htmlFor="special-requests">Special requests or important context</label>
              <textarea id="special-requests" rows={5} value={data.specialRequests} onChange={(event) => update("specialRequests", event.target.value)} placeholder="Share child-seat details, accessibility needs, presentation preferences, timing dependencies, or other priorities." />
              <small>A requested item is confirmed only when it appears in the provider quote you select.</small>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="contact-review-layout">
            <div className="request-fields contact-fields">
              <div className="request-field"><label htmlFor="name">Full name</label><input required id="name" autoComplete="name" value={data.name} onChange={(event) => update("name", event.target.value)} /></div>
              <div className="request-field"><label htmlFor="email">Email</label><input required id="email" type="email" autoComplete="email" value={data.email} onChange={(event) => update("email", event.target.value)} /></div>
              <div className="request-field"><label htmlFor="phone">Phone</label><input required id="phone" type="tel" autoComplete="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} /></div>
              <div className="request-field"><label htmlFor="contact-method">Preferred contact</label><select id="contact-method" value={data.contactMethod} onChange={(event) => update("contactMethod", event.target.value)}><option>Email</option><option>Phone</option><option>Text message</option></select></div>
              <label className="request-consent request-field-wide"><input required type="checkbox" checked={data.consent} onChange={(event) => update("consent", event.target.checked)} /><span>I confirm that the itinerary and passenger details are accurate and understand that submitting a request does not guarantee quote availability.</span></label>
            </div>
            <aside className="request-review-card">
              <h3>Request summary</h3>
              <dl>
                <div><dt>Ride experience</dt><dd>{selectedExperience}</dd></div>
                <div><dt>Trip type</dt><dd>{selectedTrip}</dd></div>
                <div><dt>Route</dt><dd>{routeSummary}</dd></div>
                <div><dt>Date &amp; time</dt><dd>{data.tripType === "multiple-transfers" ? "See transfer schedule" : `${data.date || "TBD"} · ${data.time || "TBD"}`}</dd></div>
                <div><dt>Travelers</dt><dd>{data.passengers} passenger{data.passengers === "1" ? "" : "s"} · {Number(data.carryOn) + Number(data.checkedBags)} bag{Number(data.carryOn) + Number(data.checkedBags) === 1 ? "" : "s"}</dd></div>
                <div><dt>Vehicle</dt><dd>{selectedVehicle}{data.specificModel ? ` · ${data.specificModel}` : ""}</dd></div>
                <div><dt>Preferences</dt><dd>{data.preferences.length ? data.preferences.join(", ") : "None added"}</dd></div>
              </dl>
            </aside>
          </div>
        )}

        <footer className="request-form-actions">
          {currentStep > 0 ? <button className="button request-back" type="button" onClick={() => setCurrentStep((step) => step - 1)}>Back</button> : <span />}
          <button className="button button-primary" type="submit">
            {currentStep === steps.length - 1 ? "Preview Completed Request" : `Continue to ${steps[currentStep + 1]}`} <ArrowIcon />
          </button>
        </footer>
      </form>
    </section>
  );
}

function stepIntroduction(step: number, experience: string) {
  const messages = [
    "Choose one experience for this request. You can review the differences before continuing.",
    "Select the transportation format that best matches how this journey moves.",
    "Add the route, schedule, passenger, and luggage details providers need to quote accurately.",
    experience === "signature-chauffeur" ? "Choose a category or designate the exact premium vehicle you want quoted." : "Choose a category, request a preferred model, or let providers recommend suitable options.",
    "Add only the services you want providers to confirm and include in their quotes.",
    "Review the request and add the contact details used for verification and quote notifications.",
  ];
  return messages[step];
}

function TripDetails({ data, update, segments, updateSegment, setSegments }: {
  data: RequestData;
  update: <K extends keyof RequestData>(key: K, value: RequestData[K]) => void;
  segments: Segment[];
  updateSegment: (index: number, key: keyof Segment, value: string) => void;
  setSegments: (segments: Segment[]) => void;
}) {
  if (data.tripType === "multiple-transfers") {
    return (
      <div className="multiple-transfer-list">
        {segments.map((segment, index) => (
          <fieldset className="transfer-segment" key={index}>
            <legend>Transfer {String(index + 1).padStart(2, "0")}</legend>
            <div className="request-fields">
              <div className="request-field"><label htmlFor={`segment-pickup-${index}`}>Pickup location</label><input required id={`segment-pickup-${index}`} value={segment.pickup} onChange={(event) => updateSegment(index, "pickup", event.target.value)} /></div>
              <div className="request-field"><label htmlFor={`segment-destination-${index}`}>Destination</label><input required id={`segment-destination-${index}`} value={segment.destination} onChange={(event) => updateSegment(index, "destination", event.target.value)} /></div>
              <div className="request-field"><label htmlFor={`segment-date-${index}`}>Date</label><input required id={`segment-date-${index}`} type="date" value={segment.date} onChange={(event) => updateSegment(index, "date", event.target.value)} /></div>
              <div className="request-field"><label htmlFor={`segment-time-${index}`}>Pickup time</label><input required id={`segment-time-${index}`} type="time" value={segment.time} onChange={(event) => updateSegment(index, "time", event.target.value)} /></div>
            </div>
            {segments.length > 2 && <button type="button" className="segment-remove" onClick={() => setSegments(segments.filter((_, itemIndex) => itemIndex !== index))}>Remove transfer</button>}
          </fieldset>
        ))}
        {segments.length < 8 && <button className="button request-add-transfer" type="button" onClick={() => setSegments([...segments, { pickup: "", destination: "", date: "", time: "" }])}>+ Add another transfer</button>}
        <PassengerFields data={data} update={update} />
      </div>
    );
  }

  return (
    <div className="request-fields">
      {data.tripType === "airport-transfer" && (
        <fieldset className="request-segmented request-field-wide">
          <legend>Airport direction</legend>
          <label><input type="radio" name="direction" value="airport-pickup" checked={data.direction === "airport-pickup"} onChange={() => update("direction", "airport-pickup")} /><span>Airport pickup</span></label>
          <label><input type="radio" name="direction" value="airport-dropoff" checked={data.direction === "airport-dropoff"} onChange={() => update("direction", "airport-dropoff")} /><span>Airport drop-off</span></label>
        </fieldset>
      )}
      <div className="request-field"><label htmlFor="pickup">{data.direction === "airport-pickup" && data.tripType === "airport-transfer" ? "Airport pickup location" : "Pickup location"}</label><input required id="pickup" value={data.pickup} onChange={(event) => update("pickup", event.target.value)} placeholder="Address, hotel, airport, or venue" /></div>
      <div className="request-field"><label htmlFor="destination">Destination</label><input required id="destination" value={data.destination} onChange={(event) => update("destination", event.target.value)} placeholder="Address, hotel, airport, or venue" /></div>
      <div className="request-field"><label htmlFor="date">Date</label><input required id="date" type="date" value={data.date} onChange={(event) => update("date", event.target.value)} /></div>
      <div className="request-field"><label htmlFor="time">{data.tripType === "airport-transfer" && data.direction === "airport-pickup" ? "Scheduled arrival time" : "Pickup time"}</label><input required id="time" type="time" value={data.time} onChange={(event) => update("time", event.target.value)} /></div>
      {data.tripType === "airport-transfer" && <>
        <div className="request-field"><label htmlFor="airport">Airport</label><input required id="airport" value={data.airport} onChange={(event) => update("airport", event.target.value)} placeholder="Example: LAX" /></div>
        <div className="request-field"><label htmlFor="airline">Airline</label><input required={data.direction === "airport-pickup"} id="airline" value={data.airline} onChange={(event) => update("airline", event.target.value)} /></div>
        <div className="request-field"><label htmlFor="flight-number">Flight number</label><input required={data.direction === "airport-pickup"} id="flight-number" value={data.flightNumber} onChange={(event) => update("flightNumber", event.target.value)} placeholder="Example: KE017" /></div>
      </>}
      {data.tripType === "hourly-transportation" && <div className="request-field"><label htmlFor="duration">Expected duration</label><select required id="duration" value={data.duration} onChange={(event) => update("duration", event.target.value)}><option value="">Select hours</option>{[2,3,4,5,6,8,10,12].map((hour) => <option key={hour} value={`${hour} hours`}>{hour} hours</option>)}</select></div>}
      <PassengerFields data={data} update={update} />
      <div className="request-field request-field-wide"><label htmlFor="itinerary-notes">{data.tripType === "custom-transportation" ? "Describe the complete transportation requirement" : "Stops or itinerary notes"}</label><textarea id="itinerary-notes" rows={4} value={data.itineraryNotes} onChange={(event) => update("itineraryNotes", event.target.value)} placeholder="Include known stops, return timing, schedule dependencies, or anything providers should consider." /></div>
    </div>
  );
}

function PassengerFields({ data, update }: { data: RequestData; update: <K extends keyof RequestData>(key: K, value: RequestData[K]) => void }) {
  return <>
    <div className="request-field"><label htmlFor="passengers">Passengers</label><input required min="1" max="50" id="passengers" type="number" value={data.passengers} onChange={(event) => update("passengers", event.target.value)} /></div>
    <div className="request-field"><label htmlFor="carry-on">Carry-on bags</label><input required min="0" max="50" id="carry-on" type="number" value={data.carryOn} onChange={(event) => update("carryOn", event.target.value)} /></div>
    <div className="request-field"><label htmlFor="checked-bags">Checked / large bags</label><input required min="0" max="50" id="checked-bags" type="number" value={data.checkedBags} onChange={(event) => update("checkedBags", event.target.value)} /></div>
  </>;
}
