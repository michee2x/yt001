"use client";

import React from "react";

const ThirtyDaysSection: React.FC = () => {
  return (
    <section
      id="30days"
      className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden bg-studio-gray/20"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,78,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          30 Days
        </p>

        <h2
          className="font-display font-black text-parchment mb-10 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          One task a day. One month.
        </h2>

        <p className="text-parchment-dim text-base md:text-lg font-light leading-relaxed mb-8">
          The last section is a 30-day challenge. One task a day, 20 minutes to
          an hour each.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="surface-card p-8 border border-gold/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/60 to-transparent" />
            <p className="text-gold text-[9px] font-semibold uppercase tracking-[0.5em] mb-3">
              Day 1
            </p>
            <p className="text-parchment text-base font-semibold">
              You define your channel.
            </p>
          </div>
          <div className="surface-card p-8 border border-gold/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/60 to-transparent" />
            <p className="text-gold text-[9px] font-semibold uppercase tracking-[0.5em] mb-3">
              Day 30
            </p>
            <p className="text-parchment text-base font-semibold">
              You're looking at your own dashboard and you know what you're
              seeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirtyDaysSection;
