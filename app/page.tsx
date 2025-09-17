
'use client';
import Link from 'next/link';
import { ShieldCheck, Stethoscope, UserCircle2, User, FlaskConical, Pill } from "lucide-react";
import React, {useState, useEffect} from 'react';

export default function HomePage() {
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
      

      {/* Hero Section */}
      <section className="w-full py-20 px-6 text-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MediConnect</h1>
        <p className="text-lg md:text-xl mb-8">Manage your hospital operations, patient records, and more.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/sign-up" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">New Patient</a>
          <a href="/sign-in" className="px-6 py-3 border border-blue-600 hover:bg-blue-100 dark:hover:bg-gray-800 text-blue-600 dark:text-white rounded-lg">Login to Account</a>
        </div>
      </section>

   
      {/* Dedicated Portal Section */}
{/* Dedicated Portal Section */}
<section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-10">Dedicated Portals for Everyone</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { role: "Admin", path: "/admin", icon: ShieldCheck },
      { role: "Doctor", path: "/doctor", icon: Stethoscope },
      { role: "Nurse", path: "/nurse", icon: User },
      { role: "Patient", path: "/patient", icon: UserCircle2 },
      { role: "Lab", path: "/lab", icon: FlaskConical },
      { role: "Pharmacy", path: "/pharmacy", icon: Pill },
    ].map(({ role, path }) => (
      <Link
        key={role}
        href={path}
        className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-xl text-center hover:scale-105 transition-transform block"
      >
        <h3 className="text-xl font-semibold mb-2">{role}</h3>
        <p className="text-sm">
          {["Nurse", "Lab", "Pharmacy"].includes(role)
            ? "Coming Soon"
            : "Secure and role-based access to the system."}
        </p>
      </Link>
    ))}
  </div>
</section>

      {/* Feature Highlights Section */}
      <section id="features" className="py-16 px-6 bg-white dark:bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Enterprise-Grade Features</h2>
        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Hospital Operations</h3>
            <p className="text-sm">Streamline daily operations, resource allocation, and staff management.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p className="text-sm">HIPAA-compliant security measures to protect sensitive patient data.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Clinical Management</h3>
            <p className="text-sm">Comprehensive tools for patient care and clinical workflow optimization.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hospital Experience?</h2>
          <p className="mb-6">Take advantage of our awesome services and enjoy rich healthcare experience at the comfort of your home.</p>
          <a href='\' className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Get Started</a>
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
