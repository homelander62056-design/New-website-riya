import React from "react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { initialProductsData, getProductSlug, findProductBySlugOrId, getProductGeo } from "../productsData";
import ProductDetailClient from "./ProductDetailClient";
import { getModelSpecsAndDetails } from "./data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  // Generate both SEO slugs and legacy IDs for static prerendering
  const slugParams = initialProductsData.map((product) => ({
    id: getProductSlug(product),
  }));
  const idParams = initialProductsData.map((product) => ({
    id: product.id.toString(),
  }));
  return [...slugParams, ...idParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProductBySlugOrId(id);

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
  const slug = getProductSlug(product);
  const canonicalUrl = `${siteUrl}/product/${slug}`;
  const details = getModelSpecsAndDetails(product);
  const geo = getProductGeo(product);

  const title = product.geoTitle || product.metaTitle || `${product.name} - Call Girl in ${geo.locality}, Hyderabad | Escort Service`;
  const description = product.geoDescription || product.metaDescription || `${product.name} (${product.age} yrs), verified independent companion in ${geo.locality}, Hyderabad. Direct contact: ${product.phone}. Available 24/7 for luxury hotel outcalls & dinner dates.`;
  const keywords = product.metaKeywords || [
    `${product.name} escort`,
    `call girl ${geo.locality}`,
    `call girl in ${geo.locality} Hyderabad`,
    `escort service ${geo.locality}`,
    `${geo.locality} call girl`,
    `independent escort ${geo.locality}`,
    `VIP escort ${geo.locality}`,
    `Hyderabad escort ${product.name}`,
    `Riya escort service ${geo.locality}`,
  ];

  return {
    title,
    description,
    keywords,
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
    other: {
      "geo.region": geo.region,
      "geo.placename": geo.placename,
      "geo.position": geo.position,
      "ICBM": `${geo.lat}, ${geo.lng}`,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Riya Escort Services",
      locale: "en_IN",
      type: "profile",
      images: [
        {
          url: details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`,
          alt: `${product.name} - Escort in ${geo.locality}, Hyderabad`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = findProductBySlugOrId(id);

  if (!product) {
    notFound();
  }

  const slug = getProductSlug(product);

  // If user or crawler requested legacy numeric ID (e.g. /product/8), 301 redirect to canonical SEO slug
  if (id === product.id.toString() || id !== slug) {
    redirect(`/product/${slug}`);
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";
  const details = getModelSpecsAndDetails(product);
  const geo = getProductGeo(product);
  const canonicalUrl = `${siteUrl}/product/${slug}`;
  const imageUrl = details.displayImage.startsWith("http") ? details.displayImage : `${siteUrl}${details.displayImage}`;
  const pageDescription = product.geoDescription || product.metaDescription || product.description;

  // JSON-LD Structured Data for Google Rich Snippets & Local Geo Targeting
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": product.geoTitle || product.metaTitle || `${product.name} - ${geo.locality} Profile`,
        "description": pageDescription,
        "mainEntity": {
          "@type": "Person",
          "name": product.name,
          "description": pageDescription,
          "image": imageUrl,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": geo.locality,
            "addressRegion": "Telangana",
            "postalCode": geo.pincode,
            "addressCountry": "IN",
          },
          "telephone": product.phone,
          "gender": "Female",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#localbusiness`,
        "name": `Riya Escort Service - ${product.name} in ${geo.locality}`,
        "description": pageDescription,
        "url": canonicalUrl,
        "telephone": product.phone,
        "priceRange": "$$",
        "image": imageUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": geo.locality,
          "addressLocality": geo.locality,
          "addressRegion": "Telangana",
          "postalCode": geo.pincode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.lat,
          "longitude": geo.lng,
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${geo.locality}, Hyderabad, Telangana, India`,
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