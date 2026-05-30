"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-4" : "bg-white/95 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <div className="relative h-12 w-48 lg:h-14 lg:w-56">
            <Image
              src="/logo.svg"
              alt="RG Constructions Logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/about"
            className="text-sm font-semibold text-rg-slate uppercase tracking-widest hover:text-rg-gold transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="text-sm font-semibold text-rg-slate uppercase tracking-widest hover:text-rg-gold transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/corporate"
            className="text-sm font-semibold text-rg-slate uppercase tracking-widest hover:text-rg-gold transition-colors"
          >
            Corporate
          </Link>
          <a
            href="#contact"
            className="text-sm font-bold bg-rg-slate text-white px-6 py-3 uppercase tracking-widest hover:bg-rg-gold transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 text-rg-slate"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link
          href="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="text-2xl font-display text-rg-slate hover:text-rg-gold transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/projects"
          onClick={() => setMobileMenuOpen(false)}
          className="text-2xl font-display text-rg-slate hover:text-rg-gold transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/corporate"
          onClick={() => setMobileMenuOpen(false)}
          className="text-2xl font-display text-rg-slate hover:text-rg-gold transition-colors"
        >
          Corporate
        </Link>
      </div>
    </header>
  );
}
