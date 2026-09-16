import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const indexable = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://regiarides.com"),
  title: { default: "Regia Rides | Premium Private Transportation", template: "%s | Regia Rides" },
  description: "Request up to three quotes from participating licensed transportation providers for airport transfers, point-to-point rides, multiple transfers, and more.",
  applicationName: "Regia Rides",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://regiarides.com", siteName: "Regia Rides", title: "Premium Private Transportation, Compared in One Place", description: "Request, compare, and select prearranged private transportation from participating providers." },
  twitter: { card: "summary_large_image", title: "Regia Rides", description: "Premium private transportation, compared in one place." },
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
