"use client";

import React, { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "340",
    suffix: "+",
    label: "Activations Produced",
    description:
      "From 20-person launch dinners to 10,000-person festival takeovers.",
  },
  {
    value: "2.8",
    suffix: "B",
    label: "Earned Media Impressions",
    description:
      "Across all activations in the last 36 months. Organic coverage, not paid.",
  },
  {
    value: "94",
    suffix: "%",
    label: "Client Return Rate",
    description:
      "Most clients return within 18 months for their next activation.",
  },
  {
    value: "18",
    suffix: "",
    label: "Industry Awards",
    description:
      "Including Event Marketer Ex Award, POPAI Gold, and Fast Company Innovation.",
  },
];

const marqueeItems = [
  "Maplewood Spirits",
  "Vela Running",
  "Solara Energy",
  "Dusk Cosmetics",
  "Kestrel Audio",
  "Northgate Brewing",
  "Polaris Fintech",
  "Ember Apparel",
  "Grove Botanicals",
  "Meridian Foods",
];

const CountUp: React.FC<{
  value: string;
  suffix: string;
  isVisible: boolean;
}> = ({ value, suffix, isVisible }) => {
  const [current, setCurrent] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * numericValue);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue]);

  const display =
    numericValue % 1 === 0
      ? Math.round(current).toString()
      : current.toFixed(1);

  return (
    <span
      className="stat-foil"
      style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1 }}
    >
      {display}
      {suffix}
    </span>
  );
};

const CredibilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleStats, setVisibleStats] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger stat visibility
            stats.forEach((_, i) => {
              setTimeout(() => {
                setVisibleStats((prev) => {
                  const next = [...prev];
                  next[i] = true;
                  return next;
                });
              }, i * 200);
            });

            entry.target.querySelectorAll(".reveal-up-init").forEach((el) => {
              el.classList.add("is-visible");
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="studio" ref={sectionRef} className="relative overflow-hidden">
      {/* Marquee Band */}
      <div className="border-y border-gold/15 py-5 overflow-hidden bg-studio-gray/30">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex items-center gap-0 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <React.Fragment key={i}>
                <span className="text-parchment-muted text-xs font-semibold uppercase tracking-[0.3em] px-8">
                  {item}
                </span>
                <span className="text-gold/40 text-xs">◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 md:py-36 px-6 md:px-10 relative">
        {/* Background texture */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Gold atmospheric glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(197,160,78,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20 reveal-up-init">
            <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-4">
              By the Numbers
            </p>
            <h2 className="headline-section text-parchment">
              The Work Speaks.
              <br />
              <span className="italic text-parchment/60">
                The Numbers Confirm.
              </span>
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-gold/10 border border-gold/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-obsidian p-10 lg:p-12 relative group reveal-up-init"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Top gold accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="mb-4">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={visibleStats[i]}
                  />
                </div>
                <p className="text-parchment text-sm font-semibold mb-2 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="text-parchment-muted text-xs leading-relaxed font-light">
                  {stat.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gold/20 group-hover:border-gold/60 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div
            className="mt-20 max-w-3xl mx-auto text-center reveal-up-init"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="gold-border-left text-left">
              <p className="font-display text-2xl md:text-3xl text-parchment font-light italic leading-relaxed">
                "ActivationStudio didn't produce our launch event. They
                manufactured a cultural moment. The press coverage alone
                returned 14× our investment."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-studio-gray-light border border-gold/20 flex items-center justify-center">
                  <span className="text-gold text-xs font-bold">S</span>
                </div>
                <div>
                  <p className="text-parchment text-sm font-semibold">
                    Sarah Chen
                  </p>
                  <p className="text-parchment-muted text-xs uppercase tracking-widest">
                    CMO, Vela Running
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
