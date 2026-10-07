'use client';

import React from 'react';

const BookSection: React.FC = () => {
  return (
    <section id="book" className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden bg-studio-gray/20">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          The Book
        </p>

        <h2 className="font-display font-black text-parchment mb-10 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          This book does that.
        </h2>

        <div className="gold-border-left">
          <p className="text-parchment-dim text-base md:text-lg font-light leading-relaxed">
            It isn't something you read on the couch and forget. You open your own channel next to it, look at your real numbers, and do the work as you go. By the end you have a channel, a published video, and the habit of checking what's actually happening instead of hoping.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
