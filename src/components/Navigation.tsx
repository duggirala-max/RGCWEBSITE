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

  const handleHomeClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleHomeClick} className="relative z-50 flex items-center">
          <div className="relative h-16 w-24 lg:h-20 lg:w-32 transition-all duration-500">
            <Image
              src="/Logo-Transparent.png"
              alt="RG Constructions Logo"
              fill
              className="object-contain object-left transition-opacity duration-500"
              sizes="(max-width: 768px) 96px, 128px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            onClick={handleHomeClick}
            className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
              isScrolled
                ? "text-rg-slate hover:text-rg-gold"
                : "text-white/90 hover:text-rg-gold"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
              isScrolled
                ? "text-rg-slate hover:text-rg-gold"
                : "text-white/90 hover:text-rg-gold"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/corporate"
            className={`text-sm font-semibold uppercase tracking-widest transition-colors ${
              isScrolled
                ? "text-rg-slate hover:text-rg-gold"
                : "text-white/90 hover:text-rg-gold"
            }`}
          >
            Corporate
          </Link>
          <a
            href="https://wa.me/919488149966"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-bold px-6 py-3 uppercase tracking-widest transition-all duration-500 ${
              isScrolled
                ? "bg-rg-slate text-white hover:bg-rg-gold"
                : "border border-white/40 text-white hover:bg-rg-gold hover:border-rg-gold"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden relative z-50 transition-colors ${
            isScrolled ? "text-rg-slate" : "text-white"
          }`}
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
          href="/"
          onClick={handleHomeClick}
          className="text-2xl font-display text-rg-slate hover:text-rg-gold transition-colors"
        >
          Home
        </Link>
        <Link
          href="/#projects"
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
        <a
          href="https://wa.me/919488149966"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-4 text-lg font-bold bg-rg-gold text-white px-8 py-4 uppercase tracking-widest transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
