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
      {
        source: '/about.html',
        destination: '/about',
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
        source: '/services.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/DLF-cyber-city-escorts.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/bestech-city-call-girls-mobile-number.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/call-girls-in-golf-course-road.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/vipul-gardens-dharuhera-escorts.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/sector-56-call-girls-riya.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/red-head-escorts-in-sector-52.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/dharuhera-sector-6-call-girls.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/escorts-in-surajkund-call-girls.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/call-girls-in-phase-1-escorts.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/delhi-call-girls.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/blonde-call-girls-in-sector-60.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/call-girls-in-ballia-with-photo-and-mobile-numbers.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/Lucknow/Lucknow-hi-guys-my-self-nisha-sen-all-area-service-provide-sef-secure-college-girls-provider-out-in-jghj-1767857389.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/begusarai-call-girls-mobile-number-with-photos.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/u-block-DLF-phase-3-call-girls-susmita.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/kumari-goa-escorts.html',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/:path*.html',
        destination: '/product',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
