import React from "react";
import Link from "next/link";
import FooterPage from "../footer/page";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-800 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">
        
        {/* Header Above Card */}
        <div className="text-center space-y-2 mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#ff2d55]">
            OUR STORY &amp; VISION
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            About <span className="text-[#ff2d55]">Riya Escort</span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto pt-1 font-medium">
            Hyderabad&apos;s premier platform for elite companionship, discreet engagements, and executive entertainment.
          </p>
        </div>

        {/* Content Container Card */}
        <div className="bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Welcome Section */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Welcome to Riya Escort Service
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Riya Escort Service stands as Hyderabad&apos;s most distinguished companion network, crafted exclusively for gentlemen seeking refined, charming, and intelligent companions. Established with a commitment to elevate industry standards, we provide seamless access to verified companions for corporate dinners, luxury travel, and private leisure across Hyderabad.
            </p>
          </section>

          {/* Our Mission */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Our Core Philosophy
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our philosophy is centered on delivering an unmatched companion experience that harmonizes poise, intelligence, and grace. We believe every engagement should feel natural, effortless, and tailored to your personal preferences — whether you require an elegant escort for a high-profile gala or a discreet date for a peaceful evening.
            </p>
          </section>

          {/* What Sets Us Apart */}
          <section className="space-y-5 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Why Choose Riya Escorts?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>✨</span> Authentic &amp; Verified Profiles
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Every profile on our roster undergoes thorough verification to guarantee 100% genuine photographs and accurate personal details.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>🔒</span> Absolute Discretion
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Your privacy is our highest priority. We implement encrypted communication channels and confidential booking procedures so your information remains strictly private.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>📞</span> 24/7 Dedicated Concierge
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Our customer support team operates around the clock to handle inquiries, customize bookings, and ensure your experience is smooth from start to finish.
                </p>
              </div>

              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-4 space-y-1.5">
                <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                  <span>👑</span> Curated Premium Selection
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  We curate a diverse portfolio of companions ranging from college models to VIP companions, accommodating every occasion and aesthetic preference.
                </p>
              </div>
            </div>
          </section>

          {/* Our Service Areas */}
          <section className="space-y-3 border-b border-zinc-100 pb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Hyderabad Service Locations
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Our agency offers comprehensive coverage throughout all prime sectors in Hyderabad, including{" "}
              <Link href="/product?query=Banjara%20Hills" className="text-[#ff2d55] font-semibold hover:underline">
                Banjara Hills
              </Link>,{" "}
              <Link href="/product?query=Jubilee%20Hills" className="text-[#ff2d55] font-semibold hover:underline">
                Jubilee Hills
              </Link>,{" "}
              <Link href="/product?query=Gachibowli" className="text-[#ff2d55] font-semibold hover:underline">
                Gachibowli
              </Link>,{" "}
              <Link href="/product?query=Hitech%20City" className="text-[#ff2d55] font-semibold hover:underline">
                Hitech City
              </Link>, and{" "}
              <Link href="/product?query=Madhapur" className="text-[#ff2d55] font-semibold hover:underline">
                Madhapur
              </Link>. Companions are available for both incall luxury hotel stays and outcalls to your preferred venue.
            </p>
          </section>

          {/* Contact Us CTA */}
          <section className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55]">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Elevate your companionship experience in Hyderabad today.{" "}
              <Link href="/contact" className="text-[#ff2d55] font-bold hover:underline">
                Connect directly
              </Link>{" "}
              with our concierge team via WhatsApp or Phone call for immediate, confidential assistance and instant booking confirmations.
            </p>
          </section>

        </div>
      </div>

      <FooterPage />
    </div>
  );
}