import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xm',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacyPolicy',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacyPolicy',
        permanent: true,
      },
      {
        source: '/help-support',
        destination: '/helpSupport',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/helpSupport',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/models',
        destination: '/product',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
