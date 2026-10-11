import { ArrowRight, ChevronDown, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

function Hero({ personalDetails }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.14),_transparent_30%),linear-gradient(180deg,#f5f8ff_0%,#ffffff_100%)] pt-28 sm:pt-32">
      <div className="absolute inset-0 opacity-30">
        <div className="blueprint-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
            Civil Engineering & Visual Storytelling
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
            {personalDetails.name}
          </h1>

          <p className="mt-5 max-w-xl text-xl font-medium text-blue-700 sm:text-2xl">
            {personalDetails.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            “{personalDetails.tagline}”
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#creative-portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
            >
              <Mail size={18} />
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="block text-2xl font-black text-slate-950">Diploma</span>
              <span>Civil Engineering</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-slate-950">Editor</span>
              <span>After Effects / Premiere</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-slate-950">Visual</span>
              <span>Concept + Design</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 30 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-md rounded-[32px] border border-white/60 bg-white/70 p-5 shadow-[0_35px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <div className="absolute -left-8 top-12 h-24 w-24 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 p-4">
              <div className="flex items-center justify-between pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Portfolio</span>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold uppercase text-emerald-700">
                  Available
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-5 text-white">
                <div className="absolute inset-0 opacity-30 blueprint-grid-light" />
                <div className="relative flex h-[320px] items-end justify-between">
                  <div className="space-y-3">
                    <div className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md" />
                    <div className="grid gap-2">
                      <div className="h-2.5 w-28 rounded-full bg-white/60" />
                      <div className="h-2.5 w-20 rounded-full bg-cyan-300/80" />
                    </div>
                  </div>

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-[28px] border border-white/20 bg-white/10">
                    <div className="absolute inset-3 rounded-[22px] border border-dashed border-cyan-300/60" />
                    <div className="h-16 w-16 rounded-full border-2 border-orange-300 bg-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.65)]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Focus</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">Engineering + Editing</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Style</p>
                  <p className="mt-2 text-sm font-semibold text-slate-800">Cinematic & Precise</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex sm:flex-col sm:items-center sm:gap-3 text-slate-500">
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Scroll</span>
        <ChevronDown className="animate-bounce" size={18} />
      </div>
    </section>
  );
}

export default Hero;
