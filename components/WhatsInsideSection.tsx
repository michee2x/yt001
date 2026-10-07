'use client';

import React from 'react';

const items = [
  'Your channel, set up properly. Pick a lane and start with direction.',
  'Your first video, finished. Ideas, planning, recording, editing, uploading.',
  'Titles and thumbnails that get clicked. Because a good video nobody opens is a wasted video.',
  'Studio and analytics, decoded. Every number explained in plain words.',
  'Problems, solved. Copyright claims, restrictions, "inappropriate" flags, videos stuck at zero views.',
  'The money side, honestly. How monetization works and why you\'re probably not earning yet.',
  'Real growth. First 100 subscribers, then 1,000, and how the recommendation system decides what gets pushed.',
  'AI and systems. Work faster and stay consistent without burning out.',
];

const WhatsInsideSection: React.FC = () => {
  return (
    <section id="inside" className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          What's Inside
        </p>

        <h2 className="font-display font-black text-parchment mb-12 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Eight things this book covers.
        </h2>

        <ul className="space-y-5 mb-14">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 surface-card p-6 border border-gold/10 group hover:border-gold/30 transition-colors duration-300">
              <span className="text-gold font-bold text-lg shrink-0 mt-0.5">•</span>
              <p className="text-parchment-dim text-sm md:text-base font-light leading-relaxed group-hover:text-parchment transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
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
        </div>
      </div>
    </section>
  );
};

export default WhatsInsideSection;
