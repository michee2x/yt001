"use client";

import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo / Brand */}
        <span
          className="font-display font-black text-parchment text-base tracking-tight cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          YouTube <span className="text-gold">101</span>
        </span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "Video", href: "#video" },
            { label: "The Book", href: "#book" },
            { label: "What's Inside", href: "#inside" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="gold-underline text-parchment-dim hover:text-parchment text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://selar.com/8ai877i268"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-gold border border-gold/40 hover:border-gold hover:bg-gold/5 text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 transition-all duration-300"
        >
          Get the Book
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-parchment transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-obsidian/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-6">
          {[
            { label: "Video", href: "#video" },
            { label: "The Book", href: "#book" },
            { label: "What's Inside", href: "#inside" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-parchment-dim hover:text-gold text-sm font-semibold uppercase tracking-widest transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://selar.com/8ai877i268"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold border border-gold/40 text-[11px] font-semibold uppercase tracking-widest px-5 py-2.5 self-start transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Get the Book
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
