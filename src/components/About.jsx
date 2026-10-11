import { ArrowUpRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

function About({ personalDetails }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -30 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_40%)]" />
            <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-slate-100 via-white to-slate-100 p-4">
              <div className="relative flex h-[420px] items-end justify-center overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-700">
                <div className="absolute inset-0 opacity-30 blueprint-grid-light" />
                <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-white/15" />
                <div className="absolute right-6 top-10 h-28 w-28 rounded-full border border-cyan-300/35" />
                <div className="absolute bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-[30%] border border-white/15 bg-white/5 backdrop-blur-sm" />
                <div className="relative mb-8 flex h-60 w-48 items-center justify-center rounded-[32px] border border-slate-100/30 bg-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.3)] backdrop-blur-md">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/80 via-blue-300/60 to-orange-300/60 text-4xl font-black text-slate-950">
                    DJ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            <Sparkles size={14} />
            About me
          </div>

          <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Precision <span className="text-blue-600">in engineering.</span> Creativity <span className="text-orange-500">in motion.</span>
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>{personalDetails.intro}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
              <MapPin size={16} className="text-blue-600" />
              {personalDetails.institution}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2">
              <CheckCircle2 size={16} className="text-cyan-600" />
              {personalDetails.education}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Engineering design thinking',
              'Creative visual communication',
              'Problem-solving mindset',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <ArrowUpRight size={16} />
                </div>
                <p className="text-sm font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
