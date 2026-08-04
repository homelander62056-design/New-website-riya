"use client";

import React, { useState } from "react";

export default function HelpAndSupportPage() {
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
              HELP &amp; SUPPORT
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Last Updated: 31 July 2026
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed text-zinc-700 dark:text-zinc-300">

          {/* Section: We're Here to Help */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              We&apos;re Here to Help
            </h2>
            <p>
              Our goal is to provide you with a smooth and reliable experience while using our Website. If you need assistance, have questions, or encounter any issues, our support team is ready to help.
            </p>
          </section>

          {/* Section: How Can We Help? */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              How Can We Help?
            </h2>
            <p>You can contact us for assistance with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account registration and login issues</li>
              <li>Password reset requests</li>
              <li>Website navigation and technical problems</li>
              <li>Booking or order-related questions</li>
              <li>Payment and transaction support</li>
              <li>Updating your account information</li>
              <li>Reporting bugs or technical errors</li>
              <li>Feedback and suggestions for improving our services</li>
            </ul>
          </section>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Contact Support Card */}
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">General Support</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  We aim to respond to all support requests as quickly as possible during business hours.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg flex items-center justify-between">
                <a 
                  href="mailto:hyderabad1234@gmail.com" 
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline truncate"
                >
                  hyderabad1234@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("hyderabad1234@gmail.com")}
                  className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                >
                  {copied === "hyderabad1234@gmail.com" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Account & Privacy Assistance Card */}
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Account &amp; Privacy</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Questions about your account, personal data, or privacy requests.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg flex items-center justify-between">
                <a 
                  href="mailto:hyderabad1234@gmail.com" 
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline truncate"
                >
                  hyderabad1234@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("hyderabad1234@gmail.com")}
                  className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                >
                  {copied === "hyderabad1234@gmail.com" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 rounded-xl p-5 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Feedback &amp; Ideas</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  We welcome your suggestions and comments to help us improve.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-zinc-900 rounded-lg flex items-center justify-between">
                <a 
                  href="mailto:hyderabad1234@gmail.com" 
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline truncate"
                >
                  hyderabad1234@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("hyderabad1234@gmail.com")}
                  className="text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                >
                  {copied === "hyderabad1234@gmail.com" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

          </div>

          {/* Reporting Technical Issues */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Reporting Technical Issues
            </h2>
            <p>If you experience a technical problem, please include the following details in your email:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A brief description of the issue</li>
              <li>The device and browser you are using</li>
              <li>Screenshots (if available)</li>
              <li>Steps that led to the issue</li>
            </ul>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Providing these details helps us resolve your problem more efficiently.
            </p>
          </section>

          {/* Response Time Notice */}
          <section className="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl space-y-1">
            <h3 className="font-bold text-blue-900 dark:text-blue-300 text-base">Response Time</h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Our support team strives to respond to all inquiries within <strong>24–48 business hours</strong>. Response times may vary during weekends, public holidays, or periods of high support volume.
            </p>
          </section>

        </div>
      </div>


    </div>
  );
}