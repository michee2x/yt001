'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What format is it?',
    answer: 'PDF / Print',
  },
  {
    question: 'Is it up to date?',
    answer: "Facts were checked against current sources in September 2026, and the book points you to YouTube's own help pages for anything that changes.",
  },
  {
    question: 'Do I need experience?',
    answer: 'No. It starts from zero.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 px-6 md:px-10 relative overflow-hidden bg-studio-gray/20">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-6">
          FAQ
        </p>

        <h2 className="font-display font-black text-parchment mb-12 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Common questions.
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="surface-card border border-gold/10 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-parchment text-base font-semibold group-hover:text-gold transition-colors duration-300">
                  {faq.question}
                </span>
                <span className={`text-gold transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-45' : ''}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-parchment-dim text-sm font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
