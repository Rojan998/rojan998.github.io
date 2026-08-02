import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { SkipLink } from "@/components/SkipLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Rojan Adhikari | Data Engineer";
const description =
  "Data Engineer specializing in AWS, Apache Flink, Kafka, Terraform, Kubernetes, cloud data platforms, and streaming systems.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: "%s | Rojan Adhikari",
  },
  description,
  applicationName: "Rojan Adhikari — Portfolio",
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Rojan Adhikari",
    "Data Engineer",
    "AWS",
    "Apache Flink",
    "Apache Kafka",
    "Terraform",
    "Kubernetes",
    "Cloud Data Platform",
    "Streaming Systems",
    "Infrastructure Automation",
    "Dallas Texas",
  ],
  alternates: {
    // Update if the site is deployed to a different canonical URL.
    canonical: profile.siteUrl,
  },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Runs before first paint (from <head>, ahead of hydration) so the theme is
// correct on the very first frame instead of flashing dark-then-light.
// Kept in sync with the fallback in components/ThemeToggle.tsx.
const themeBootScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.headline,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Data Engineering",
    "Cloud Data Platforms",
    "AWS",
    "Apache Flink",
    "Apache Kafka",
    "Terraform",
    "Kubernetes",
    "Streaming Systems",
    "Infrastructure Automation",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SkipLink />
        {children}
        <div className="fixed bottom-5 right-5 z-50">
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
