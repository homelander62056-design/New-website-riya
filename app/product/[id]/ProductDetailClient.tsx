"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductItem, initialProductsData } from "../productsData";
import { getModelSpecsAndDetails } from "./data";
import { trackWhatsAppClick, createWhatsAppLink } from "../../utils/trackWhatsapp";

interface ProductDetailClientProps {
  product: ProductItem;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const details = getModelSpecsAndDetails(product);
  const cleanPhone = product.phone.replace(/[^+\d]/g, "");
  const whatsappUrl = createWhatsAppLink(product.name, product.city, product.whatsappNumber);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Get related models excluding current
  const relatedModels = initialProductsData
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans text-zinc-800">
      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-zinc-500 flex items-center gap-2 font-medium flex-wrap">
          <Link href="/" className="hover:text-[#ff2d55] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/product" className="hover:text-[#ff2d55] transition-colors">
            Models
          </Link>
          <span>/</span>
          <Link href={`/product?city=${encodeURIComponent(details.locationDetail.split(',')[0].trim())}`} className="hover:text-[#ff2d55] transition-colors">
            {details.locationDetail}
          </Link>
          <span>/</span>
          <span className="text-[#ff2d55] font-bold">{product.name}</span>
        </nav>

        {/* Top 2-Column Hero Card: Left Photo + Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Model Image */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm aspect-[3/4] relative max-h-[540px] w-full">
              <img
                src={details.displayImage}
                alt={`${product.name} - ${product.city} Escort Model`}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.src = `/images/image${((product.id - 1) % 16) + 1}.avif`;
                }}
              />
              {/* Status Badge (Top Left) */}
              <div className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-xs text-white font-bold text-xs px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>{product.status || "Available Now"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications, Bio & Tags */}
          <div className="lg:col-span-7 bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">

            {/* Top Row: Pill Badges */}
            <div className="flex items-center justify-between gap-3">
              <span className="bg-[#ff2d55] text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                {details.badge}
              </span>
              <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-semibold rounded-full px-3.5 py-1">
                {details.timing}
              </span>
            </div>

            {/* Model Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-zinc-500 font-semibold text-sm sm:text-base mt-1">
                {product.age} years &bull; <Link href={`/product?city=${encodeURIComponent(details.locationDetail.split(',')[0].trim())}`} className="text-rose-500 hover:underline">{product.city}</Link>
              </p>
            </div>

            {/* Specifications 6-Box Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Height</span>
                <span className="text-[#ff2d55] font-bold text-sm sm:text-base">{details.height}</span>
              </div>
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Weight</span>
                <span className="text-[#ff2d55] font-bold text-sm sm:text-base">{details.weight}</span>
              </div>
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Figure</span>
                <span className="text-[#ff2d55] font-bold text-sm sm:text-base">{details.figure}</span>
              </div>
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Hair</span>
                <span className="text-[#ff2d55] font-bold text-sm sm:text-base">{details.hair}</span>
              </div>
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Eyes</span>
                <span className="text-[#ff2d55] font-bold text-sm sm:text-base">{details.eyes}</span>
              </div>
              <div className="bg-[#fafafa] border border-zinc-100 rounded-2xl p-3 text-center">
                <span className="text-xs text-zinc-400 font-medium block">Languages</span>
                <span className="text-[#ff2d55] font-bold text-xs sm:text-sm truncate block">{details.languages}</span>
              </div>
            </div>

            {/* Profile Highlights List */}
            <div className="bg-rose-50/60 border border-pink-100 rounded-2xl p-4 space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Verified Highlights &amp; Inclusions
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-700">
                {details.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rich Bio Text Paragraphs */}
            <div className="space-y-3.5 text-sm sm:text-base text-zinc-600 leading-relaxed pt-2 border-t border-zinc-100">
              {details.bioParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Available For Section */}
            <div className="pt-4 border-t border-zinc-100 space-y-3">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Services &amp; Occasions Available For
              </h3>
              <div className="flex flex-wrap gap-2">
                {details.availableFor.map((item) => (
                  <span
                    key={item}
                    className="border border-pink-200 text-[#ff2d55] bg-pink-50/50 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Contact Card Section */}
        <div className="bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-8 shadow-xs text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900">
            Contact &amp; Book {product.name}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
            Direct communication with zero middleman fees. Instant WhatsApp response for {product.city}.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  name: product.name,
                  city: product.city,
                  whatsappNumber: product.whatsappNumber,
                })
              }
              className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-sm text-base transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Call Now Button */}
            <a
              href={`tel:${cleanPhone}`}
              className="bg-[#ff2d55] hover:bg-rose-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-sm text-base transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) Section for this Model */}
        {details.faqs && details.faqs.length > 0 && (
          <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-900">
                Frequently Asked <span className="text-[#ff2d55]">Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500">
                Everything you need to know before booking an appointment with {product.name}.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {details.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-zinc-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-5 py-3.5 text-left font-bold text-sm sm:text-base text-zinc-800 flex items-center justify-between gap-3 bg-zinc-50/50 hover:bg-zinc-100/60 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-rose-500 font-extrabold text-lg">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 py-3.5 bg-white text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Models Section with Direct Links */}
        <div className="pt-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Related <span className="text-[#ff2d55]">Models</span>
            </h2>
            <Link href="/product" className="text-xs sm:text-sm font-bold text-rose-500 hover:underline">
              View All Models →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedModels.map((item) => {
              const itemDetails = getModelSpecsAndDetails(item);
              const itemPhone = item.phone.replace(/[^+\d]/g, "");
              const itemWa = createWhatsAppLink(item.name, item.city, item.whatsappNumber);

              return (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  <Link href={`/product/${item.id}`} className="block relative aspect-[3/4] bg-zinc-100 overflow-hidden cursor-pointer">
                    <img
                      src={itemDetails.displayImage}
                      alt={`${item.name} in ${item.city}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `/images/image${((item.id - 1) % 16) + 1}.avif`;
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-[#ff2d55] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                      {itemDetails.badge}
                    </span>
                  </Link>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-lg font-extrabold text-zinc-900 group-hover:text-[#ff2d55] transition-colors cursor-pointer">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-zinc-500 font-semibold mt-0.5">
                        {item.age} years &bull; {item.city}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={itemWa}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackWhatsAppClick({
                            name: item.name,
                            city: item.city,
                            whatsappNumber: item.whatsappNumber,
                          })
                        }
                        className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                      >
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${itemPhone}`}
                        className="bg-[#ff2d55] hover:bg-rose-600 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 transition-all"
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>
    </div>
  );
}
