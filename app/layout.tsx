import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "./context";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Override per-deploy with NEXT_PUBLIC_SITE_URL so OG/share links resolve to the real domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const description =
  "Simple, honest guides for students preparing for the SAT, IELTS, and HSK. No login, no paywalls — pick your test and find out exactly what to do first.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LGITU — Free SAT, IELTS & HSK Prep Guides",
    template: "%s · LGITU",
  },
  description,
  applicationName: "LGITU",
  keywords: [
    "SAT prep", "IELTS prep", "HSK prep", "Digital SAT", "study abroad",
    "college admissions", "test prep", "free study guides", "LGITU",
  ],
  authors: [{ name: "LGITU" }],
  creator: "LGITU",
  openGraph: {
    type: "website",
    siteName: "LGITU",
    title: "LGITU — Free SAT, IELTS & HSK Prep Guides",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LGITU — Free SAT, IELTS & HSK Prep Guides",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0D11" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteProvider>{children}</SiteProvider>
        <Analytics />
      </body>
    </html>
  );
}
