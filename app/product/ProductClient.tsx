"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { initialProductsData, ProductItem } from "./productsData";
import { trackWhatsAppClick, createWhatsAppLink } from "../utils/trackWhatsapp";

// Number of products to load per batch on scroll
const BATCH_SIZE = 10;

function ProductContent() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get("city") || "All";

  const [products] = useState<ProductItem[]>(initialProductsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState(initialCity);

  // Number of products currently visible (starts at 10)
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cityParam = searchParams.get("city");
    if (cityParam) {
      setSelectedCity(cityParam);
    }
  }, [searchParams]);

  // Reset to 10 visible products whenever search or city filter changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [searchTerm, selectedCity]);

  // List of all 30 cities
  const citiesList = [
    "All",
    "Banjara Hills",
    "Jubilee Hills",
    "Madhapur",
    "Hitech City",
    "Gachibowli",
    "Kondapur",
    "Kukatpally",
    "Miyapur",
    "Ameerpet",
    "Begumpet",
    "Secunderabad",
    "Somajiguda",
    "Punjagutta",
    "Tolichowki",
    "Mehdipatnam",
    "Attapur",
    "Manikonda",
    "Nallagandla",
    "Chandanagar",
    "LB Nagar",
    "Dilsukhnagar",
    "Uppal",
    "Nagole",
    "Kompally",
    "Suchitra",
    "Shamshabad",
    "Nizampet",
    "Alwal",
    "Hafeezpet",
    "Kothapet",
  ];

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm);

    const matchesCity =
      selectedCity === "All" ||
      item.city.toLowerCase().includes(selectedCity.toLowerCase());

    return matchesSearch && matchesCity;
  });

  const paginatedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // Infinite scroll observer: Automatically load 10 more when scrolling to bottom
  useEffect(() => {
    const target = observerTargetRef.current;
    if (!target || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredProducts.length));
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMore, filteredProducts.length]);

  return (
    <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-3 space-y-4">

      {/* Search & Location Filter Header */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl shadow-xs border border-zinc-200 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#ff2d55] tracking-tight">
              Listings in Hyderabad
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Showing verified companion profiles in Hyderabad. Click profile to view full details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Input */}
          <div className="md:col-span-2 relative">
            <input
              type="text"
              placeholder="Search models, city, or profile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2d55] text-zinc-900 placeholder-zinc-400"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-3 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* City Selector */}
          <div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff2d55] text-zinc-900 cursor-pointer font-medium"
            >
              {citiesList.map((city) => (
                <option key={city} value={city}>
                  {city === "All" ? "All Locations" : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick City Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1 scrollbar-thin">
          <span className="text-xs font-bold text-zinc-500 shrink-0">Locations:</span>
          {citiesList.slice(0, 10).map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3 py-1 text-xs rounded-full border shrink-0 transition-colors ${selectedCity === city
                  ? "bg-[#ff2d55] text-white border-[#ff2d55] font-semibold"
                  : "bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-rose-400"
                }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Classified List */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200 p-8 space-y-3">
          <div className="w-16 h-16 bg-zinc-100 text-zinc-400 rounded-full flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-zinc-800">
            No listings found for &quot;{selectedCity}&quot;
          </h3>
          <p className="text-sm text-zinc-500">
            Try selecting another city or reset search filter.
          </p>
          <button
            onClick={() => {
              setSelectedCity("All");
              setSearchTerm("");
            }}
            className="mt-2 px-4 py-2 bg-[#ff2d55] hover:bg-[#e02447] text-white font-semibold text-xs rounded-xl transition-colors"
          >
            View All Locations
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {paginatedProducts.map((product) => {
              const cleanPhone = product.phone.replace(/[^+\d]/g, "");
              const fallbackImg = `/images/image${((product.id - 1) % 16) + 1}.avif`;
              const modelImg = product.image || fallbackImg;
              const isVip = product.id % 2 === 0;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl border border-pink-200/80 hover:border-rose-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Box Container */}
                  <Link href={`/product/${product.id}`} className="block relative w-full aspect-[4/4.2] overflow-hidden bg-zinc-100 cursor-pointer">
                    <img
                      src={modelImg}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImg;
                      }}
                    />

                    {/* Status Badge (Top Left) */}
                    <div className="absolute top-2.5 left-2.5 bg-emerald-600/90 backdrop-blur-xs text-white font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-md z-10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      <span>{product.status || "Available Now"}</span>
                    </div>

                    {/* VIP / Premium Badge (Top Right) */}
                    <div className="absolute top-2.5 right-2.5 bg-[#ff2d55] text-white font-bold text-xs px-2.5 py-0.5 rounded-full shadow-md z-10">
                      {isVip ? "VIP" : "Premium"}
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">

                    {/* Model Name & Age Row */}
                    <div>
                      <div className="flex items-center justify-between">
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#ff2d55] transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <span className="text-sm font-bold text-[#ff2d55]">
                          {product.age} yrs
                        </span>
                      </div>

                      {/* Location Row */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-500 mt-1">
                        <span className="text-[#ff2d55]">📍</span>
                        <span className="truncate">{product.city}</span>
                      </div>
                    </div>

                    {/* Short Description Bio */}
                    <p className="text-xs sm:text-sm text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Bottom Action Row (View Profile + Direct Contact Buttons) */}
                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between mt-auto">
                      <Link
                        href={`/product/${product.id}`}
                        className="text-xs font-bold text-[#ff2d55] hover:underline flex items-center gap-1 group/btn"
                      >
                        <span>View Profile</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">&gt;</span>
                      </Link>

                      <div className="flex items-center gap-2">
                        {/* Direct Call Button */}
                        <a
                          href={`tel:${cleanPhone}`}
                          className="w-8 h-8 rounded-full bg-rose-100 text-[#ff2d55] hover:bg-[#ff2d55] hover:text-white transition-colors flex items-center justify-center shadow-xs"
                          title="Call Now"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                          </svg>
                        </a>

                        {/* WhatsApp Button */}
                        {product.hasWhatsapp && (
                          <a
                            href={createWhatsAppLink(product.name, product.city, product.whatsappNumber)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackWhatsAppClick({
                                name: product.name,
                                city: product.city,
                                whatsappNumber: product.whatsappNumber,
                              })
                            }
                            className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center shadow-xs"
                            title="Chat on WhatsApp"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Infinite Scroll / Load More Section at Bottom */}
          <div className="pt-6 mt-6 border-t border-zinc-200 flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-xs sm:text-sm text-zinc-600 font-medium">
              Showing <span className="font-bold text-zinc-900">{Math.min(visibleCount, filteredProducts.length)}</span> of <span className="font-bold text-zinc-900">{filteredProducts.length}</span> listings
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function ProductClient() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center py-20 text-zinc-500">
          Loading listings...
        </div>
      }>
        <ProductContent />
      </Suspense>
    </div>
  );
}
