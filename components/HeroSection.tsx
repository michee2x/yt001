'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian noise-overlay px-6 md:px-10"
      style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #141418 50%, #0B0B0F 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto pt-32 pb-20">
        {/* Eyebrow */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-8 opacity-80 text-center">
          YouTube 101
        </p>

        {/* Two-column layout: text + book cover */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display font-black text-parchment leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
              You don't need luck to grow on YouTube.{' '}
              <span className="text-gold italic">You need to know what you're looking at.</span>
            </h1>

            <p className="text-parchment-dim text-base md:text-lg font-light leading-relaxed mb-10">
              YouTube 101 walks you from your first upload to reading your own channel like you've done this for years.
            </p>

            <a
              href="https://selar.com/8ai877i268"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex text-base px-8 py-4"
            >
              <span>Get the Book</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <p className="text-parchment-muted text-sm mt-6 tracking-widest uppercase">
              111 pages &nbsp;·&nbsp; 28 chapters &nbsp;·&nbsp; A 30-day plan
            </p>
          </div>

          {/* Book cover image */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Glow effect behind book */}
              <div className="absolute inset-0 rounded-xl blur-2xl opacity-30 bg-gold scale-95 translate-y-4" />
              <img
                src="https://i.postimg.cc/kXCWmCDZ/1000123765-removebg-preview-(1).png"
                alt="YouTube 101 book cover — a beginner's guide to growing on YouTube"
                className="relative w-56 md:w-72 shadow-2xl"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,175,55,0.15)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <p className="text-[9px] uppercase tracking-[0.4em] text-parchment-muted">Scroll</p>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
