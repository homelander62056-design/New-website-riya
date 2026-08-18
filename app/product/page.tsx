import React from "react";
import { Metadata } from "next";
import ProductClient from "./ProductClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: "Our Models & Escort Profiles in Hyderabad",
  description: "Browse verified high-profile independent models and escort companions in Hyderabad. Available 24/7 in Banjara Hills, Jubilee Hills, Hitech City, and more.",
  alternates: {
    canonical: `${siteUrl}/product`,
  },
  openGraph: {
    title: "Our Models & Escort Profiles in Hyderabad",
    description: "Browse verified high-profile independent models and escort companions in Hyderabad. Available 24/7 in Banjara Hills, Jubilee Hills, Hitech City, and more.",
    url: `${siteUrl}/product`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Models & Escort Profiles in Hyderabad",
    description: "Browse verified high-profile independent models and escort companions in Hyderabad.",
  },
};

export default function ProductPage() {
  return <ProductClient />;
}