import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Lightbulb } from 'lucide-react';

function LearningTimeline({ timelineItems }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Learning journey</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">From technical foundations to creative depth.</h2>
        </div>

        <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-500 before:via-white/30 before:to-orange-500 sm:before:left-1/2">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.year}`}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative grid gap-4 sm:grid-cols-2"
              >
                <div className={`${index % 2 === 0 ? 'sm:col-start-1' : 'sm:col-start-2'} ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {index % 2 === 0 ? <GraduationCap size={14} /> : <Lightbulb size={14} />}
                    {item.year}
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'sm:col-start-2' : 'sm:col-start-1'} relative ml-8 sm:ml-0`}>
                  <span className="absolute -left-[1.8rem] top-4 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-cyan-400 to-orange-400 sm:-left-8" />
                  <div className="rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">{item.detail}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningTimeline;
