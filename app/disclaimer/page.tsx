import React from "react";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

export const metadata: Metadata = {
  title: "Disclaimer & Legal Notice",
  description: "Important legal disclaimer and 18+ adult age compliance notice for Riya Escort Services in Hyderabad.",
  alternates: {
    canonical: `${siteUrl}/disclaimer`,
  },
  openGraph: {
    title: "Disclaimer | Riya Escort Services",
    description: "Important legal disclaimer and 18+ adult age compliance notice for Riya Escort Services in Hyderabad.",
    url: `${siteUrl}/disclaimer`,
    siteName: "cal girl hyderabad",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Riya Escort Services",
    description: "Important legal disclaimer and 18+ compliance guidelines.",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">
        
        {/* Title Header */}
        <div className="text-center space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
            LEGAL NOTICE
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Website <span className="text-[#ff2d55]">Disclaimer</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-1 font-medium">
            Please read these important notices and compliance guidelines before using our platform.
          </p>
        </div>

        {/* Content Container Card */}
        <div className="bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* 18+ Adult Content Warning Banner */}
          <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-6 space-y-2.5">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#ff2d55] flex items-center gap-2">
              <span>🔞</span> 18+ Age Requirement &amp; Adult Notice
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Access to this platform is strictly restricted to individuals who are 18 years of age or older (or the legal age of majority in your jurisdiction). By browsing or using this website, you explicitly confirm that you meet these legal age criteria. If you are under 18, you must exit this site immediately.
            </p>
          </div>

          {/* General Information Disclaimer */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              General Information Notice
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              All details, text, and profiles published on this website are provided solely for general informational and entertainment purposes. While we take every effort to maintain accurate and current information, we make no express or implied warranties regarding the completeness, accuracy, or timeliness of any content.
            </p>
          </section>

          {/* Platform & Service Disclaimer */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Independent Directory &amp; Service Scope
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Riya Escort Service operates strictly as an independent directory connecting clients with self-employed companions for social meetings, dinner dates, and private companionship. We explicitly do not promote, organize, or facilitate any illegal activities. All engagements occur independently between consenting adults.
            </p>
          </section>

          {/* Media & Profile Image Representation */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Media &amp; Image Consent
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              All photos and media published on this platform are used with full permission and consent. Images serve representational purposes for profile listings and may occasionally differ slightly due to styling, lighting, or personal grooming updates.
            </p>
          </section>

          {/* Availability Disclaimer */}
          <section className="space-y-2 border-b border-zinc-100 pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Schedule &amp; Booking Availability
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We cannot guarantee the constant or immediate availability of any specific companion listed. Appointment slots, outcalls, and incall bookings remain strictly subject to individual companion schedules and personal confirmation.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#ff2d55]">
              Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Under no circumstances shall Riya Escort Service be held liable for direct, indirect, or incidental damages arising from your reliance on information or services accessed through this platform. Users are encouraged to exercise sound personal judgment.
            </p>
          </section>

        </div>
      </div>


    </div>
  );
}