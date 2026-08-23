"use client";

import React, { useState } from "react";
import Link from "next/link";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}

const todayPost: BlogPost = {
  id: 1,
  slug: "riya-call-girl-hyderabad-escort-service-guide",
  title: "Riya Call Girl Hyderabad — Complete Guide to Riya Escort Service 2026",
  excerpt:
    "Looking for Riya call girl Hyderabad? Read our complete guide on how to book call girl Riya, what to expect from Riya escort service, and why Riya is Hyderabad's most trusted escort.",
  date: "23 August 2026",
  readTime: "5 min read",
  category: "Escort Guide",
  content: null,
};

export default function BlogClient() {
  const [openPost, setOpenPost] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">

        {/* Header */}
        <div className="text-center space-y-2 pb-6 border-b border-zinc-200">
          <p className="text-xs font-bold uppercase tracking-widest text-[#d62860]">Riya Escort Service Blog</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">Latest Articles & Guides</h1>
          <p className="text-sm text-zinc-500">Riya Call Girl Hyderabad — Tips, Guides &amp; Escort Service Updates</p>
        </div>

        {/* Featured Blog Post */}
        <article className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">

          {/* Post Header */}
          <div className="bg-gradient-to-r from-[#120720] to-[#2d0a3e] p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#d62860] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {todayPost.category}
              </span>
              <span className="text-zinc-400 text-xs">{todayPost.date}</span>
              <span className="text-zinc-400 text-xs">· {todayPost.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {todayPost.title}
            </h2>
            <p className="text-zinc-300 text-sm mt-3 leading-relaxed">
              {todayPost.excerpt}
            </p>
          </div>

          {/* Post Body */}
          <div className="p-8 sm:p-10 space-y-8 leading-relaxed text-zinc-700 text-sm sm:text-base">

            {/* Intro */}
            <section className="space-y-3">
              <p>
                If you are searching for <strong className="text-zinc-900">Riya call girl Hyderabad</strong> or{" "}
                <strong className="text-zinc-900">call girl Riya</strong>, you have landed at the right place.
                <strong className="text-zinc-900"> Riya Escort Service</strong> is Hyderabad&apos;s most trusted platform
                for premium, verified, and discreet companionship. In this guide, we will cover everything
                you need to know about booking <strong className="text-zinc-900">Riya escort service Hyderabad</strong>.
              </p>
            </section>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#d62860] border-l-4 border-[#d62860] pl-3">
                Who is Riya? — Hyderabad&apos;s #1 Call Girl
              </h2>
              <p>
                <strong className="text-zinc-900">Riya</strong> is one of Hyderabad&apos;s most sought-after companions,
                known across the city as <strong className="text-zinc-900">Riya call girl</strong>,{" "}
                <strong className="text-zinc-900">call girl Riya</strong>, and{" "}
                <strong className="text-zinc-900">Riya escort Hyderabad</strong>. With a reputation built on
                discretion, elegance, and professionalism, Riya represents the gold standard in{" "}
                <strong className="text-zinc-900">escort services in Hyderabad</strong>.
              </p>
              <p>
                Whether you are looking for a companion for a corporate dinner, a private evening, or simply
                quality companionship — <strong className="text-zinc-900">Riya escort service</strong> offers
                verified profiles that deliver real, premium experiences.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#d62860] border-l-4 border-[#d62860] pl-3">
                How to Book Riya Call Girl Hyderabad?
              </h2>
              <p>Booking <strong className="text-zinc-900">call girl Riya</strong> is simple and completely confidential:</p>
              <ol className="list-decimal pl-6 space-y-2 text-zinc-600">
                <li>
                  <strong className="text-zinc-800">Browse Profiles</strong> — Visit our{" "}
                  <Link href="/product" className="text-[#d62860] hover:underline font-medium">
                    verified companions gallery
                  </Link>{" "}
                  and choose a model.
                </li>
                <li>
                  <strong className="text-zinc-800">Contact via WhatsApp or Call</strong> — Send a message or call
                  our 24/7 support team to confirm availability.
                </li>
                <li>
                  <strong className="text-zinc-800">Choose Incall or Outcall</strong> — Our{" "}
                  <strong className="text-zinc-900">Riya escort service</strong> offers both incall (at our location)
                  and outcall (at your hotel or home) options.
                </li>
                <li>
                  <strong className="text-zinc-800">Confirm &amp; Meet</strong> — Booking is confirmed within minutes.
                  All interactions are 100% discreet and private.
                </li>
              </ol>
            </section>

            {/* Section 3 — Locations */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#d62860] border-l-4 border-[#d62860] pl-3">
                Riya Escort Service — Available Locations in Hyderabad
              </h2>
              <p>
                <strong className="text-zinc-900">Riya call girl Hyderabad</strong> is available across all major areas.
                Our most popular locations include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { name: "Banjara Hills", href: "/locations/Banjara-Hills" },
                  { name: "Jubilee Hills", href: "/locations/Jubilee-Hills" },
                  { name: "Gachibowli", href: "/locations/Gachibowli" },
                  { name: "Hitech City", href: "/locations/Hitech-City" },
                  { name: "Madhapur", href: "/locations/Madhapur" },
                  { name: "Kondapur", href: "/locations/Kondapur" },
                  { name: "Kukatpally", href: "/locations/Kukatpally" },
                  { name: "Ameerpet", href: "/locations/Ameerpet" },
                  { name: "Secunderabad", href: "/locations/Secunderabad" },
                ].map((loc) => (
                  <Link
                    key={loc.name}
                    href={loc.href}
                    className="flex items-center gap-2 text-xs font-semibold text-[#d62860] hover:underline"
                  >
                    <span className="text-[#d62860]">📍</span> {loc.name}
                  </Link>
                ))}
              </div>
              <p className="text-zinc-500 text-sm pt-1">
                And 50+ more locations across Hyderabad. View all on our{" "}
                <Link href="/product" className="text-[#d62860] hover:underline font-medium">
                  listings page
                </Link>.
              </p>
            </section>

            {/* Section 4 — Why Choose */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#d62860] border-l-4 border-[#d62860] pl-3">
                Why Choose Riya Escort Service Hyderabad?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "✅", title: "100% Verified Profiles", desc: "All companions have verified, real photos — no fake listings." },
                  { icon: "🔒", title: "Complete Discretion", desc: "Your privacy is our priority. No data sharing, ever." },
                  { icon: "🕐", title: "24/7 Availability", desc: "Call girl Riya available day and night across Hyderabad." },
                  { icon: "💎", title: "Premium Quality", desc: "Educated, well-groomed, and professional companions only." },
                  { icon: "📍", title: "60+ Locations", desc: "Incall & outcall service across all Hyderabad areas." },
                  { icon: "⚡", title: "Fast Booking", desc: "Most bookings confirmed within minutes via WhatsApp." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-zinc-50 rounded-2xl p-4 border border-zinc-100">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-zinc-800 text-sm">{item.title}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 — FAQ */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-[#d62860] border-l-4 border-[#d62860] pl-3">
                FAQs — Riya Call Girl Hyderabad
              </h2>
              {[
                {
                  q: "Is Riya escort service safe and discreet?",
                  a: "Yes. Riya Escort Service maintains 100% confidentiality. Your personal information is never shared with anyone.",
                },
                {
                  q: "How do I contact Riya call girl Hyderabad?",
                  a: "You can contact us via WhatsApp or call at +91 9905752614. Our team is available 24/7.",
                },
                {
                  q: "Is outcall service available?",
                  a: "Yes. Call girl Riya provides both incall and outcall escort service across all major Hyderabad locations including 5-star hotels.",
                },
                {
                  q: "Are the profiles on Riya escort service verified?",
                  a: "Absolutely. All 60+ profiles are 100% real and verified with authentic photos. No fake listings.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200">
                  <p className="font-bold text-zinc-900 text-sm">Q: {faq.q}</p>
                  <p className="text-zinc-600 text-sm mt-2">A: {faq.a}</p>
                </div>
              ))}
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#120720] to-[#2d0a3e] rounded-2xl p-7 text-center space-y-4">
              <h3 className="text-xl font-extrabold text-white">
                Ready to Book <span className="text-[#ff2d55]">Riya Call Girl</span> Hyderabad?
              </h3>
              <p className="text-zinc-300 text-sm">
                Call girl Riya is available 24/7 — Contact us now for a discreet, premium escort experience in Hyderabad.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="https://wa.me/919905752614?text=Hi%2C%20I%20am%20interested%20in%20booking%20Riya%20escort%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  WhatsApp Us
                </a>
                <Link
                  href="/product"
                  className="bg-[#d62860] hover:bg-rose-700 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-all hover:scale-105"
                >
                  View All Profiles
                </Link>
              </div>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
              <span className="text-xs font-bold text-zinc-400 mr-1">Tags:</span>
              {[
                "Riya call girl",
                "call girl Riya",
                "Riya escort service",
                "call girl Hyderabad",
                "escort service Hyderabad",
                "Riya escort Hyderabad",
                "Hyderabad call girl",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-rose-50 text-[#d62860] border border-rose-200 px-3 py-1 rounded-full font-medium"
                >
                  #{tag.replace(/ /g, "")}
                </span>
              ))}
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
