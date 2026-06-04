import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Building2, CalendarCheck, ClipboardCheck, Gauge, ShieldCheck } from 'lucide-react';
import heroImage from './assets/hero-project-management.png';
import './styles.css';

const services = [
  {
    icon: CalendarCheck,
    title: 'Schedule Control',
    text: 'Milestones, procurement dates, and site progress stay visible from bid to handover.',
  },
  {
    icon: ClipboardCheck,
    title: 'Delivery Governance',
    text: 'Clear reporting rhythms help owners, contractors, and vendors make decisions earlier.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Tracking',
    text: 'Risks, dependencies, and approvals are logged before they become costly delays.',
  },
];

const metrics = [
  ['98%', 'on-time reporting rhythm'],
  ['24h', 'issue response target'],
  ['360°', 'owner-side visibility'],
];

function App() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-ink">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="flex items-center gap-3 font-semibold" href="/">
          <span className="grid h-10 w-10 place-items-center rounded bg-ink text-white">
            <Building2 size={21} strokeWidth={2.2} />
          </span>
          <span>xinrongpm.com</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
          <a className="hover:text-ink" href="#services">Services</a>
          <a className="hover:text-ink" href="#process">Process</a>
          <a className="hover:text-ink" href="#contact">Contact</a>
        </nav>
        <a className="inline-flex h-10 items-center gap-2 rounded bg-signal px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#188575]" href="#contact">
          Start
          <ArrowRight size={16} />
        </a>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-16">
        <div className="py-8 lg:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ember">Project management for delivery teams</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Keep complex engineering projects moving with calmer control.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-steel">
            Xinrong PM helps construction and engineering teams coordinate schedules, budgets, vendors, and reporting with a practical owner-side management system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded bg-ink px-6 font-semibold text-white hover:bg-[#27334d]" href="#contact">
              Discuss a Project
              <ArrowRight size={18} />
            </a>
            <a className="inline-flex h-12 items-center justify-center rounded border border-[#d4cab8] px-6 font-semibold text-ink hover:border-ink" href="#services">
              View Services
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-soft">
          <img className="aspect-[16/11] h-full w-full object-cover" src={heroImage} alt="Engineering project planning workspace" />
          <div className="absolute bottom-4 left-4 right-4 grid gap-3 rounded bg-white/90 p-4 backdrop-blur sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-semibold text-ink">{value}</p>
                <p className="text-sm leading-5 text-steel">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">Services</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Clear systems for high-stakes delivery.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="rounded-lg border border-[#e5dfd4] p-5" key={title}>
                <Icon className="mb-5 text-signal" size={26} />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">Process</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">A tighter cadence from kickoff to handover.</h2>
          </div>
          <div className="grid gap-3">
            {['Baseline the plan', 'Run weekly control meetings', 'Escalate risk early', 'Close with documented handover'].map((step, index) => (
              <div className="flex items-center gap-4 border-b border-[#ddd4c3] py-4" key={step}>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-white font-semibold text-signal">{index + 1}</span>
                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-7 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8edbcf]">
              <Gauge size={18} />
              Ready to align the next milestone
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Build a stronger project control rhythm.</h2>
          </div>
          <a className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-6 font-semibold text-ink hover:bg-[#f0eee7]" href="mailto:hello@xinrongpm.com">
            hello@xinrongpm.com
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
