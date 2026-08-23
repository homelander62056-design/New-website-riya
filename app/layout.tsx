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
    default: "Riya Call Girl Hyderabad | Riya Escort Service | Call Girl Riya",
    template: "%s | Riya Escort Service Hyderabad",
  },
  description: "Riya call girl Hyderabad — Premium escort service by Riya. Book Riya escort service for discreet, verified companionship in Hyderabad. Call girl Riya available 24/7 across Banjara Hills, Jubilee Hills, Gachibowli & 60+ locations.",
  keywords: [
    // Brand — Riya Variants
    "Riya call girl",
    "call girl Riya",
    "Riya cal girl",
    "cal girl Riya",
    "Riya escort service",
    "Riya escort Hyderabad",
    "Riya escort",
    "Riya Reddy escort",
    "Riya Reddy call girl",
    "Riya call girl Hyderabad",
    "call girl Riya Hyderabad",
    "Riya escort service Hyderabad",
    "Riya independent escort",
    "Riya VIP escort",
    "Riya luxury escort",
    "Riya companion Hyderabad",
    "escort Riya Hyderabad",

    // Call Girl — Core Keywords
    "call girl Hyderabad",
    "call girls Hyderabad",
    "cal girl hyderabad",
    "Hyderabad call girl",
    "Hyderabad call girls",
    "call girl near me Hyderabad",
    "call girl service Hyderabad",
    "call girl number Hyderabad",
    "call girl contact Hyderabad",
    "cheap call girl Hyderabad",
    "hot call girl Hyderabad",
    "sexy call girl Hyderabad",
    "beautiful call girl Hyderabad",
    "college call girl Hyderabad",
    "housewife call girl Hyderabad",
    "Russian call girl Hyderabad",
    "independent call girl Hyderabad",
    "VIP call girl Hyderabad",

    // Escort Service — Core Keywords
    "escort service Hyderabad",
    "Hyderabad escort service",
    "escort services Hyderabad",
    "independent escort Hyderabad",
    "Russian escorts Hyderabad",
    "escort near me Hyderabad",
    "female escort Hyderabad",
    "luxury escort Hyderabad",
    "VIP escort Hyderabad",
    "premium escort Hyderabad",
    "cheap escort Hyderabad",
    "24 hour escort Hyderabad",
    "outcall escort Hyderabad",
    "incall escort Hyderabad",
    "high profile escort Hyderabad",
    "model escort Hyderabad",
    "college girl escort Hyderabad",

    // Location-Based Keywords
    "call girl Banjara Hills",
    "escort service Banjara Hills",
    "call girl Jubilee Hills",
    "escort service Jubilee Hills",
    "call girl Gachibowli",
    "escort service Gachibowli",
    "call girl Hitech City",
    "escort Hitech City",
    "call girl Madhapur",
    "escort Madhapur",
    "call girl Kukatpally",
    "escort Kukatpally",
    "call girl Ameerpet",
    "escort Ameerpet",
    "call girl Secunderabad",
    "escort Secunderabad",
    "call girl Kondapur",
    "escort Kondapur",
    "call girl Begumpet",

    // Long-Tail SEO Keywords
    "best escort service in Hyderabad",
    "best call girl in Hyderabad",
    "top escort service Hyderabad",
    "verified escort Hyderabad",
    "real escort Hyderabad",
    "escort service near me",
    "call girl near me",
    "book call girl Hyderabad",
    "book escort Hyderabad",
    "escort agency Hyderabad",
    "escort girl Hyderabad",
    "female companion Hyderabad",
    "adult service Hyderabad",
    "dating service Hyderabad",
    "night service Hyderabad",
    "massage service Hyderabad",
  ],
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
    title: "Riya Call Girl Hyderabad | Riya Escort Service | Call Girl Riya",
    description: "Riya call girl Hyderabad — Book Riya escort service for discreet, verified companionship 24/7. Call girl Riya available across 60+ Hyderabad locations.",
    url: siteUrl,
    siteName: "Riya Escort Service Hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Call Girl Hyderabad | Riya Escort Service | Call Girl Riya",
    description: "Riya call girl Hyderabad — Book Riya escort service for discreet, verified companionship 24/7. Call girl Riya available across 60+ Hyderabad locations.",
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
    "name": "Riya Call Girl & Escort Service Hyderabad",
    "alternateName": ["Riya Escort Service", "Riya Call Girl Hyderabad", "Call Girl Riya", "Riya Escort Hyderabad"],
    "image": "https://riyaescortservices.com/icon.png",
    "@id": "https://riyaescortservices.com",
    "url": "https://riyaescortservices.com",
    "telephone": "+91 9905752614",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Banjara Hills",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4156,
      "longitude": 78.4347
    },
    "areaServed": [
      "Hyderabad", "Banjara Hills", "Jubilee Hills", "Gachibowli", "Hitech City",
      "Madhapur", "Kondapur", "Secunderabad", "Ameerpet", "Kukatpally"
    ],
    "description": "Riya call girl Hyderabad — Premium Riya escort service offering verified, discreet companions. Call girl Riya available 24/7 across 60+ locations in Hyderabad.",
    "keywords": "Riya call girl, call girl Riya, Riya escort service, Riya escort Hyderabad, escort service Hyderabad, call girl Hyderabad"
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
