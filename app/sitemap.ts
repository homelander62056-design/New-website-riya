import { MetadataRoute } from 'next';
import { initialProductsData } from './product/productsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://riyaescortservices.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacyPolicy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/security`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/helpSupport`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // Generate dynamic product detail page URLs
  const productPages: MetadataRoute.Sitemap = initialProductsData.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const citiesList = [
    "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli",
    "Kondapur", "Kukatpally", "Miyapur", "Ameerpet", "Begumpet", "Secunderabad",
    "Somajiguda", "Punjagutta", "Tolichowki", "Mehdipatnam", "Attapur",
    "Manikonda", "Nallagandla", "Chandanagar", "LB Nagar", "Dilsukhnagar",
    "Uppal", "Nagole", "Kompally", "Suchitra", "Shamshabad", "Nizampet",
    "Alwal", "Hafeezpet", "Kothapet"
  ];

  const locationPages: MetadataRoute.Sitemap = citiesList.map((city) => ({
    url: `${baseUrl}/locations/${encodeURIComponent(city.replace(/ /g, '-'))}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...locationPages];
}
