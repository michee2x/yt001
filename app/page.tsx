'use client';

import { FormEvent, useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    title: 'A New Ritual',
    category: 'Brand experience · Packaging',
    image:
      'https://images.unsplash.com/photo-1606323318693-8a3a5b6f4ce7?auto=format&fit=crop&w=1400&q=85',
    className: 'md:col-span-7 md:row-span-2',
    imageClass: 'h-[520px] md:h-full',
  },
  {
    number: '02',
    title: 'The Quiet House',
    category: 'Art direction · Digital',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    className: 'md:col-span-5',
    imageClass: 'h-[430px] md:h-[520px]',
  },
  {
    number: '03',
    title: 'Field Notes',
    category: 'Campaign · Editorial',
    image:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=85',
    className: 'md:col-span-5',
    imageClass: 'h-[430px] md:h-[500px]',
  },
];

const services = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Positioning, narrative, and a clear creative direction that gives every decision a reason to exist.',
  },
  {
    number: '02',
    title: 'Identity',
    description:
      'Distinctive visual worlds built to feel unmistakable across every touchpoint and every scale.',
  },
  {
    number: '03',
    title: 'Digital',
    description:
      'Immersive websites and digital experiences that turn attention into lasting connection.',
  },
  {
    number: '04',
    title: 'Campaign',
    description:
      'Ideas with momentum—made to travel through culture, content, and the people who believe in them.',
  },
];

const clients = ['NORTH', 'Morrow', 'Serein', 'KINDRED', 'Hearth', 'Form'];

