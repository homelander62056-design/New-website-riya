"use client";

import React, { useEffect, useState } from "react";
import { trackWhatsAppClick } from "../utils/trackWhatsapp";

export default function FloatingContactButtons() {
  const [mounted, setMounted] = useState(false);
  const phoneNumber = "919905752614";
  const formattedPhone = "+919905752614";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi Riya Escort Service, I am interested in booking a VIP model in Hyderabad via riyaescortservices.com"
  )}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      aria-label="Floating quick contact buttons"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9990] flex flex-col items-center gap-3.5"
    >
      {/* 1. Original Phone Call Floating Button */}
      <a
        href={`tel:${formattedPhone}`}
        aria-label="Call Now"
        title="Call Now: +91 9905752614"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 text-white flex items-center justify-center shadow-lg shadow-rose-500/35 hover:shadow-rose-500/55 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
      >
        <svg
          className="w-6 h-6 sm:w-6.5 sm:h-6.5 fill-current transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
        </svg>
      </a>

      {/* 2. Original Official WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackWhatsAppClick({
            name: "Floating Button",
            city: "Hyderabad",
            whatsappNumber: phoneNumber,
          })
        }
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba57] text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
      >
        {/* Live Online Pulse Animation */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Official WhatsApp Logo SVG */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.668-.699c.969.54 1.776.818 2.792.818 3.18 0 5.766-2.587 5.766-5.767.001-3.181-2.584-5.803-5.766-5.803zm3.385 8.204c-.14.393-.814.734-1.12.779-.293.043-.668.067-1.082-.066-.264-.085-.605-.204-1.042-.395-1.842-.803-3.037-2.673-3.129-2.796-.092-.123-.746-.992-.746-1.893 0-.901.472-1.343.64-1.527.169-.184.369-.23.492-.23.123 0 .246.002.354.007.113.006.264-.043.413.315.154.368.524 1.277.57 1.369.046.092.077.2.015.323-.061.123-.092.2-.184.307-.092.108-.194.24-.277.323-.092.092-.188.193-.081.377.108.184.478.788 1.025 1.275.706.629 1.301.824 1.486.916.184.092.292.077.4-.046.108-.123.461-.537.584-.721.123-.184.246-.154.415-.092.169.061 1.077.507 1.261.6.184.092.307.138.353.215.046.077.046.446-.094.839zM12.042 2C6.495 2 2 6.495 2 12.042c0 1.956.559 3.782 1.527 5.337L2 22l4.788-1.509a9.988 9.988 0 005.254 1.551c5.548 0 10.042-4.495 10.042-10.042C22.084 6.495 17.59 2 12.042 2zm0 18.258c-1.637 0-3.176-.481-4.473-1.31l-.321-.207-2.825.89.897-2.766-.226-.339A8.212 8.212 0 013.784 12.04c0-4.554 3.705-8.258 8.258-8.258 4.554 0 8.258 3.704 8.258 8.258 0 4.553-3.704 8.258-8.258 8.258z" />
        </svg>
      </a>
    </aside>
  );
}
