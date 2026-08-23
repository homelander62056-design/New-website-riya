import React from "react";
import { Metadata } from "next";
import SecurityClient from "./SecurityClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.riyaescortservices.com";

export const metadata: Metadata = {
  title: "Security – How to Report a Scam",
  description: "Learn how Riya Escort Services protects users, identifies common scams, and reports fraudulent activities securely.",
  alternates: {
    canonical: `${siteUrl}/security`,
  },
  openGraph: {
    title: "Security & Anti-Scam Policy | Riya Escort Services",
    description: "Learn how Riya Escort Services protects users, identifies common scams, and reports fraudulent activities securely.",
    url: `${siteUrl}/security`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Anti-Scam Policy | Riya Escort Services",
    description: "Security guidelines and scam reporting procedure for Riya Escort Services.",
  },
};

export default function SecurityPage() {
  return <SecurityClient />;
}