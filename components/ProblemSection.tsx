'use client';

import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(197,160,78,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          The Problem
        </p>

        <h2 className="font-display font-black text-parchment mb-10 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Here's how it goes for most people.
        </h2>

        <div className="space-y-5 text-parchment-dim text-base md:text-lg font-light leading-relaxed">
          <p>
            You post a video. Nothing happens. You open Studio and see "N/A." Then a copyright notice. Then a restriction you didn't ask for. Nobody tells you what any of it means, so you start guessing. A few weeks later you stop posting.
          </p>
          <p className="text-parchment font-medium">
            Talent was never the issue. Nobody sat you down and explained how this works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
