import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: "%s · Privacy",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.publisher }],
  creator: site.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only rounded-full focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
