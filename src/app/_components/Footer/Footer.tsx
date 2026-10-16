import React from "react";
import { Handbag, ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 dark:border-gray-800
                 mt-1 py-4 md:py-2 bg-white dark:bg-[#0b1120]
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start gap-3">
          <div className="flex items-center gap-5">
            <div className="bg-teal-500 p-1.5 rounded-full">
              <Handbag className="text-white w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400">
                Kaza Souq
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Better Prices. Smarter Shopping.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-gray-900 dark:text-white font-semibold mb-2">
            Quick Links
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            {["Home", "How it works", "Features", "About", "Contact"].map(
              (item) => (
                <Link
                key={item}
                  href="#"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Follow Us & Copyright */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-3">
              Follow Us
            </h3>
            <div className="flex gap-3 text-gray-600 dark:text-gray-400">
              {[1, 2, 3, 4].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-muted"
                >
                  <ShoppingBag className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          <p className="text-gray-400 dark:text-gray-600 text-xs md:m-auto text-center md:text-left">
            © 2026 Kaza Souq. All rights reserved. v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
