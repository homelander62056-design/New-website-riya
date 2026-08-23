import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "./components/header";
import FooterPage from "./components/footer";
import DialogBoxes from "./components/dialogBoxes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#d62860",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: {
    default: "cal girl hyderabad | Professional Escort Services in Hyderabad",
    template: "%s | cal girl hyderabad",
  },
  description: "Riya Escort Services provides professional and discreet escort services in Hyderabad. Explore our services and contact us for more information.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "cal girl hyderabad | Professional Escort Services in Hyderabad",
    description: "Riya Escort Services provides professional and discreet escort services in Hyderabad. Explore our services and contact us for more information.",
    url: siteUrl,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cal girl hyderabad | Professional Escort Services in Hyderabad",
    description: "Riya Escort Services provides professional and discreet escort services in Hyderabad. Explore our services and contact us for more information.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Riya Escort Services",
    "image": "https://riyaescortservices.com/icon.png",
    "@id": "https://riyaescortservices.com",
    "url": "https://riyaescortservices.com",
    "telephone": "+91 9999999999", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Banjara Hills",
      "addressLocality": "Hyderabad",
      "addressRegion": "TS",
      "postalCode": "500034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4156,
      "longitude": 78.4347
    },
    "description": "Experience the best escort service in Hyderabad with verified, premium, and luxury companions. Professional and discreet adult companionship."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between bg-white text-zinc-800 font-sans">
        <DialogBoxes />
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
