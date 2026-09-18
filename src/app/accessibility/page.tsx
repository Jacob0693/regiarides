import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Regia Rides' commitment to an accessible website and transportation request experience.",
  alternates: { canonical: "/accessibility" },
};

const sections: LegalSection[] = [
  { id: "commitment", title: "Our commitment", content: <>
    <p>Regia Rides is committed to providing a website and transportation request experience that can be used by people with diverse abilities, technologies, and access needs. Accessibility is part of our ongoing design, development, content, and support work.</p>
  </> },
  { id: "approach", title: "Our approach", content: <>
    <p>We use the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a reference for our work. This is a practical target, not a claim that every page or third-party feature is fully conformant at all times.</p>
    <ul>
      <li>Use meaningful headings, labels, link text, and page structure.</li>
      <li>Support keyboard navigation and visible focus indicators.</li>
      <li>Maintain readable type, sufficient contrast, and responsive layouts.</li>
      <li>Provide text alternatives for meaningful images and avoid relying on color alone.</li>
      <li>Review forms for clear instructions, error identification, and assistive-technology use.</li>
    </ul>
  </> },
  { id: "transportation", title: "Transportation accommodations", content: <>
    <p>You may include mobility, accessibility, communication, service-animal, child-seat, or other relevant accommodation needs in a request. Participating providers will identify whether they can meet the requested requirements in their quote or follow-up communications. A requested accommodation is confirmed only when it is expressly included in the selected booking.</p>
    <p>Please provide only the information reasonably necessary to arrange the service. For time-sensitive or complex needs, contact us so we can help communicate the request clearly.</p>
  </> },
  { id: "limitations", title: "Known limitations and third parties", content: <>
    <p>Some content or services supplied by third parties—such as maps, payment interfaces, or provider materials—may not be controlled entirely by Regia. We work to select accessible services and address barriers within our control. If a third-party feature creates a barrier, contact us for an alternative way to obtain information or complete the relevant step.</p>
  </> },
  { id: "feedback", title: "Feedback and assistance", content: <>
    <p>If you encounter an accessibility barrier or need information in another format, email <a href="mailto:support@regiarides.com">support@regiarides.com</a>. Please identify the page or feature, describe the issue, and tell us the best way to contact you. We will make reasonable efforts to respond and provide an accessible alternative.</p>
  </> },
  { id: "review", title: "Ongoing review", content: <>
    <p>Accessibility is an ongoing process. We review new features, update content and design patterns, and prioritize reported barriers according to their impact. This Statement will be updated as our practices and services develop.</p>
  </> },
];

export default function AccessibilityPage() {
  return <LegalPage eyebrow="ACCESS FOR EVERY JOURNEY" title="Accessibility Statement" summary="Our commitment to a clear, usable website and a transportation request process that respects individual access needs." effectiveDate="September 18, 2026" sections={sections} />;
}
