"use client";
import { ShieldCheck, Stethoscope, ActivitySquare,  } from "lucide-react";
import React, {useState, useEffect} from 'react';

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);


  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
       {/* Navbar */}
      <header className="flex flex-col md:flex-row justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold mb-2 md:mb-0 text-blue-600">MediConnect</a>
        <nav className="flex gap-6 justify-center">
          <a href="/about" className="text-blue-600 hover:underline">About</a>
          <a href="/features" className="text-blue-600 hover:underline">Features</a>
          <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-2 md:mt-0 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      

      {/* About Section */}
      <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-950">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About MediConnect</h1>
        <p className="text-lg md:text-xl mb-8">Leading the future of healthcare management</p>
      </section>
  

      {/* Our Mission */}
      <section  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To revolutionize healthcare management by providing cutting-edge
            technology solutions that empower healthcare providers and enhance
            patient care.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be the global leader in healthcare management solutions, setting
            the standard for efficiency, security, and patient care excellence.
          </p>
        </div>
      </section>

      {/* Enterprise-Grade Features */}
      <section className="bg-white dark:bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Enterprise-Grade Features</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <Stethoscope className="mx-auto h-10 w-10 text-blue-600" />
              <h3 className="font-semibold text-lg">Hospital Operations</h3>
              <p className="text-sm text-muted-foreground">
                Streamline daily operations, resource allocation, and staff management.
              </p>
            </div>
            <div className="space-y-3">
              <ShieldCheck className="mx-auto h-10 w-10 text-blue-600" />
              <h3 className="font-semibold text-lg">Data Security</h3>
              <p className="text-sm text-muted-foreground">
                HIPAA-compliant security measures to protect sensitive patient data.
              </p>
            </div>
            <div className="space-y-3">
              <ActivitySquare className="mx-auto h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-lg">Clinical Management</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive tools for patient care and clinical workflow optimization.
              </p>
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
              Enterprise hospital management solution trusted by leading healthcare providers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/features" className="hover:underline">Features</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Support</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/help" className="hover:underline">Help Center</a></li>
              <li><a href="/security" className="hover:underline">Security</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
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
