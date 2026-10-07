import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gold/10 pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          {/* Left: Brand + Tagline */}
          <div>
            <p className="font-display font-black text-parchment text-xl mb-3">
              YouTube 101
            </p>
            <p className="text-parchment-muted text-sm leading-relaxed max-w-xs font-light">
              From your first upload to reading your channel like a pro.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 md:justify-end items-start">
            {[
              { label: "Video", href: "#video" },
              { label: "The Book", href: "#book" },
              { label: "What's Inside", href: "#inside" },
              { label: "30 Days", href: "#30days" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-parchment-muted hover:text-gold text-sm font-medium transition-colors duration-300 focus:outline-none focus:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="gold-rule mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-parchment-muted text-xs tracking-widest uppercase">
            © 2026 YouTube 101. All rights reserved.
          </p>
          <a
            href="https://selar.com/8ai877i268"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-parchment text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
          >
            Get the Book →
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
