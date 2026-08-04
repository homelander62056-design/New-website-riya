"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const locationsList = [
  "Banjara Hills",
  "Ameerpet",
  "Jubilee Hills",
  "Begumpet",
  "Madhapur",
  "Secunderabad",
  "Hitech City",
  "Somajiguda",
  "Gachibowli",
  "Punjagutta",
  "Kondapur",
  "Tolichowki",
  "Kukatpally",
  "Mehdipatnam",
  "Miyapur",
  "Manikonda",
];

const servicesList = [
  "VIP Escorts",
  "High Class Escorts",
  "Independent Escorts",
  "College Girl Escorts",
  "Russian Escorts",
  "Model Escorts",
  "Girlfriend Experience",
  "Hotel Escorts",
];

export default function HeaderPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="w-full bg-gray-50 border-b border-zinc-200/80 py-3.5 px-4 sm:px-6 lg:px-12 flex items-center justify-between sticky top-0 z-50 shadow-xs">

      {/* Brand / Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <Image
          src="/logo.png"
          alt="Riya Escort Logo"
          width={50} 
          height={50}
          className="w-10 h-10 object-contain flex-shrink-0"
        />
        <div className="flex flex-col leading-none">
          <span className="text-xl font-extrabold italic text-rose-500 tracking-tight">Riya Escort Service</span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-semibold text-zinc-700 ml-auto mr-60">
        <Link href="/" className="hover:text-rose-500 transition-colors">
          Home
        </Link>
        <Link href="/product" className="hover:text-rose-500 transition-colors">
          Models
        </Link>

        {/* Locations Dropdown on Hover */}
        <div className="relative group py-2">
          <span className="hover:text-rose-500 group-hover:text-rose-500 transition-colors flex items-center gap-1 cursor-pointer">
            Locations
            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>

          {/* Locations Hover Card */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50 w-[420px]">
            <div className="bg-white border border-pink-100/80 rounded-3xl p-6 sm:p-7 shadow-2xl grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-medium text-zinc-700">
              {locationsList.map((loc) => (
                <Link
                  key={loc}
                  href={`/product?location=${encodeURIComponent(loc)}`}
                  className="hover:text-rose-500 transition-colors block py-0.5"
                >
                  {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Services Dropdown on Hover */}
        <div className="relative group py-2">
          <span className="hover:text-rose-500 group-hover:text-rose-500 transition-colors flex items-center gap-1 cursor-pointer">
            Services
            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>

          {/* Services Hover Card */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50 w-[300px]">
            <div className="bg-white border border-pink-100/80 rounded-3xl p-6 shadow-2xl space-y-2.5 text-sm font-medium text-zinc-700">
              {servicesList.map((srv) => (
                <Link
                  key={srv}
                  href="/product"
                  className="hover:text-rose-500 transition-colors block py-0.5"
                >
                  {srv}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/blog" className="hover:text-rose-500 transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-rose-500 transition-colors">
          Contact
        </Link>
      </nav>

      {/* Action Button & Mobile Hamburger */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-800 hover:text-rose-500 p-2 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-50 border-b border-zinc-200 p-5 space-y-3.5 md:hidden shadow-lg flex flex-col text-sm font-medium text-zinc-700 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-rose-500 py-1">Home</Link>
          <Link href="/product" onClick={() => setMenuOpen(false)} className="hover:text-rose-500 py-1">Models</Link>
          
          {/* Mobile Locations Expandable */}
          <div>
            <button
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
              className="w-full flex items-center justify-between hover:text-rose-500 py-1 font-medium"
            >
              <span>Locations</span>
              <svg className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileLocationsOpen && (
              <div className="pl-4 pt-2 grid grid-cols-2 gap-2 text-xs text-zinc-600">
                {locationsList.map((loc) => (
                  <Link
                    key={loc}
                    href={`/product?location=${encodeURIComponent(loc)}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-rose-500 py-1"
                  >
                    {loc}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Expandable */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between hover:text-rose-500 py-1 font-medium"
            >
              <span>Services</span>
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pt-2 space-y-1 text-xs text-zinc-600">
                {servicesList.map((srv) => (
                  <Link
                    key={srv}
                    href="/product"
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-rose-500 py-1"
                  >
                    {srv}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-rose-500 py-1">Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-rose-500 py-1">Contact</Link>
        </div>
      )}

    </header>
  );
}