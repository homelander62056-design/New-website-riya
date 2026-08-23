import React from "react";
import { Metadata } from "next";
import BlogClient from "./BlogClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.riyaescortservices.com";

export const metadata: Metadata = {
  title: "Blog & Updates",
  description: "Read informative articles, practical guides, safety recommendations, and industry updates from Riya Escort Services in Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog & Updates | Riya Escort Services",
    description: "Read informative articles, practical guides, safety recommendations, and industry updates from Riya Escort Services in Hyderabad.",
    url: `${siteUrl}/blog`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",

    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Updates | Riya Escort Services",
    description: "Read informative articles, practical guides, and updates from Riya Escort Services in Hyderabad.",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}