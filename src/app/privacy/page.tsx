import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Regia Rides collects, uses, discloses, and protects personal information.",
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  { id: "scope", title: "Scope", content: <>
    <p>This Privacy Policy describes how Regia Mobility Group LLC, operating as Regia Rides (“Regia,” “we,” “us,” or “our”), collects, uses, discloses, and retains personal information through regiarides.com, transportation quote requests, bookings, support, and related communications.</p>
    <p>This Policy does not govern the independent privacy practices of a transportation provider or other third party. Their policies may apply when you select or interact directly with them.</p>
  </> },
  { id: "information", title: "Information we collect", content: <>
    <p>Depending on how you use the Platform, we may collect:</p>
    <ul>
      <li><strong>Identifiers and contact details:</strong> name, email address, telephone number, account or verification information.</li>
      <li><strong>Trip and booking information:</strong> locations, dates, times, flight details, passenger and luggage counts, vehicle preferences, stops, and selected quotes.</li>
      <li><strong>Service and accommodation information:</strong> child-seat requests, mobility or accessibility needs, preferred language, meet-and-greet details, and other instructions you choose to provide.</li>
      <li><strong>Transaction information:</strong> quoted price, payment status, refunds, and booking history. Payment card details may be collected directly by a payment processor rather than stored by Regia.</li>
      <li><strong>Communications:</strong> messages, support requests, confirmations, and records related to a request or booking.</li>
      <li><strong>Device and usage information:</strong> IP address, browser, device, pages viewed, referring source, approximate location derived from IP, and security or diagnostic data.</li>
    </ul>
  </> },
  { id: "sources", title: "Sources of information", content: <>
    <p>We collect information directly from you, from a person arranging travel for you, from participating providers, from service providers that support the Platform, and automatically through website technologies. If you provide information about another traveler, you are responsible for having authority to do so.</p>
  </> },
  { id: "uses", title: "How we use information", content: <>
    <ul>
      <li>Prepare, verify, route, and administer quote requests and bookings.</li>
      <li>Match request requirements with eligible participating providers.</li>
      <li>Present and compare vehicles, service inclusions, terms, and prices.</li>
      <li>Process payments, cancellations, changes, credits, and refunds.</li>
      <li>Provide support, operational communications, fraud prevention, safety, and dispute resolution.</li>
      <li>Maintain, secure, troubleshoot, analyze, and improve the Platform.</li>
      <li>Comply with law, enforce agreements, and protect customers, providers, Regia, and others.</li>
    </ul>
  </> },
  { id: "disclosures", title: "How information is disclosed", content: <>
    <p>We may disclose personal information as reasonably necessary to:</p>
    <ul>
      <li><strong>Participating providers:</strong> eligible providers may receive itinerary and service details needed to prepare a quote. Contact or identity information is disclosed only as needed for verification, a selected booking, operations, safety, or support.</li>
      <li><strong>Service providers:</strong> hosting, communications, payment, security, analytics, customer support, and professional advisers may process information under appropriate restrictions.</li>
      <li><strong>Legal and safety recipients:</strong> information may be disclosed when reasonably necessary to comply with law, lawful process, protect rights or safety, investigate fraud, or enforce agreements.</li>
      <li><strong>Business transactions:</strong> information may be transferred in connection with financing, reorganization, merger, sale, or transfer of all or part of the business, subject to applicable law.</li>
    </ul>
    <p>Regia does not sell personal information for money. We do not currently share personal information for cross-context behavioral advertising as those terms are defined by California law. If that practice changes, we will update this Policy and provide required choices before doing so.</p>
  </> },
  { id: "cookies", title: "Cookies and website technologies", content: <>
    <p>The Site may use essential storage or cookies for security, preferences, forms, and reliable operation. Analytics or advertising technologies will be described and controlled as required before they are activated. Additional information is available in our <Link href="/cookies">Cookie Policy</Link>.</p>
    <p>You can use browser controls to limit cookies. Blocking essential technologies may prevent parts of the Site from working. Where legally applicable, we will recognize supported opt-out preference signals such as Global Privacy Control for activities covered by those signals.</p>
  </> },
  { id: "retention", title: "Retention", content: <>
    <p>We retain information only as long as reasonably necessary for the purposes described in this Policy, including providing services, maintaining transaction and communication records, resolving disputes, meeting legal and accounting requirements, preventing fraud, and enforcing agreements. Retention periods vary according to the information and reason it is held.</p>
  </> },
  { id: "security", title: "Security", content: <>
    <p>We use administrative, technical, and organizational safeguards designed for the nature of the information we handle. No internet transmission or storage system can be guaranteed completely secure. You are responsible for protecting access to your email, telephone, and any account credentials.</p>
  </> },
  { id: "choices-rights", title: "Your choices and privacy rights", content: <>
    <p>You may update request information, choose whether to provide optional details, control browser settings, and opt out of non-operational marketing communications. Operational messages concerning a request or booking may still be sent.</p>
    <p>Depending on where you live and whether a law applies to Regia, you may have rights to know or access personal information, correct inaccuracies, request deletion, receive a portable copy, opt out of certain sales or sharing, limit certain uses of sensitive information, and receive equal service when exercising a privacy right. We may need to verify your identity and may retain information where an exception applies.</p>
  </> },
  { id: "california", title: "California notice", content: <>
    <p>California residents may submit applicable requests to know, delete, or correct personal information and may use an authorized agent as permitted by law. The categories collected and purposes are described in “Information we collect” and “How we use information”; disclosure categories are described in “How information is disclosed.”</p>
    <p>We do not knowingly sell or share the personal information of consumers under 16. Regia will not discriminate against a consumer for exercising an applicable privacy right. Because legal coverage can depend on statutory thresholds and context, this notice provides transparency without representing that every provision of the California Consumer Privacy Act applies to every Regia activity.</p>
  </> },
  { id: "children", title: "Children", content: <>
    <p>The Platform is intended for adults and is not directed to children under 13. A parent, guardian, or authorized adult may include information reasonably necessary to arrange transportation for a minor. Please do not provide information about a child that is not necessary for the trip.</p>
  </> },
  { id: "changes", title: "Policy changes", content: <>
    <p>We may update this Policy as the Platform, vendors, or legal requirements change. The effective date will be revised when an update is published. If a change materially affects how previously collected information is used, we will provide additional notice where required.</p>
  </> },
  { id: "contact", title: "Contact and requests", content: <>
    <p>Privacy questions and applicable rights requests may be submitted to <a href="mailto:privacy@regiarides.com">privacy@regiarides.com</a>. We may request information reasonably necessary to verify the request and protect personal information from unauthorized disclosure.</p>
    <p>Regia Mobility Group LLC operates Regia Rides.</p>
  </> },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="PRIVACY" title="Privacy Policy" summary="A clear account of the information involved in preparing transportation quotes and bookings—and how that information is handled." effectiveDate="September 18, 2026" sections={sections} />;
}
