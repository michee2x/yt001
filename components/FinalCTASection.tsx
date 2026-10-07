'use client';

import React from 'react';

const FinalCTASection: React.FC = () => {
  return (
    <section id="cta" className="py-24 md:py-40 px-6 md:px-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #141418 60%, #0B0B0F 100%)' }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(197,160,78,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <p className="text-parchment-dim text-base md:text-lg font-light leading-relaxed mb-4">
          Everyone you watch on YouTube started with one confusing upload.
        </p>
        <p className="text-parchment text-base md:text-xl font-medium leading-relaxed mb-12">
          The difference is they figured it out. This book gets you there faster.
        </p>

        <a
          href="https://selar.com/8ai877i268"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-flex text-base px-10 py-5"
          style={{ fontSize: '1rem' }}
        >
          <span>Get the Book</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
