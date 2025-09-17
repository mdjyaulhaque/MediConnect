"use client";
import {
  ShieldCheck,
  Stethoscope,
  ActivitySquare,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Navbar */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
        <a
          href="/"
          className="text-2xl font-bold mb-2 md:mb-0 text-blue-600"
        >
          MediConnect
        </a>
        <nav className="flex gap-6 justify-center">
          <a href="/about" className="text-blue-600 hover:underline">
            About
          </a>
          <a href="/features" className="text-blue-600 hover:underline">
            Features
          </a>
          <a href="/contact" className="text-blue-600 hover:underline">
            Contact
          </a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-2 md:mt-0 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-50 dark:bg-gray-900 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                Send us a message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    mdjyaulhaque9934@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 7479980276
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bhopal, Madhya Pradesh <br />
                    Jahangirabad 462008
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6 mt-16 rounded-t-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2"><a href="/">MediConnect</a></h2>
            <p className="text-sm">
              Enterprise hospital management solution trusted by leading
              healthcare providers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/features" className="hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/help" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/security" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
           © 2025 MediConnect. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
