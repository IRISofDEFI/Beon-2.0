

<<<<<<< HEAD
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
=======
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, ShoppingCart, Facebook, Instagram, Youtube, X as TwitterX, Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "MarketPlace", url: createPageUrl("MarketPlace") },
  { title: "About", url: createPageUrl("About") },
  { title: "Contact", url: createPageUrl("Contact") },
];

const socialLinks = [
  { icon: <Facebook className="w-4 h-4 md:w-5 md:h-5" />, url: "#" },
  { icon: <Instagram className="w-4 h-4 md:w-5 md:h-5" />, url: "#" },
  { icon: <Youtube className="w-4 h-4 md:w-5 md:h-5" />, url: "#" },
  { icon: <TwitterX className="w-4 h-4 md:w-5 md:h-5" />, url: "#" },
];

const Logo = React.memo(() => (
  <Link to={createPageUrl("Home")} className="flex items-center gap-2 md:gap-3 text-white">
    <img 
      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/590902d87_beon1-removebg-preview.png" 
      alt="Urban Jungle Co. Logo" 
      className="h-12 w-auto"
      loading="eager"
    />
    <span className="text-sm md:text-lg font-semibold tracking-wider">URBAN JUNGLE CO.</span>
  </Link>
));

Logo.displayName = 'Logo';

function Header({ isMarketPlacePage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isMarketPlacePage ? 'bg-[#222831]' : 'bg-transparent'}`;

  return (
    <header className={headerClasses}>
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.url} 
                  className="text-white transition-colors duration-300 text-sm font-medium hover:text-purple-400"
                >
>>>>>>> ai-temp/main
                  {link.title}
                </Link>
              ))}
            </nav>

<<<<<<< HEAD
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="transition-colors duration-300"
                   style={{'--hover-text-color': brandBlue}}
                   onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
                   onMouseOut={e => e.currentTarget.style.color = ''}>
=======
            <div className="hidden lg:flex items-center gap-4 text-white">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="transition-colors duration-300 hover:text-purple-400"
                >
>>>>>>> ai-temp/main
                  {social.icon}
                </a>
              ))}
            </div>

<<<<<<< HEAD
            {/* Shopping Cart */}
            <button className="relative text-white transition-colors duration-300"
                    style={{'--hover-text-color': brandBlue}}
                    onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
                    onMouseOut={e => e.currentTarget.style.color = ''}>
=======
            <button className="relative text-white transition-colors duration-300 hover:text-purple-400">
>>>>>>> ai-temp/main
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">0</span>
            </button>
          </div>
<<<<<<< HEAD
=======

          <div className="md:hidden mobile-menu-container">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:opacity-80 transition-opacity touch-manipulation"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
                <nav className="flex flex-col p-4 space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.title} 
                      to={link.url} 
                      onClick={closeMobileMenu}
                      className="text-white text-lg font-medium py-3 px-2 hover:text-purple-400 transition-colors touch-manipulation"
                      style={{ minHeight: '44px' }}
                    >
                      {link.title}
                    </Link>
                  ))}
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index} 
                        href={social.url} 
                        className="text-white hover:text-purple-400 transition-colors p-2 touch-manipulation"
                        style={{ minHeight: '44px', minWidth: '44px' }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-3 text-white text-lg font-medium py-3 px-2 hover:text-purple-400 transition-colors touch-manipulation">
                    <ShoppingCart className="w-5 h-5" />
                    Cart (0)
                  </button>
                </nav>
              </div>
            )}
          </div>
>>>>>>> ai-temp/main
        </div>
      </div>
    </header>
  );
}

<<<<<<< HEAD
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
=======
const Footer = React.memo(() => {
  return (
    <footer style={{ backgroundColor: 'rgb(73, 115, 162)' }} className="py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 mb-6">
          <div className="flex items-center gap-2 md:gap-3 text-white justify-center md:justify-start">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/590902d87_beon1-removebg-preview.png" 
              alt="Urban Jungle Co. Logo" 
              className="h-10 w-auto"
              loading="lazy"
            />
            <span className="text-base md:text-lg font-semibold">URBAN JUNGLE CO.</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <Link key={link.title} to={link.url} className="text-white hover:text-gray-200 transition-colors text-sm md:text-base">
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 text-white">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="hover:text-gray-200 transition-colors p-2 touch-manipulation">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-4">
          <p className="text-white text-xs md:text-sm">
            Copyright © {new Date().getFullYear()} Urban Jungle Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default function Layout({ children, currentPageName }) {
  const isMarketPlacePage = currentPageName === 'MarketPlace';
  
  return (
    <div className={`flex flex-col min-h-screen font-sans ${isMarketPlacePage ? 'bg-[#1e232b]' : ''}`}>
      <Header isMarketPlacePage={isMarketPlacePage} />
>>>>>>> ai-temp/main
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

