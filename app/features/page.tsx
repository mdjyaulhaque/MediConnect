"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Stethoscope, ActivitySquare,  } from "lucide-react";
export default function FeaturesPage() {
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
      {/* features section */}
      <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-950">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">MediConnect Features</h1>
        <p className="text-lg md:text-xl mb-8">Discover the powerful features that make Kinda HMS the leading choice for healthcare providers</p>
      </section>

      <section  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Hospital Management</h2>
          <p className="text-gray-600">
            Comprehensive tools for managing hospital operations, resources, and staff.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Patient Management</h2>
          <p className="text-gray-600">
           Complete patient records, history, and care management system.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Appointment Scheduling</h2>
          <p className="text-gray-600">
            Efficient scheduling system for patients and healthcare providers.
          </p>
        </div>
                <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Electronic Health Records</h2>
          <p className="text-gray-600">
           Secure and accessible electronic health records management.
          </p>
        </div>
       
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Clinical Management</h2>
          <p className="text-gray-600">
            Advanced tools for clinical workflow and patient care.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Inventory Management</h2>
          <p className="text-gray-600">
            Track and manage medical supplies and equipment.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Security Features</h2>
          <p className="text-gray-600">
           HIPAA-compliant security measures to protect sensitive data.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Communication Tools</h2>
          <p className="text-gray-600">
            Integrated messaging system for staff and patients.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Analytics & Reporting</h2>
          <p className="text-gray-600">
           Comprehensive reporting and analytics dashboard.
          </p>
        </div>
         <div className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-2">Real-time Updates</h2>
          <p className="text-gray-600">
           Instant updates and notifications for critical information.
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
              <ActivitySquare className="mx-auto h-10 w-10 text-blue-600" />
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
