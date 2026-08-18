import React from "react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions of service, client guidelines, and legal terms for Riya Escort Services in Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/terms-conditions`,
  },
  openGraph: {
    title: "Terms & Conditions | Riya Escort Services",
    description: "Terms and conditions of service, client guidelines, and legal terms for Riya Escort Services in Hyderabad.",
    url: `${siteUrl}/terms-conditions`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Riya Escort Services",
    description: "Terms and conditions of service for Riya Escort Services.",
  },
};

export default function TermsAndConditionPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-pink-50 text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">

        {/* Title Header */}
        <div className="mb-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight"> 
            <span className="text-zinc-900">Terms &amp; </span>
            <span className="text-[#ff2d55]">Conditions</span>
          </h1>
        </div>

        {/* Content Container Card */}
        <div className="bg-gray-50 border border-pink-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">

          {/* Last Updated */}
          <div className="text-sm font-bold text-zinc-600">
            Last Updated: <span className="font-medium text-zinc-500">August 2026</span>
          </div>

          {/* Acceptance of Terms */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              By accessing and using this website, you confirm that you are at least 18 years of age and agree to abide by these terms and conditions.
            </p>
          </section>

          {/* Services */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Services
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We provide companion and escort services for social occasions. All services are legal and consensual. We act as a platform connecting clients with independent companions.
            </p>
          </section>

          {/* Age Requirement */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Age Requirement
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              You must be 18 years or older to use this website and our services. We strictly prohibit access by minors.
            </p>
          </section>

          {/* User Conduct */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              User Conduct
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Users agree to treat all companions with respect and dignity. Any form of harassment, abuse, or illegal activity will result in immediate termination of services.
            </p>
          </section>

          {/* Payment */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Payment
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Payment terms are discussed directly between the client and companion. We do not process payments through this website.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We provide this website and services on an &quot;as is&quot; basis. We are not liable for any damages arising from the use of our services.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Changes to Terms
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of updated terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}