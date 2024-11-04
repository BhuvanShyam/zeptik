// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul className="mt-2">
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul className="mt-2">
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mt-1">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="flex space-x-4 mt-2">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
