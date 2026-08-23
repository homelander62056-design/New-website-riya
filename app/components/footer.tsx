"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FooterPage() {
  return (
    <footer className="w-full bg-[#fdfdfd] text-zinc-600 font-sans border-t border-zinc-100 relative py-12 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-1 space-y-4 pr-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="Riya Escort Logo"
              width={50}
              height={50}
              className="w-10 h-10 object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold italic text-rose-500 tracking-tight">Riya</span>
              <span className="text-xl font-extrabold italic text-rose-500 tracking-tight -mt-1">Escort Service</span>
            </div>
          </Link>

          {/* Description */}
          <p className="text-sm text-zinc-500 leading-relaxed font-normal">
            Hyderabad&apos;s premier escort service. We connect discerning gentlemen with elegant, sophisticated companions for memorable experiences.
          </p>

          {/* Icon Buttons */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://wa.me/919905752614?text=Hi%2C%20I%20am%20interested%20in%20booking%20your%20service%20via%20riyaescortservices.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-200 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="tel:+919905752614"
              aria-label="Call"
              className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 hover:bg-rose-200 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-4">
            QUICK LINKS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-rose-500 transition-colors">Home</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Our Models</Link></li>
            <li><Link href="/blog" className="hover:text-rose-500 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-rose-500 transition-colors">Contact Us</Link></li>
            <li><Link href="/about" className="hover:text-rose-500 transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Column 3: POPULAR LOCATIONS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-4">
            POPULAR LOCATIONS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/product?city=Banjara%20Hills" className="hover:text-rose-500 transition-colors">Banjara Hills Escorts</Link></li>
            <li><Link href="/product?city=Jubilee%20Hills" className="hover:text-rose-500 transition-colors">Jubilee Hills Call Girls</Link></li>
            <li><Link href="/product?city=Gachibowli" className="hover:text-rose-500 transition-colors">Gachibowli Escorts</Link></li>
            <li><Link href="/product?city=Hitech%20City" className="hover:text-rose-500 transition-colors">Hitech City Escorts</Link></li>
            <li><Link href="/product?city=Madhapur" className="hover:text-rose-500 transition-colors">Madhapur Escort Services</Link></li>
            <li><Link href="/product?city=Kondapur" className="hover:text-rose-500 transition-colors">Kondapur Escorts</Link></li>
            <li><Link href="/product?city=Begumpet" className="hover:text-rose-500 transition-colors">Begumpet Escorts</Link></li>
            <li><Link href="/product?city=Secunderabad" className="hover:text-rose-500 transition-colors">Secunderabad Call Girls</Link></li>
            <li><Link href="/product?city=Kukatpally" className="hover:text-rose-500 transition-colors">Kukatpally Escorts</Link></li>
            <li><Link href="/product?city=Ameerpet" className="hover:text-rose-500 transition-colors">Ameerpet Escorts</Link></li>
            <li><Link href="/product?city=Somajiguda" className="hover:text-rose-500 transition-colors">Somajiguda Call Girls</Link></li>
            <li><Link href="/product?city=Miyapur" className="hover:text-rose-500 transition-colors">Miyapur Escorts</Link></li>
          </ul>
        </div>

        {/* Column 4: MORE AREAS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-4">
            MORE AREAS
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/product?city=Punjagutta" className="hover:text-rose-500 transition-colors">Punjagutta Escorts</Link></li>
            <li><Link href="/product?city=Tolichowki" className="hover:text-rose-500 transition-colors">Tolichowki Escorts</Link></li>
            <li><Link href="/product?city=Mehdipatnam" className="hover:text-rose-500 transition-colors">Mehdipatnam Call Girls</Link></li>
            <li><Link href="/product?city=Dilsukhnagar" className="hover:text-rose-500 transition-colors">Dilsukhnagar Escorts</Link></li>
            <li><Link href="/product?city=LB%20Nagar" className="hover:text-rose-500 transition-colors">LB Nagar Escorts</Link></li>
            <li><Link href="/product?city=Attapur" className="hover:text-rose-500 transition-colors">Attapur Escorts</Link></li>
            <li><Link href="/product?city=Manikonda" className="hover:text-rose-500 transition-colors">Manikonda Escorts</Link></li>
            <li><Link href="/product?city=Nallagandla" className="hover:text-rose-500 transition-colors">Nallagandla Escorts</Link></li>
            <li><Link href="/product?city=Chandanagar" className="hover:text-rose-500 transition-colors">Chandanagar Escorts</Link></li>
            <li><Link href="/product?city=Uppal" className="hover:text-rose-500 transition-colors">Uppal Escorts</Link></li>
            <li><Link href="/product?city=Shamshabad" className="hover:text-rose-500 transition-colors">Shamshabad Escorts</Link></li>
            <li><Link href="/product?city=Kompally" className="hover:text-rose-500 transition-colors">Kompally Escorts</Link></li>
          </ul>
        </div>

        {/* Column 5: OUR SERVICES */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-4">
            OUR SERVICES
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">VIP Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">High Class Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Independent Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">College Girl Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Russian Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Model Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Girlfriend Experience</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Hotel Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Affordable Escorts</Link></li>
            <li><Link href="/product" className="hover:text-rose-500 transition-colors">Night Service</Link></li>
          </ul>
        </div>

        {/* Column 6: LEGAL */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-rose-500 mb-4">
            LEGAL
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/privacyPolicy" className="hover:text-rose-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-rose-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/disclaimer" className="hover:text-rose-500 transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

      </div>

      {/* Our Premium Partners / Hyderabad Locations Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-200 text-center space-y-4">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff2d55]">
          OUR PREMIUM PARTNERS
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-zinc-600 font-medium max-w-5xl mx-auto">
          {[
            "Hyderabad Escorts",
            "Banjara Hills Escorts",
            "Jubilee Hills Escorts",
            "Gachibowli Escorts",
            "Hitech City Escorts",
            "Madhapur Escorts",
            "Kondapur Escorts",
            "Kukatpally Escorts",
            "Begumpet Escorts",
            "Ameerpet Escorts",
            "Secunderabad Escorts",
            "Miyapur Escorts",
          ].map((location) => (
            <Link
              key={location}
              href={`/product?query=${encodeURIComponent(location)}`}
              className="hover:text-rose-500 transition-colors"
            >
              {location}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright, DMCA & 18+ Disclaimer */}
      <div className="max-w-7xl mx-auto border-t border-zinc-200 mt-8 pt-8 space-y-3 text-xs font-semibold text-zinc-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Riya Escort Service. All rights reserved.</p>
          <p className="text-center md:text-right">
            Strictly 18+ Adult Service. By accessing this site, you confirm you are of legal age.
          </p>
        </div>

        <p className="text-center text-zinc-500 pt-1">
          Fully DMCA Protected &amp; Compliant. For copyright or content removal requests, please{" "}
          <Link href="/contact" className="text-rose-500 hover:underline font-medium">
            Contact Us
          </Link>.
        </p>
      </div>

      {/* Floating Call & WhatsApp Action Buttons at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919905752614?text=Hi%2C%20I%20am%20interested%20in%20booking%20your%20service%20via%20riyaescortservices.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
        <a
          href="tel:+919905752614"
          aria-label="Call Now"
          className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* ─── Find Us Online — Free Backlinks Section ─── */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-zinc-100">
        <div className="text-center mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Find Us Online</p>
          <p className="text-sm text-zinc-500 mt-1">Riya Call Girl &amp; Escort Service Hyderabad — Listed On</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="https://www.tumblr.com" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Tumblr"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#35465c] text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.384 2.371h.066c.048 0 1.107-.048 1.668-.181v3.37c-.802.21-1.773.213-2.052.213z"/></svg>
            Tumblr
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Medium"
            className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            Medium
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Pinterest"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E60023] text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
            Pinterest
          </a>
          <a href="https://reddit.com/r/hyderabad" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Reddit"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4500] text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            Reddit
          </a>
          <a href="https://blogger.com" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Blogger"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8000] text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.176 11.674c-.229-.459-.459-.842-.764-1.149.459-.842.689-1.837.689-2.908C18.101 4.1 15.194 1.5 11.595 1.5H6.5C4.019 1.5 2 3.519 2 6v12c0 2.481 2.019 4.5 4.5 4.5h11c2.481 0 4.5-2.019 4.5-4.5v-3.876c0-1.071-.306-2.068-.824-2.45zM8.5 7.5h3c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5S7.673 7.5 8.5 7.5zm7 9H8.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z"/></svg>
            Blogger
          </a>
          <a href="https://quora.com" target="_blank" rel="noopener noreferrer" title="Riya Escort Service on Quora"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#A82400] text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M11.825 0C5.282 0 0 5.282 0 11.825c0 6.546 5.282 11.825 11.825 11.825 1.8 0 3.496-.413 5.007-1.147l1.607 2.206h3.955l-2.744-3.77c1.932-2.121 3.125-4.952 3.125-8.114C22.775 5.282 18.37 0 11.825 0zm3.12 18.593l-1.55-2.131c-.413.072-.842.108-1.278.108-3.32 0-6.011-2.691-6.011-6.011s2.691-6.011 6.011-6.011 6.011 2.691 6.011 6.011c0 2.12-.692 4.075-1.88 5.633l1.521 2.09-2.824.311z"/></svg>
            Quora
          </a>
        </div>
        <p className="text-center text-xs text-zinc-400 mt-4">
          🔗 Riya Call Girl Hyderabad · Riya Escort Service · Call Girl Riya · Escort Service Hyderabad
        </p>
      </div>
    </footer>

  );
}
