"use client";

import React from "react";

const AuthorSection: React.FC = () => {
  return (
    <section
      id="author"
      className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden bg-studio-gray/20"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          The Author
        </p>

        <div className="gold-border-left">
          <p className="text-parchment-dim text-base md:text-lg font-light leading-relaxed">
            Sinizibe Choose wrote this for beginners who were tired of guides
            that explain everything and show you nothing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
