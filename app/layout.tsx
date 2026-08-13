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
    default: "Riya Escort Services | Professional Escort Services in Hyderabad",
    template: "%s | Riya Escort Services",
  },
  description: "Riya Escort Services provides professional and discreet escort services in Hyderabad. Explore our services and contact us for more information.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riya Escort Services | Professional Escort Services in Hyderabad",
    description: "Riya Escort Services provides professional and discreet escort services in Hyderabad. Explore our services and contact us for more information.",
    url: siteUrl,
    siteName: "Riya Escort Services",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Escort Services | Professional Escort Services in Hyderabad",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between bg-white text-zinc-800 font-sans">
        <DialogBoxes />
        <HeaderPage />
        <main className="flex-1">{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}
