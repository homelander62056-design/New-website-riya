"use client";

import React, { useState } from "react";

export default function SecurityPage() {
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
              Security – How to Report a Scam
            </h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Last Updated: 31 July 2026
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 leading-relaxed text-zinc-700 dark:text-zinc-300">

          {/* Safety Priority */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Your Safety Is Our Priority
            </h2>
            <p>
              We are committed to providing a safe and trustworthy experience for all users. While we work continuously to maintain a secure platform, scams and fraudulent activities can occur on the internet. We encourage all users to stay alert and report any suspicious behavior immediately.
            </p>
            <p>
              If you believe you have encountered fraudulent activity, fake profiles, phishing attempts, payment scams, or any other suspicious conduct related to our Website, please let us know as soon as possible.
            </p>
          </section>

          {/* Common Signs of a Scam */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Common Signs of a Scam
            </h2>
            <p>Be cautious if someone:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Requests payment outside our official platform.</li>
              <li>Asks for your passwords, OTPs, or banking information.</li>
              <li>Uses fake identities or impersonates another person or business.</li>
              <li>Promises unrealistic offers or guaranteed rewards.</li>
              <li>Pressures you to make immediate payments or decisions.</li>
              <li>Sends suspicious links or files.</li>
              <li>Requests confidential personal information without a valid reason.</li>
              <li>Attempts to communicate through unofficial channels while pretending to represent our Website.</li>
            </ul>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1">
              If something feels unusual or too good to be true, take extra precautions before responding.
            </p>
          </section>

          {/* How to Report a Scam */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              How to Report a Scam
            </h2>
            <p>
              If you suspect fraudulent activity, please send us an email with as much information as possible, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A description of the incident.</li>
              <li>The name or profile involved (if available).</li>
              <li>Screenshots or supporting evidence.</li>
              <li>Date and time of the incident.</li>
              <li>Any email addresses, phone numbers, or messages related to the activity.</li>
            </ul>

            {/* Email Box */}
            <div className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 rounded-xl space-y-2">
              <h3 className="font-bold text-red-900 dark:text-red-300 text-sm">Send your report to:</h3>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <a href="mailto:hyderabad1234@gmail.com" className="font-mono text-base text-red-700 dark:text-red-400 hover:underline">
                  hyderabad1234@gmail.com
                </a>
                <button
                  onClick={() => handleCopy("hyderabad1234@gmail.com")}
                  className="text-xs px-3 py-1.5 bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                >
                  {copied === "hyderabad1234@gmail.com" ? "Copied!" : "Copy Email"}
                </button>
              </div>
              <p className="text-xs text-red-800 dark:text-red-300 pt-1">
                Our team will review every report carefully and take appropriate action where necessary.
              </p>
            </div>
          </section>

          {/* What Happens After You Report */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              What Happens After You Report
            </h2>
            <p>Once your report is received, our team may:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Review the reported account or activity.</li>
              <li>Investigate the information provided.</li>
              <li>Remove fraudulent or misleading content when appropriate.</li>
              <li>Restrict or suspend accounts that violate our policies.</li>
              <li>Contact you if additional information is required.</li>
            </ul>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-1">
              Please note that investigations may take some time depending on the complexity of the report.
            </p>
          </section>

          {/* Safety Tips */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Safety Tips
            </h2>
            <p>To protect yourself while using our Website:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Never share your passwords or verification codes.</li>
              <li>Avoid sending money without verifying the recipient.</li>
              <li>Keep your account credentials secure.</li>
              <li>Use strong and unique passwords.</li>
              <li>Ignore suspicious emails or unexpected messages requesting personal information.</li>
              <li>Verify website URLs before entering sensitive information.</li>
              <li>Report any suspicious activity immediately.</li>
            </ul>
          </section>

          {/* Our Commitment */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
              Our Commitment
            </h2>
            <p>
              We take reports of fraud and misuse seriously. Every report helps us improve the safety of our Website and protect our users from fraudulent activity. While we cannot prevent every scam attempt, we are committed to responding promptly and taking reasonable action whenever violations are identified.
            </p>
          </section>

          {/* Contact Us */}
          <section className="space-y-3 border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Contact Us
            </h2>
            <p>
              For scam reports, security concerns, or questions regarding account safety, please contact:
            </p>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-700/60 text-sm flex items-center justify-between">
              <div>
                <p><strong>Email:</strong> <a href="mailto:hyderabad1234@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline font-mono">hyderabad1234@gmail.com</a></p>
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
              Thank you for helping us maintain a safer and more secure community.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}