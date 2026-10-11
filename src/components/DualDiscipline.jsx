import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

function DualDiscipline() {
  const reduceMotion = useReducedMotion();
  const [comparison, setComparison] = useState(52);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">Dual-discipline feature</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">Precision in Engineering. Creativity in Motion.</h2>
        </div>

        <div className="relative hidden overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] lg:block">
          <div className="relative h-[540px]">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" style={{ width: `${comparison}%` }}>
              <div className="absolute inset-0 opacity-30 blueprint-grid-light" />
              <div className="relative flex h-full flex-col justify-between p-10 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Civil Engineering</p>
                  <h3 className="mt-4 text-4xl font-black tracking-[-0.06em]">Blueprint precision</h3>
                </div>

                <div className="relative h-64 w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-4 p-6 opacity-80">
                    {Array.from({ length: 40 }).map((_, index) => (
                      <div key={index} className="rounded-md border border-cyan-300/20" />
                    ))}
                  </div>
                  <div className="absolute inset-6 rounded-[20px] border border-cyan-300/40" />
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-300/70" />
                  <div className="absolute bottom-10 right-10 h-20 w-20 rotate-12 rounded-2xl border-2 border-cyan-300/70" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-red-500/20" style={{ clipPath: `inset(0 0 0 ${comparison}% )` }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,138,61,0.25),transparent_32%),linear-gradient(135deg,#111827_0%,#1f2937_100%)]" />
              <div className="relative flex h-full flex-col justify-between p-10 text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-orange-200">Creative media</p>
                  <h3 className="mt-4 text-4xl font-black tracking-[-0.06em]">Motion storytelling</h3>
                </div>

                <div className="relative h-64 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.25),transparent_18%),radial-gradient(circle_at_20%_80%,rgba(255,138,61,0.25),transparent_20%)]" />
                  <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-cyan-400/60 blur-xl" />
                  <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-orange-400/60 blur-xl" />
                  <div className="absolute bottom-12 left-1/2 h-40 w-56 -translate-x-1/2 rounded-[30px] border border-white/20 bg-white/5 backdrop-blur-md" />
                  <div className="absolute left-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-lg border border-white/20 bg-white/10" />
                  <div className="absolute right-16 top-1/2 h-20 w-32 -translate-y-1/2 rotate-12 rounded-[20px] border border-orange-300/60 bg-orange-500/10" />
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 z-20 flex items-center" style={{ left: `calc(${comparison}% - 18px)` }}>
              <div className="flex h-16 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl">
                <div className="h-8 w-1 rounded-full bg-slate-400" />
              </div>
            </div>

            <input
              aria-label="Compare engineering and creative disciplines"
              type="range"
              min="10"
              max="90"
              value={comparison}
              onChange={(event) => setComparison(Number(event.target.value))}
              className="dual-range absolute inset-0 z-30 h-full w-full opacity-0"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:hidden">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[30px] border border-slate-200 bg-slate-900 p-6 text-white shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Civil Engineering</p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">Blueprint precision</h3>
            <div className="mt-6 h-52 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),rgba(15,23,42,0.4))] p-5">
              <div className="grid h-full grid-cols-5 gap-2">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="rounded-md border border-cyan-300/20" />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[30px] border border-orange-200 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 p-6 text-white shadow-lg"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-orange-200">Creative media</p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">Motion storytelling</h3>
            <div className="mt-6 h-52 rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.3),transparent_15%),radial-gradient(circle_at_70%_60%,rgba(255,138,61,0.35),transparent_20%)] p-5">
              <div className="relative h-full w-full rounded-[20px] border border-white/10 bg-white/5">
                <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-cyan-400/60 blur-xl" />
                <div className="absolute right-6 top-8 h-20 w-20 rounded-full bg-orange-400/60 blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DualDiscipline;
