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
      // Sitemap aliases
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
      // Core page legacy aliases
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
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/models',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/product',
        permanent: true,
      },
      // Legacy .html catch-all redirect (1 hop direct to /product)
      {
        source: '/:path*.html',
        destination: '/product',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
