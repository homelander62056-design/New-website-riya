import React from "react";
import { Metadata } from "next";
import HelpSupportClient from "./HelpSupportClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: "Help & Support - Customer Service & FAQs",
  description: "Get assistance, technical support, and help with bookings and inquiries at Riya Escort Services in Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/helpSupport`,
  },
  openGraph: {
    title: "Help & Support | Riya Escort Services",
    description: "Get assistance, technical support, and help with bookings and inquiries at Riya Escort Services in Hyderabad.",
    url: `${siteUrl}/helpSupport`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help & Support | Riya Escort Services",
    description: "Get customer assistance and support at Riya Escort Services in Hyderabad.",
  },
};

export default function HelpAndSupportPage() {
  return <HelpSupportClient />;
}