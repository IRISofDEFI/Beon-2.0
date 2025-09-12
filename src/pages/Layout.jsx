

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, ShoppingCart, Facebook, Instagram, Youtube, X as TwitterX } from "lucide-react";

const navLinks = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Shop", url: createPageUrl("Shop") },
  { title: "About", url: createPageUrl("About") },
  { title: "Contact", url: createPageUrl("Contact") }, // Changed URL for Contact
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, url: "#" },
  { icon: <Instagram className="w-5 h-5" />, url: "#" },
  { icon: <Youtube className="w-5 h-5" />, url: "#" },
  { icon: <TwitterX className="w-5 h-5" />, url: "#" },
];

const Logo = () => (
  <Link to={createPageUrl("Home")} className="flex items-center gap-3 text-white">
    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/590902d87_beon1-removebg-preview.png" alt="Urban Jungle Co. Logo" className="h-10 w-auto" />
    <span className="text-lg font-semibold tracking-wider">URBAN JUNGLE CO.</span>
  </Link>
);

function Header() {
  // The original code had useState and useEffect for scroll-based transparency.
  // The new requirement is to make the header *always* transparent,
  // so these dynamic elements are removed, and 'bg-transparent' is applied directly.
  const brandBlue = 'rgb(73, 115, 162)';
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Far Left */}
          <Logo />

          {/* Navigation + Icons - Right Side */}
          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.title} to={link.url} className="text-white transition-colors duration-300 text-sm font-medium"
                      style={{'--hover-text-color': brandBlue}}
                      onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
                      onMouseOut={e => e.currentTarget.style.color = ''}>
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="transition-colors duration-300"
                   style={{'--hover-text-color': brandBlue}}
                   onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
                   onMouseOut={e => e.currentTarget.style.color = ''}>
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Shopping Cart */}
            <button className="relative text-white transition-colors duration-300"
                    style={{'--hover-text-color': brandBlue}}
                    onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
                    onMouseOut={e => e.currentTarget.style.color = ''}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
    return (
        <footer style={{ backgroundColor: 'rgb(73, 115, 162)' }} className="py-8">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Top Row - Logo, Navigation, Social Icons */}
                <div className="flex items-center justify-between mb-6">
                    {/* Logo - Left */}
                    <div className="flex items-center gap-3 text-white">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/590902d87_beon1-removebg-preview.png" alt="Urban Jungle Co. Logo" className="h-8 w-auto" />
                        <span className="text-lg font-semibold">URBAN JUNGLE CO.</span>
                    </div>

                    {/* Navigation Links - Center */}
                    <nav className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.title} to={link.url} className="text-white hover:text-gray-200 transition-colors">
                                {link.title}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Icons - Right */}
                    <div className="flex items-center gap-4 text-white">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} className="hover:text-gray-200 transition-colors">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright - Centered */}
                <div className="text-center">
                    <p className="text-white text-sm">Copyright © {new Date().getFullYear()} Generic eCommerce</p>
                </div>
            </div>
        </footer>
    );
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

