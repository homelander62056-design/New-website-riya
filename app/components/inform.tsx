import React from "react";

interface InformProps {
  whatsappUrl?: string;
  phoneUrl?: string;
}

export default function Inform({
  whatsappUrl = "https://wa.me/919905752614?text=Hi%2C%20I%20am%20interested%20in%20booking%20your%20service%20via%20riyaescortservices.com",
  phoneUrl = "tel:+919905752614",
}: InformProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      <div className="bg-[#fff5f7] border border-pink-200/70 rounded-[2rem] p-8 sm:p-12 md:p-14 text-center shadow-xs">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-zinc-900 tracking-tight leading-tight">
          Ready for an <span className="text-rose-500">Unforgettable</span> Experience?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-4 font-normal">
          Get in touch with us today and let us connect you with the perfect companion for any occasion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            WhatsApp Us
          </a>

          <a
            href={phoneUrl}
            className="bg-[#ff2d55] hover:bg-rose-600 text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}