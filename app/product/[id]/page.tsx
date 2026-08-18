import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { initialProductsData } from "../productsData";
import ProductDetailClient from "./ProductDetailClient";

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
      title: "Model Profile Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://riyaescortservices.com";

  return {
    title: `${product.name} | ${product.city}`,
    description: product.description,
    alternates: {
      canonical: `${siteUrl}/product/${product.id}`,
    },
    openGraph: {
      title: `${product.name} - ${product.title}`,
      description: product.description,
      url: `${siteUrl}/product/${product.id}`,
      siteName: "cal girl hyderabad",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${product.city}`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);
  const product = initialProductsData.find((item) => item.id === productId) || initialProductsData[0];

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}