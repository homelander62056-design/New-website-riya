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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.riyaescortservices.com";

export const metadata: Metadata = {
  title: {
    default: "Riya Call Girl Hyderabad | Riya Escort Service | Call Girl Riya",
    template: "%s | Riya Escort Service Hyderabad",
  },
  description: "Riya call girl Hyderabad — Premium escort service by Riya. Book Riya escort service for discreet, verified companionship in Hyderabad. Call girl Riya available 24/7 across Banjara Hills, Jubilee Hills, Gachibowli & 60+ locations.",
  keywords: [
    // 🔥 TOP HIGH-VOLUME — Riya Brand (sirf sabse zyada search hone wale)
    "Riya call girl",
    "call girl Riya",
    "Riya escort service",
    "Riya call girl Hyderabad",
    "Riya escort Hyderabad",

    // 🔥 HIGHEST VOLUME — Call Girl Hyderabad (Google pe sabse zyada search)
    "call girl Hyderabad",
    "call girls Hyderabad",
    "cal girl Hyderabad",
    "call girl in Hyderabad",
    "Hyderabad call girl",
    "Hyderabad call girls",
    "call girl near me",
    "call girl near me Hyderabad",
    "call girl service Hyderabad",
    "call girl number Hyderabad",
    "call girl WhatsApp number Hyderabad",
    "call girl booking Hyderabad",
    "cheap call girl Hyderabad",
    "independent call girl Hyderabad",
    "college call girl Hyderabad",
    "Russian call girl Hyderabad",
    "VIP call girl Hyderabad",
    "housewife call girl Hyderabad",
    "sexy call girl Hyderabad",
    "hot call girl Hyderabad",

    // 🔥 HIGHEST VOLUME — Escort Service Hyderabad
    "escort service Hyderabad",
    "escort service in Hyderabad",
    "Hyderabad escort service",
    "escort services Hyderabad",
    "escort near me",
    "escort near me Hyderabad",
    "independent escort Hyderabad",
    "female escort Hyderabad",
    "Russian escort Hyderabad",
    "Russian escorts Hyderabad",
    "VIP escort Hyderabad",
    "luxury escort Hyderabad",
    "premium escort Hyderabad",
    "high profile escort Hyderabad",
    "outcall escort Hyderabad",
    "incall escort Hyderabad",
    "24 hour escort Hyderabad",
    "model escort Hyderabad",
    "college escort Hyderabad",
    "escort agency Hyderabad",

    // 📍 HIGH-VOLUME — Location Based (popular areas)
    "call girl Banjara Hills",
    "escort service Banjara Hills",
    "Banjara Hills call girl",
    "call girl Jubilee Hills",
    "escort service Jubilee Hills",
    "Jubilee Hills call girl",
    "call girl Gachibowli",
    "escort service Gachibowli",
    "Gachibowli call girl",
    "call girl Hitech City",
    "Hitech City call girl",
    "call girl Madhapur",
    "Madhapur call girl",
    "call girl Kondapur",
    "call girl Kukatpally",
    "call girl Ameerpet",
    "call girl Secunderabad",
    "call girl Begumpet",
    "call girl Miyapur",
    "call girl Mehdipatnam",
    "call girl Uppal",
    "call girl LB Nagar",
    "call girl Dilsukhnagar",
    "call girl Tolichowki",
    "call girl Manikonda",
    "call girl Attapur",

    // 🔍 LONG-TAIL — High Intent (book karne wale log search karte hain)
    "best call girl in Hyderabad",
    "best escort service in Hyderabad",
    "top call girl Hyderabad",
    "top escort service Hyderabad",
    "verified call girl Hyderabad",
    "real call girl Hyderabad",
    "genuine escort Hyderabad",
    "book call girl Hyderabad",
    "book escort Hyderabad",
    "call girl contact number Hyderabad",
    "female companion Hyderabad",
    "escort girl Hyderabad",
    "adult service Hyderabad",
    "dating service Hyderabad",
    "night service Hyderabad",
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
    "image": "https://www.riyaescortservices.com/icon.png",
    "@id": "https://www.riyaescortservices.com",
    "url": "https://www.riyaescortservices.com",
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
