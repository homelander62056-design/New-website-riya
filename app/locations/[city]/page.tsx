import React from "react";
import { Metadata } from "next";
import ProductClient from "../../product/ProductClient";
import HomeBelow from "../../components/homeBelow";
import Inform from "../../components/inform";

type Props = {
  params: Promise<{ city: string }>;
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedCity = decodeURIComponent(resolvedParams.city).replace(/-/g, " ");
  const capitalizedCity = decodedCity
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `Premium Escorts in ${capitalizedCity} | Verified Companions`,
    description: `Find top-rated, luxury companions and premium escort services in ${capitalizedCity}, Hyderabad. Verified profiles for a discreet and private experience.`,
    alternates: {
      canonical: `https://riyaescortservices.com/locations/${resolvedParams.city}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const decodedCity = decodeURIComponent(resolvedParams.city).replace(/-/g, " ");
  const capitalizedCity = decodedCity
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-zinc-800 overflow-x-hidden">
      <main className="flex-1">
        {/* Location Specific Header Section */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Premium Escorts in <span className="text-[#ff2d55]">{capitalizedCity}</span>
            </h1>
            <p className="text-base text-zinc-600 max-w-2xl mx-auto">
              Experience the finest companionship in {capitalizedCity}, Hyderabad. Browse our verified luxury companions, offering discreet and professional adult escort services tailored for you.
            </p>
          </div>
        </section>

        {/* Models Listing Container */}
        <div className="py-4">
          <ProductClient defaultCity={capitalizedCity} />
        </div>

        {/* Detailed Information Section */}
        <div className="bg-white text-zinc-800 border-t border-zinc-200 mt-10">
          <HomeBelow />
          <Inform />
        </div>
      </main>
    </div>
  );
}
