"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  CreditCard,
  Info,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">ShopVerse Stories</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Corporate Info</a></li>
          </ul>
        </div>

        {/* Group Companies */}
        <div>
          <h4 className="text-white font-semibold mb-3">GROUP COMPANIES</h4>
          <ul className="space-y-2">
            <li><a href="#">Myntra</a></li>
            <li><a href="#">Cleartrip</a></li>
            <li><a href="#">Shopsy</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white font-semibold mb-3">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Consumer Policy */}
        <div>
          <h4 className="text-white font-semibold mb-3">CONSUMER POLICY</h4>
          <ul className="space-y-2">
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">EPR Compliance</a></li>
          </ul>
        </div>

        {/* Mail Us */}
        <div>
          <h4 className="text-white font-semibold mb-3">MAIL US:</h4>
          <address className="not-italic text-sm space-y-1">
            <p>ShopVerse Pvt. Ltd.</p>
            <p>Embassy Tech Village, Outer Ring Road, Bengaluru - 560103</p>
            <p>Karnataka, India</p>
          </address>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">CONTACT</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4" /> <span>+91-9876543210</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4" /> <span>support@shopverse.in</span>
            </li>
            <li className="flex space-x-3 mt-3">
              <a href="#"><Facebook className="w-4 h-4" /></a>
              <a href="#"><Twitter className="w-4 h-4" /></a>
              <a href="#"><Youtube className="w-4 h-4" /></a>
              <a href="#"><Instagram className="w-4 h-4" /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-neutral-700 mt-10 pt-5 px-4 text-center md:flex md:justify-between md:items-center max-w-7xl mx-auto">
        <div className="text-sm mb-4 md:mb-0 text-gray-400">
          © 2025 ShopVerse.com. All Rights Reserved.
        </div>
        <div className="flex flex-wrap gap-4 justify-center text-gray-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4" />
            <span>Multiple Payment Options</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
