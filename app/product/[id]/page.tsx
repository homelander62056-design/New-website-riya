import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { initialProductsData } from "../productsData";
import ProductDetailClient from "./ProductDetailClient";
import { getModelSpecsAndDetails } from "./data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialProductsData.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const productId = Number(id);
  const product = initialProductsData.find((item) => item.id === productId);

  if (!product) {
    return {
      title: "Profile Not Found | Riya Escort Services",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const details = getModelSpecsAndDetails(product);

  return {
    title: `${product.name} - Escort & Companion in ${product.city} | Riya Escort Services`,
    description: `${product.name} (${product.age} yrs), verified independent companion in ${details.locationDetail}. Direct contact: ${product.phone}. Available 24/7 for luxury hotel outcalls & dinner dates.`,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${product.name} - ${product.title}`,
      description: `${product.name} (${product.age} yrs), verified companion in ${product.city}. Direct booking via WhatsApp or phone.`,
      url: canonicalUrl,
      siteName: "Riya Escort Services",
      locale: "en_IN",
      type: "profile",
      images: [
        {
          url: details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`,
          alt: `${product.name} in ${product.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${product.city} Escort Companion`,
      description: `${product.name} (${product.age} yrs) in ${product.city}. 100% verified profile.`,
      images: [details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);
  const product = initialProductsData.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";
  const details = getModelSpecsAndDetails(product);
  const canonicalUrl = `${siteUrl}/product/${product.id}`;
  const imageUrl = details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": `${product.name} - ${product.city} Profile`,
        "description": product.description,
        "mainEntity": {
          "@type": "Person",
          "name": product.name,
          "description": product.description,
          "image": imageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": details.locationDetail,
            "addressRegion": "Telangana",
            "addressCountry": "IN",
          },
          "telephone": product.phone,
          "gender": "Female",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Models",
            "item": `${siteUrl}/product`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}