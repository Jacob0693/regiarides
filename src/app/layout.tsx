import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://regiarides.com"),
  title: { default: "Premium Private Transportation Quotes | Regia Rides", template: "%s | Regia Rides" },
  description: "Request up to three quotes from participating transportation providers. Compare premium vehicles, included service options, and prices, then select your ride.",
  applicationName: "Regia Rides",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://regiarides.com", siteName: "Regia Rides", title: "Premium Private Transportation, Compared in One Place", description: "Compare premium rides from participating transportation providers and select the option that fits your trip." },
  twitter: { card: "summary_large_image", title: "Regia Rides", description: "Compare Premium Rides. Select Your Ride." },
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${cormorant.variable} ${jost.variable}`}><body>{children}</body></html>;
}