function ArrowIcon({ direction = 'right' }: { direction?: 'right' | 'down' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={direction === 'down' ? 'h-4 w-4' : 'h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={direction === 'down' ? 'M12 4v15M6 13l6 6 6-6' : 'M5 12h14M14 7l5 5-5 5'} />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-obsidian text-parchment">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Aurelia home">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/60 text-[10px] font-semibold tracking-wider text-gold transition-colors group-hover:bg-gold group-hover:text-obsidian">
              A
            </span>
            <span className="font-display text-xl font-bold tracking-[0.12em]">AURELIA</span>
          </a>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.18em] md:flex" aria-label="Primary navigation">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#studio">Studio</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="hidden items-center gap-2 border border-gold/50 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-obsidian sm:flex">
            Start a project <ArrowIcon />
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/15 text-parchment md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} aria-hidden="true" />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-obsidian px-5 py-6 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 font-display text-3xl">
              {[
                ['Work', '#work'],
                ['Studio', '#studio'],
                ['Services', '#services'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-screen overflow-hidden px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pt-36">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="noise-overlay absolute inset-0" />
          <div className="annotation-circle -left-20 top-36 h-64 w-64" />
          <div className="annotation-circle right-[-5rem] top-[40%] h-72 w-72" />
          <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1440px] items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-10 bg-gold" /> Independent creative studio · Est. 2018
              </p>
              <h1 className="headline-hero max-w-6xl">
                Ideas with
                <span className="block italic text-gold">a pulse.</span>
              </h1>
              <div className="mt-10 grid gap-8 border-l-2 border-gold/70 pl-6 sm:grid-cols-[1fr_auto] sm:items-end lg:max-w-3xl">
                <p className="max-w-xl text-base leading-7 text-parchment-dim sm:text-lg sm:leading-8">
                  We shape identities, digital experiences, and cultural stories for ambitious people building what comes next.
                </p>
                <a href="#work" className="btn-gold group">
                  <span>Explore our work</span> <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:col-span-4 lg:mt-20">
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 bg-studio-gray shadow-2xl">
                <img
                  className="h-full w-full object-cover collage-photo"
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85"
                  alt="Sculptural modern interior"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-gold-light">Featured</p>
                    <p className="mt-1 font-display text-2xl">The New Form</p>
                  </div>
                  <span className="text-xs text-parchment-dim">2025</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full border border-gold/30" />
              <div className="absolute -right-4 top-10 rotate-90 text-[9px] uppercase tracking-[0.3em] text-gold/70">Made to move</div>
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-10 flex max-w-[1440px] items-center justify-between border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.22em] text-parchment-muted">
            <span>Scroll to discover</span>
            <span className="hidden sm:block">London · Copenhagen · Everywhere</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" /> Available for select projects</span>
          </div>
        </section>

        <section className="border-y border-white/10 bg-studio-gray py-5" aria-label="Studio capabilities">
          <div className="marquee-track w-max">
            {[...Array(2)].map((_, group) => (
              <div className="flex items-center" key={group} aria-hidden={group === 1}>
                {['Strategy', 'Identity', 'Digital', 'Campaign', 'Art Direction', 'Experience'].map((item) => (
                  <div className="flex items-center" key={`${group}-${item}`}>
                    <span className="px-8 font-display text-2xl italic text-parchment/80 sm:px-12 sm:text-3xl">{item}</span>
                    <span className="text-gold">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="studio" className="relative px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5" data-reveal className="reveal-left-init">
                <p className="eyebrow">Our point of view</p>
                <h2 className="headline-section mt-6">Not just seen.<br /><span className="italic text-gold">Felt.</span></h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-8" data-reveal className="reveal-right-init">
                <p className="font-display text-2xl leading-[1.35] text-parchment sm:text-3xl">
                  The strongest brands don’t simply communicate an idea. They create a world around it—an emotional, visual, and cultural space people want to stay inside.
                </p>
                <p className="mt-7 max-w-xl text-sm leading-7 text-parchment-muted">
                  Aurelia is an independent studio working closely with founders, cultural leaders, and ambitious teams. We bring strategy and craft into one room, then make the result impossible to ignore.
                </p>
                <a href="#services" className="mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  How we work <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="mt-24 grid gap-5 md:grid-cols-3" data-reveal className="stagger-child">
              {[
                ['42', 'Projects launched'],
                ['12', 'Countries reached'],
                ['9', 'Years of making'],
              ].map(([value, label], index) => (
                <div className="surface-card relative overflow-hidden p-8 sm:p-10" key={label}>
                  <span className="ghost-number">{value}</span>
                  <div className="relative z-10 flex items-end justify-between">
                    <span className="stat-foil text-7xl sm:text-8xl">{value}</span>
                    <span className="max-w-[95px] text-right text-[9px] uppercase leading-5 tracking-[0.2em] text-parchment-muted">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-parchment px-5 py-28 text-obsidian sm:px-8 sm:py-36 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end" data-reveal className="reveal-up-init">
              <div>
                <p className="eyebrow text-gold-dim">Selected work · 2023—2025</p>
                <h2 className="headline-section mt-6">Stories in<br /><span className="italic text-gold-dim">motion.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-parchment-muted">A collection of brands, spaces, and encounters shaped through curiosity and close collaboration.</p>
            </div>

            <div className="grid auto-rows-auto gap-8 md:grid-cols-12">
              {projects.map((project, index) => (
                <article className={`group ${project.className}`} key={project.title} data-reveal className="reveal-up-init">
                  <div className="relative overflow-hidden bg-studio-gray">
                    <img className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${project.imageClass}`} src={project.image} alt={`${project.title} project`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                    <span className="absolute left-5 top-5 font-display text-2xl text-gold">{project.number}</span>
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-parchment sm:p-8">
                      <div>
                        <h3 className="font-display text-3xl sm:text-4xl">{project.title}</h3>
                        <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-parchment-dim">{project.category}</p>
                      </div>
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-parchment/40 transition-all group-hover:bg-parchment group-hover:text-obsidian">
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="relative px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gold/5 to-transparent" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4" data-reveal className="reveal-left-init">
                <p className="eyebrow">What we do</p>
                <h2 className="headline-section mt-6">Built for<br /><span className="italic text-gold">the long game.</span></h2>
                <p className="mt-8 max-w-sm text-sm leading-7 text-parchment-muted">From the first thought to the final detail, we build a complete visual and verbal language around your ambition.</p>
              </div>
              <div className="lg:col-span-7 lg:col-start-7" data-reveal className="reveal-right-init">
                {services.map((service) => (
                  <article className="group grid gap-4 border-t border-white/15 py-8 first:pt-0 sm:grid-cols-[70px_1fr_1.5fr_40px] sm:items-start" key={service.title}>
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-gold">{service.number}</span>
                    <h3 className="font-display text-4xl transition-colors group-hover:text-gold sm:text-5xl">{service.title}</h3>
                    <p className="text-sm leading-7 text-parchment-muted">{service.description}</p>
                    <span className="hidden h-10 w-10 place-items-center rounded-full border border-gold/30 text-gold transition-all group-hover:rotate-45 group-hover:bg-gold group-hover:text-obsidian sm:grid"><ArrowIcon /></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-studio-gray px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="noise-overlay absolute inset-0" />
          <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-center">
            <div className="relative lg:col-span-5" data-reveal className="reveal-left-init">
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
                <img className="h-full w-full object-cover collage-photo" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85" alt="Minimal contemporary interior" />
              </div>
              <div className="absolute -bottom-7 -right-4 grid h-32 w-32 place-items-center rounded-full border border-gold bg-obsidian text-center text-[9px] uppercase leading-5 tracking-[0.2em] text-gold sm:-right-8">Nothing<br />ordinary<br />is made</div>
            </div>
            <div className="lg:col-span-6 lg:col-start-8" data-reveal className="reveal-right-init">
              <p className="eyebrow">A studio in motion</p>
              <blockquote className="mt-7 font-display text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
                “Aurelia gave us more than a new identity. They gave us a way to see ourselves differently.”
              </blockquote>
              <div className="mt-10 flex items-center gap-5">
                <span className="h-px w-12 bg-gold" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]">Sofia Ren</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-parchment-muted">Founder, Maison Serein</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-obsidian px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]" data-reveal className="reveal-up-init">
            <p className="text-center text-[9px] uppercase tracking-[0.28em] text-parchment-muted">Trusted by people with something to say</p>
            <div className="mt-12 grid grid-cols-2 items-center gap-x-8 gap-y-10 border-y border-white/10 py-10 sm:grid-cols-3 lg:grid-cols-6">
              {clients.map((client) => (
                <span className="text-center font-display text-xl tracking-[0.07em] text-parchment/60 sm:text-2xl" key={client}>{client}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative px-5 py-28 sm:px-8 sm:py-36 lg:px-12">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_75%_50%,rgba(197,160,78,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5" data-reveal className="reveal-left-init">
              <p className="eyebrow">Let’s make something</p>
              <h2 className="headline-section mt-6">Have a good<br /><span className="italic text-gold">idea?</span></h2>
              <p className="mt-8 max-w-sm text-sm leading-7 text-parchment-muted">Tell us what you’re building, where you’re stuck, or what you want to change. We’ll meet you there.</p>
              <div className="mt-10 border-l-2 border-gold pl-5">
                <p className="text-[9px] uppercase tracking-[0.2em] text-parchment-muted">Say hello</p>
                <a href="mailto:hello@aurelia.studio" className="mt-2 inline-block font-display text-2xl text-gold">hello@aurelia.studio</a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-8" data-reveal className="reveal-right-init">
              {submitted ? (
                <div className="surface-card flex min-h-[440px] flex-col items-center justify-center p-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-gold text-gold">✓</span>
                  <h3 className="mt-7 font-display text-4xl">Your note is on its way.</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-parchment-muted">Thank you for reaching out. We’ll be in touch within two working days.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Send another note</button>
                </div>
              ) : (
                <form className="grid gap-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-parchment-muted">
                      Your name
                      <input className="form-input mt-3" type="text" name="name" placeholder="Name" required />
                    </label>
                    <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-parchment-muted">
                      Email address
                      <input className="form-input mt-3" type="email" name="email" placeholder="you@company.com" required />
                    </label>
                  </div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.2em] text-parchment-muted">
                    Tell us about your project
                    <textarea className="form-input mt-3 min-h-44 resize-none" name="message" placeholder="A little context, your ambitions, and what you need..." required />
                  </label>
                  <button type="submit" className="btn-gold group w-fit">
                    <span>Send inquiry</span> <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="font-display text-2xl font-bold tracking-[0.12em]">AURELIA</a>
          <div className="flex flex-wrap gap-6 text-[9px] uppercase tracking-[0.18em] text-parchment-muted">
            <a className="transition-colors hover:text-gold" href="#studio">Instagram</a>
            <a className="transition-colors hover:text-gold" href="#studio">LinkedIn</a>
            <a className="transition-colors hover:text-gold" href="#studio">Behance</a>
          </div>
          <p className="text-[9px] uppercase tracking-[0.16em] text-parchment-muted">© {new Date().getFullYear()} Aurelia Studio</p>
        </div>
      </footer>
    </div>
  );
}
