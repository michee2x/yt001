'use client';

import React, { useState, useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

type FormStep = 'email' | 'details' | 'success';

const PlaybookSection: React.FC = () => {
  const [formStep, setFormStep] = useState<FormStep>('email');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up-init, .reveal-left-init, .reveal-right-init').forEach((el) => {
              el.classList.add('is-visible');
            });
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, i) => {
              setTimeout(() => child.classList.add('is-visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid work email.');
      return;
    }
    setEmailError('');
    setFormStep('details');
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submission — backend integration point
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep('success');
    }, 1400);
  };

  const playbookContents = [
    'The brief architecture we use for every activation',
    'Full budget breakdown for the Maplewood case study',
    'Our earned media checklist (47 checkpoints)',
    'Vendor qualification framework',
    'The 72-hour post-event impact report template',
    'How to pitch an activation internally',
  ];

  return (
    <section id="playbook" ref={sectionRef} className="py-24 md:py-40 px-6 md:px-10 relative overflow-hidden">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(197,160,78,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Playbook preview */}
          <div className="lg:col-span-6 reveal-left-init">
            <div className="relative">
              {/* Stacked book effect */}
              <div className="relative">
                {/* Shadow books */}
                <div
                  className="absolute inset-0 surface-card"
                  style={{ transform: 'rotate(4deg) translate(12px, 12px)', opacity: 0.4 }}
                />

                <div
                  className="absolute inset-0 surface-card"
                  style={{ transform: 'rotate(-2deg) translate(-8px, 8px)', opacity: 0.3 }}
                />

                {/* Main cover */}
                <div className="relative surface-card overflow-hidden border border-gold/20 p-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <AppImage
                      src="https://img.rocket.new/generatedImages/rocket_gen_img_1a71194ac-1772141986392.png"
                      alt="Activation Playbook cover showing behind-the-scenes fabrication work"
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.5) sepia(30%)' } as React.CSSProperties}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-10">
                      <div>
                        <p className="text-gold text-[9px] font-semibold uppercase tracking-[0.6em] mb-3">
                          ActivationStudio
                        </p>
                        <h3 className="font-display text-4xl font-black text-parchment leading-tight">
                          The Activation<br />Playbook
                        </h3>
                        <p className="text-parchment-dim text-xs mt-2 font-light">28 pages · Third edition</p>
                      </div>

                      {/* Contents list */}
                      <div>
                        <p className="text-gold text-[9px] font-semibold uppercase tracking-widest mb-4">
                          Inside
                        </p>
                        <ul className="space-y-2">
                          {playbookContents.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-parchment-dim text-xs font-light">
                              <span className="text-gold mt-0.5 shrink-0">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gold flex items-center justify-center"
                style={{ transform: 'rotate(12deg)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="text-obsidian text-[9px] font-black uppercase tracking-tight text-center leading-tight">
                  Free<br />PDF
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6 reveal-right-init">
            <div className="mb-10">
              <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.5em] mb-4">
                The Activation Playbook
              </p>
              <h2 className="headline-case text-parchment mb-6">
                Reverse-engineer<br />
                <span className="italic text-gold/80">three campaigns.</span>
              </h2>
              <p className="text-parchment-dim text-sm leading-relaxed font-light">
                28 pages that walk through the brief, budget, vendor framework, and earned media strategy behind three of our campaigns. The frameworks we use internally, made available for the first time.
              </p>
            </div>

            {/* Progressive disclosure form */}
            <div className="surface-card p-8 border border-gold/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              {formStep === 'email' && (
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <div>
                    <label className="block text-parchment-muted text-[10px] uppercase tracking-widest mb-2 font-semibold">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                      }}
                      required
                      autoComplete="email"
                    />
                    {emailError && (
                      <p className="text-red-400 text-xs mt-2">{emailError}</p>
                    )}
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center">
                    <span>Get the Playbook</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p className="text-parchment-muted text-[10px] text-center leading-relaxed">
                    No spam. Unsubscribe anytime. Your email stays private.
                  </p>
                </form>
              )}

              {formStep === 'details' && (
                <form onSubmit={handleDetailsSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
                    <p className="text-parchment-dim text-xs">
                      One more step — helps us send you relevant follow-ups.
                    </p>
                  </div>
                  <div>
                    <label className="block text-parchment-muted text-[10px] uppercase tracking-widest mb-2 font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label className="block text-parchment-muted text-[10px] uppercase tracking-widest mb-2 font-semibold">
                      Your Role
                    </label>
                    <select
                      className="form-input"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      style={{ background: '#2A2A2E' }}
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="cmo">CMO / VP Marketing</option>
                      <option value="experiential">Experiential Marketing Director</option>
                      <option value="founder">Founder / CEO</option>
                      <option value="brand">Brand Manager</option>
                      <option value="agency">Agency / Production Partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn-gold w-full justify-center"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending…' : 'Download the Playbook'}</span>
                    {!isSubmitting && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}

              {formStep === 'success' && (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 border-2 border-gold mx-auto flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A04E" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-parchment font-semibold mb-2">
                      It's on its way.
                    </h4>
                    <p className="text-parchment-dim text-sm font-light">
                      Check <strong className="text-parchment">{email}</strong> — the playbook should arrive within 2 minutes.
                    </p>
                  </div>
                  <div className="gold-rule" />
                  <div>
                    <p className="text-parchment-muted text-xs mb-3">
                      While you wait — watch the Solara case film:
                    </p>
                    <button className="btn-outline-gold text-[11px]" style={{ padding: '0.625rem 1.5rem' }}>
                      <span>Watch Case Film</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Secondary path */}
            {formStep !== 'success' && (
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 gold-rule" />
                <p className="text-parchment-muted text-[10px] uppercase tracking-widest shrink-0">or</p>
                <div className="flex-1 gold-rule" />
              </div>
            )}

            {formStep !== 'success' && (
              <button
                className="mt-6 w-full flex items-center justify-center gap-3 py-4 border border-gold/20 hover:border-gold/50 transition-colors duration-300 group"
                onClick={() => {
                  // Email gate for case film — backend integration point
                  if (validateEmail(email)) {
                    alert('Case film link sent to ' + email);
                  } else {
                    setFormStep('email');
                  }
                }}
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-parchment-dim text-xs font-semibold uppercase tracking-widest group-hover:text-parchment transition-colors">
                  Watch the Full Case Film
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaybookSection;
