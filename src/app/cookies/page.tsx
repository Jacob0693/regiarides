import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Regia Rides uses cookies and similar website technologies.",
  alternates: { canonical: "/cookies" },
};

const sections: LegalSection[] = [
  { id: "scope", title: "Scope", content: <>
    <p>This Cookie Policy explains how Regia Mobility Group LLC, operating as Regia Rides (“Regia,” “we,” “us,” or “our”), uses cookies, local storage, pixels, and similar technologies on regiarides.com. It should be read with our <a href="/privacy">Privacy Policy</a>.</p>
  </> },
  { id: "essential", title: "Essential technologies", content: <>
    <p>Essential technologies support security, fraud prevention, network management, form progress, accessibility, and other functions needed for the Site to operate. Because these technologies are necessary to provide a requested service, they generally cannot be disabled through a consent preference tool.</p>
  </> },
  { id: "preferences", title: "Preference technologies", content: <>
    <p>Preference technologies can remember choices such as language, display settings, or previously entered form information. We will identify and provide controls for non-essential preference technologies where required.</p>
  </> },
  { id: "analytics", title: "Analytics and performance", content: <>
    <p>Analytics technologies may help us understand Site traffic, errors, page performance, and how visitors use the Site. We will describe the providers and obtain consent before activating non-essential analytics where applicable. Data collected for these purposes may include device, browser, page, referral, approximate location, and interaction information.</p>
  </> },
  { id: "advertising", title: "Advertising technologies", content: <>
    <p>Regia does not currently use cookies to share personal information for cross-context behavioral advertising. If advertising technologies are introduced, we will update this Policy, identify the relevant providers, and provide required notice and choices before using them.</p>
  </> },
  { id: "third-parties", title: "Third-party services", content: <>
    <p>Some Site features may be provided by third parties, such as hosting, security, communications, maps, payment, or embedded content providers. Their technologies and privacy practices may apply when those features are used. We evaluate such services and limit their use to what is reasonably necessary for the feature.</p>
  </> },
  { id: "controls", title: "Your controls", content: <>
    <p>You can manage or delete cookies through your browser. Blocking essential technologies may prevent request forms or other Site features from working correctly. When a cookie preference tool is available, you can use it to change non-essential choices at any time.</p>
    <p>Where legally applicable, we will recognize supported opt-out preference signals, including Global Privacy Control, for activities covered by those signals.</p>
  </> },
  { id: "updates", title: "Policy updates", content: <>
    <p>We may update this Policy when website technologies, providers, or legal requirements change. The effective date will be revised when an updated version is published.</p>
  </> },
  { id: "contact", title: "Contact", content: <>
    <p>Questions about website technologies or privacy choices may be sent to <a href="mailto:privacy@regiarides.com">privacy@regiarides.com</a>.</p>
  </> },
];

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="WEBSITE TECHNOLOGIES" title="Cookie Policy" summary="The technologies that support a secure, reliable website—and the choices available when non-essential tools are used." effectiveDate="September 18, 2026" sections={sections} />;
}
