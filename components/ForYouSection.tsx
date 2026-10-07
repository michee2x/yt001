"use client";

import React from "react";

const forYouItems = [
  "You've never posted and don't know where to start",
  "You've posted and nothing is moving",
  "You're tired of Googling every error message",
];

const ForYouSection: React.FC = () => {
  return (
    <section
      id="for-you"
      className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          This Is For You If
        </p>

        <h2
          className="font-display font-black text-parchment mb-12 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Sound familiar?
        </h2>

        <ul className="space-y-4">
          {forYouItems.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-5 py-5 border-b border-gold/10 last:border-0"
            >
              <span className="w-8 h-8 shrink-0 border border-gold/40 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C5A04E"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <p className="text-parchment text-base md:text-lg font-light">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ForYouSection;
