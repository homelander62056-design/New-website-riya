"use client";

import React, { useEffect, useState } from "react";

export default function DialogBoxes() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const isVerified = localStorage.getItem("age_verified");
    if (!isVerified || isVerified !== "true") {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("age_verified", "true");
    setShowModal(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isMounted || !showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#0f0b15]/95 border border-pink-500/20 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-pink-500/10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Warning Icon Container */}
        <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-950/40 border border-pink-500/30 text-amber-300 shadow-inner">
          <svg
            className="w-7 h-7 text-amber-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white uppercase mb-3">
          <span className="bg-gradient-to-r from-amber-200 via-rose-300 to-pink-400 bg-clip-text text-transparent">
            18+ ONLY
          </span>
        </h2>

        {/* Copyright-Safe & Clear Content */}
        <p className="text-sm text-zinc-300 leading-relaxed mb-8 px-2">
          This portal contains adult-oriented companion listings. By entering, you confirm that you are at least 18 years of age and agree to abide by our site guidelines and privacy terms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleExit}
            type="button"
            className="w-full sm:w-1/2 py-3 px-5 rounded-2xl border border-zinc-700 bg-zinc-900/80 text-zinc-300 font-semibold text-xs tracking-wider uppercase hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-200 cursor-pointer"
          >
            Exit
          </button>
          
          <button
            onClick={handleAccept}
            type="button"
            className="w-full sm:w-1/2 py-3 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            I am 18+ — Enter
          </button>
        </div>

        {/* Subtle Footer Disclaimer */}
        <p className="mt-5 text-[11px] text-zinc-500">
          Your choice will be saved locally for a seamless experience.
        </p>
      </div>
    </div>
  );
}