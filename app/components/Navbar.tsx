"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/why-us", label: "Why Waya" },
    { href: "/testimonials", label: "Our Promise" },
    { href: "/faq", label: "FAQ" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const menuGroups = [
    {
      heading: "Company",
      items: [
        { href: "/about", label: "About Us" },
        { href: "/why-us", label: "Why Waya" },
        { href: "/testimonials", label: "Our Promise" },
      ],
    },
    {
      heading: "Get Started",
      items: [
        { href: "/services", label: "Services" },
        { href: "/faq", label: "FAQ" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg py-3" : "shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Waya Care" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium transition-colors text-navy hover:text-teal"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-block hover:scale-105 transition-transform"
          >
            Free Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-navy"
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu — full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-[72px] bg-white overflow-y-auto z-40"
          >
            <div className="px-6 py-6">
              <p className="text-xs font-semibold text-teal uppercase tracking-widest mb-4">Menu</p>

              {menuGroups.map((group, gi) => (
                <div key={group.heading} className="mb-6">
                  <p className="text-xs font-semibold text-slate uppercase tracking-widest mb-2">{group.heading}</p>
                  {group.items.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (gi * group.items.length + i) * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3 text-navy font-medium text-lg border-b border-gray-50 hover:text-teal transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary block text-center text-white font-semibold px-5 py-4 rounded-full mt-4"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
