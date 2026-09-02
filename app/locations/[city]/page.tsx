import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ProductClient from "../../product/ProductClient";
import HomeBelow from "../../components/homeBelow";
import Inform from "../../components/inform";

type Props = {
  params: Promise<{ city: string }>;
};

const citiesList = [
  "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli",
  "Kondapur", "Kukatpally", "Miyapur", "Ameerpet", "Begumpet", "Secunderabad",
  "Somajiguda", "Punjagutta", "Tolichowki", "Mehdipatnam", "Attapur",
  "Manikonda", "Nallagandla", "Chandanagar", "LB Nagar", "Dilsukhnagar",
  "Uppal", "Nagole", "Kompally", "Suchitra", "Shamshabad", "Nizampet",
  "Alwal", "Hafeezpet", "Kothapet"
];

export async function generateStaticParams() {
  return citiesList.map((city) => ({
    city: encodeURIComponent(city.replace(/ /g, "-")),
  }));
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const decodedCity = decodeURIComponent(resolvedParams.city).replace(/-/g, " ");
  const capitalizedCity = decodedCity
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const canonicalUrl = `https://www.riyaescortservices.com/locations/${resolvedParams.city}`;

  return {
    title: `Riya Call Girl in ${capitalizedCity} | Escort Service ${capitalizedCity} Hyderabad`,
    description: `Riya call girl ${capitalizedCity} Hyderabad — Book Riya escort service in ${capitalizedCity}. Call girl Riya available 24/7 for incall & outcall in ${capitalizedCity}. Verified, discreet & premium companionship.`,
    keywords: [
      `Riya call girl ${capitalizedCity}`,
      `call girl Riya ${capitalizedCity}`,
      `Riya escort service ${capitalizedCity}`,
      `escort service ${capitalizedCity} Hyderabad`,
      `call girl ${capitalizedCity} Hyderabad`,
      `${capitalizedCity} escort service`,
      `${capitalizedCity} call girl`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Riya Call Girl in ${capitalizedCity} | Escort Service ${capitalizedCity} Hyderabad`,
      description: `Premium Riya escort service in ${capitalizedCity}, Hyderabad. 100% verified call girls with photo confirmation, 24/7 incall & outcall service in ${capitalizedCity}.`,
      url: canonicalUrl,
      siteName: "Riya Escort Service Hyderabad",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Riya Call Girl in ${capitalizedCity} | Escort Service ${capitalizedCity}`,
      description: `Verified Riya escort service & call girls available in ${capitalizedCity}, Hyderabad. Fast 24/7 booking via WhatsApp & Call.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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

  const pageUrl = `https://www.riyaescortservices.com/locations/${resolvedParams.city}`;

  // Structured Schema for Search Engines (LocalBusiness + BreadcrumbList + FAQPage)
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.riyaescortservices.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.riyaescortservices.com/product"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": capitalizedCity,
            "item": pageUrl
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": `Riya Escort Service ${capitalizedCity}`,
        "description": `Premium Riya escort services and verified companions in ${capitalizedCity}, Hyderabad.`,
        "url": pageUrl,
        "telephone": "+91 9905752614",
        "priceRange": "$$",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${capitalizedCity}, Hyderabad`
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How to book a Riya call girl in ${capitalizedCity}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You can book verified companions in ${capitalizedCity} directly via WhatsApp or phone call at +91 9905752614. Browse profiles, pick your favorite companion, and confirm your incall or outcall booking instantly.`
            }
          },
          {
            "@type": "Question",
            "name": `Are incall and outcall services available in ${capitalizedCity}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we offer both incall (at luxury sanitized apartments) and outcall services (to your hotel room or residence) across ${capitalizedCity} and surrounding Hyderabad areas 24/7.`
            }
          },
          {
            "@type": "Question",
            "name": `Are profiles in ${capitalizedCity} 100% genuine and verified?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, all model profiles on Riya Escort Service in ${capitalizedCity} are 100% authentic with original verified photos, discrete service, and zero advance payment scams.`
            }
          }
        ]
      }
    ]
  };

  // Filter nearby/other locations for internal linking
  const otherLocations = citiesList.filter(
    (c) => c.toLowerCase() !== capitalizedCity.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-zinc-800 overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4">
          <nav className="text-xs text-zinc-500 flex items-center gap-2">
            <Link href="/" className="hover:text-rose-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/product" className="hover:text-rose-500 transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-zinc-800 font-medium">{capitalizedCity}</span>
          </nav>
        </div>

        {/* Location Specific Header Section */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Riya Call Girl in <span className="text-[#ff2d55]">{capitalizedCity}</span>
            </h1>
            <p className="text-base text-zinc-600 max-w-2xl mx-auto">
              Book Riya escort service in {capitalizedCity}, Hyderabad. Riya call girl &amp; verified companions available 24/7 for incall and outcall — discreet, premium, and professional escort service in {capitalizedCity} tailored for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="inline-block bg-rose-50 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
                ⭐ 100% Verified in {capitalizedCity}
              </span>
              <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                ⚡ 24/7 Incall &amp; Outcall
              </span>
              <span className="inline-block bg-zinc-100 text-zinc-700 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-200">
                🔒 100% Privacy Guaranteed
              </span>
            </div>
          </div>
        </section>

        {/* Models Listing Container */}
        <div className="py-4">
          <ProductClient defaultCity={capitalizedCity} />
        </div>

        {/* Location FAQs & Local Guide */}
        <section className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#d62860]">
            Frequently Asked Questions — {capitalizedCity} Escort Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm space-y-2">
              <h3 className="font-semibold text-zinc-900 text-sm sm:text-base">
                How can I book a companion in {capitalizedCity}?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Browse our gallery, select your preferred model, and connect directly with our coordination desk via WhatsApp or Call for instant confirmation.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm space-y-2">
              <h3 className="font-semibold text-zinc-900 text-sm sm:text-base">
                Is privacy guaranteed in {capitalizedCity}?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Absolute confidentiality and discrete arrangements are 100% guaranteed for all bookings in {capitalizedCity} and across Hyderabad.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Link Other Locations for Deep Crawlability */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6 border-t border-zinc-200">
          <h2 className="text-base sm:text-lg font-bold text-zinc-800 mb-3">
            Explore Escort Services in Other Hyderabad Locations:
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherLocations.map((loc) => (
              <Link
                key={loc}
                href={`/locations/${encodeURIComponent(loc.replace(/ /g, "-"))}`}
                className="text-xs bg-white hover:bg-rose-50 hover:text-rose-600 text-zinc-700 font-medium px-3 py-1.5 rounded-lg border border-zinc-200 transition-colors"
              >
                {loc} Escorts
              </Link>
            ))}
          </div>
        </section>

        {/* Detailed Information Section */}
        <div className="bg-white text-zinc-800 border-t border-zinc-200 mt-6">
          <HomeBelow />
          <Inform />
        </div>
      </main>
    </div>
  );
}
