"use client";

import React, { useState } from "react";
import FooterPage from "../footer/page";

export default function BlogPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 w-full flex-1">
        
        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Blog
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Last Updated: 31 July 2026
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed text-zinc-700 dark:text-zinc-300">

          {/* Overview */}
          <section className="space-y-4">
            <p>
              Welcome to our Blog, your trusted source for informative articles, practical guides, industry insights, and the latest updates related to our Website and services. Our mission is to provide valuable content that helps users stay informed, solve common problems, and make better decisions through reliable and easy-to-understand information.
            </p>
            <p>
              Whether you are visiting our Website for the first time or are a regular user, our Blog is designed to offer useful resources that improve your overall experience. We regularly publish fresh content covering a wide range of topics, including helpful tips, technology updates, best practices, product news, safety recommendations, and answers to frequently asked questions.
            </p>
            <p>
              Our articles are written with the goal of making complex topics simple and accessible. We believe that accurate information and clear guidance help users gain confidence while using online services. Every article is carefully prepared to provide practical knowledge that readers can easily apply in real-life situations.
            </p>
          </section>

          {/* What You Can Expect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              What You Can Expect From Our Blog
            </h2>
            <p>Our Blog features content across various categories, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website news and feature announcements</li>
              <li>Step-by-step tutorials and how-to guides</li>
              <li>Helpful tips for using our services effectively</li>
              <li>Frequently asked questions and detailed answers</li>
              <li>Product and service updates</li>
              <li>Online safety, privacy, and security best practices</li>
              <li>Technology trends and digital innovations</li>
              <li>User experience improvements</li>
              <li>Troubleshooting guides for common issues</li>
              <li>Educational content and expert recommendations</li>
            </ul>
            <p className="pt-2">
              We continuously update our Blog with new articles to ensure that the information remains relevant, accurate, and useful. As our services evolve, we will publish announcements and educational resources to help users understand new features and improvements.
            </p>
          </section>

          {/* Our Commitment to Quality */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Our Commitment to Quality
            </h2>
            <p>
              We strive to publish content that is informative, accurate, and easy to understand. Before publishing, our articles are reviewed to ensure they provide genuine value to our readers. However, technology and regulations may change over time, so some information may be updated periodically to reflect the latest developments.
            </p>
            <p>
              Our goal is to create a knowledge hub where users can quickly find reliable information without unnecessary complexity.
            </p>
          </section>

          {/* Why Read Our Blog? */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Why Read Our Blog?
            </h2>
            <p>Reading our Blog helps you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Stay informed about the latest Website updates.</li>
              <li>Learn useful tips and best practices.</li>
              <li>Discover new features and services.</li>
              <li>Improve your understanding of online tools and technologies.</li>
              <li>Find solutions to common questions and technical issues.</li>
              <li>Stay aware of online privacy and security recommendations.</li>
              <li>Make better and more informed decisions while using our services.</li>
            </ul>
            <p className="pt-2">
              We encourage our visitors to check back regularly, as new articles and guides are published on a frequent basis.
            </p>
          </section>

          {/* Community & Feedback */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Community and Feedback
            </h2>
            <p>
              We value the opinions of our readers. Your suggestions help us improve our content and create articles that answer real questions from our users. If there is a topic you would like us to cover, we would be happy to hear from you.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-3 border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Contact Us
            </h2>
            <p>
              If you have any questions, suggestions, or feedback regarding our Blog or any article published on our Website, please contact us:
            </p>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/60 text-sm flex items-center justify-between">
              <div>
                <p><strong>Email:</strong> <a href="mailto:hyderabad1234@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">hyderabad1234@gmail.com</a></p>
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">Last Updated: 31 July 2026</p>
              </div>
              <button
                onClick={() => handleCopy("hyderabad1234@gmail.com")}
                className="text-xs px-3 py-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
              >
                {copied === "hyderabad1234@gmail.com" ? "Copied!" : "Copy Email"}
              </button>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-2">
              We appreciate your continued support and thank you for being a part of our community.
            </p>
          </section>

        </div>
      </div>

    </div>
  );
}