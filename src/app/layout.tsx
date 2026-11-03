import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { profile } from "@/lib/content";
import "./globals.css";

const title = "Deepak Dhinwa";
const description =
  "Mechanical engineering student at IIT Bombay. Machine learning, analytics, and the systems around them.";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakdhinwa.me"),
  title: {
    default: title,
    template: "%s · Deepak Dhinwa",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://deepakdhinwa.me",
    siteName: title,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f3",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://deepakdhinwa.me",
    email: profile.email,
    telephone: profile.phoneHref.replace("tel:", ""),
    alumniOf: profile.school,
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </head>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" className="wrap">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
