import React from "react";
import Link from "next/link";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Confidentiality",
  description: "Learn how Riya Escort Service safeguards your personal information, communication privacy, and browsing security.",
  alternates: {
    canonical: `${siteUrl}/privacyPolicy`,
  },
  openGraph: {
    title: "Privacy Policy | Riya Escort Services",
    description: "Learn how Riya Escort Service safeguards your personal information, communication privacy, and browsing security.",
    url: `${siteUrl}/privacyPolicy`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Riya Escort Services",
    description: "Data protection and privacy guidelines at Riya Escort Service.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">

        {/* Title Header */}
        <div className="text-center space-y-2 mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
            CONFIDENTIALITY &amp; DATA PROTECTION
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Privacy <span className="text-[#ff2d55]">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-1 font-medium">
            Learn how Riya Escort Service safeguards your personal information, communication privacy, and digital browsing security.
          </p>
        </div>

        {/* Content Container Card */}
        <div className="bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">

          {/* Last Updated Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-rose-50 border border-rose-100 rounded-full text-xs font-bold text-[#ff2d55]">
            <span>📅</span> Effective Date: August 2026
          </div>

          {/* Scope of Data Collection */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              1. Scope of Data Collection
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              We prioritize strict data minimization. We only process basic contact details (such as phone numbers or messaging handles) that you voluntarily submit when reaching out to our concierge via WhatsApp, phone call, or secure inquiry channels.
            </p>
          </section>

          {/* Purpose & Use of Information */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              2. Purpose &amp; Use of Information
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Any information shared with us is used exclusively to process your inquiries, arrange requested companion bookings, and provide customer support. We strictly enforce a zero-third-party disclosure policy: your information is never sold, traded, or shared with external marketing agencies.
            </p>
          </section>

          {/* Data Security & Encryption Standards */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              3. Security Protocols &amp; Confidentiality
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              We employ industry-standard encryption protocols and administrative safeguards to protect your communications against unauthorized access. We maintain a zero-retention policy for unnecessary personal logs, ensuring your privacy remains uncompromised.
            </p>
          </section>

          {/* Cookies & Telemetry */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              4. Cookies &amp; Non-Intrusive Analytics
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our website utilizes essential, non-intrusive cookies to optimize page performance and site navigation. These cookies do not store personally identifiable data and can be easily managed or cleared through your web browser preferences.
            </p>
          </section>

          {/* Third-Party Platforms */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              5. External Links &amp; Messaging Services
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our site may contain links to third-party services (such as external messaging applications). Please note that we do not govern or assume liability for the privacy policies of third-party platforms.
            </p>
          </section>

          {/* Abuse Prevention & Operational Security */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              6. Operational Security &amp; Anti-Fraud
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              To prevent fraudulent activity and protect network integrity, automated systems may evaluate non-identifiable technical headers (such as IP range or user-agent). This telemetry is analyzed solely for system performance, anti-spam safeguards, and security diagnostics.
            </p>
          </section>

          {/* Privacy Contact */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55]">
              7. Privacy Contact &amp; Inquiries
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              If you have any questions, data requests, or privacy concerns regarding this policy, please reach out to our privacy team directly via our official{" "}
              <Link href="/contact" className="text-[#ff2d55] font-bold hover:underline">
                Contact Page
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}