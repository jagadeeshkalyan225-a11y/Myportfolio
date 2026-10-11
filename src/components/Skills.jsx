import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Hammer, MonitorPlay } from 'lucide-react';

function Skills({ skillGroups }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-slate-950 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Skills & expertise</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Creative vision grounded in technical thinking.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.3)] backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent}`}>
                    {group.title === 'Civil Engineering' ? <Hammer size={20} /> : <MonitorPlay size={20} />}
                  </div>
                  <h3 className="text-2xl font-bold">{group.title}</h3>
                </div>
              </div>

              <div className="grid gap-4">
                {group.items.map((skill) => (
                  <motion.article
                    key={skill.name}
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                    className="group rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition-colors hover:border-cyan-400/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{skill.description}</p>
                      </div>
                      <ArrowUpRight className="mt-1 text-slate-400 transition group-hover:text-cyan-300" size={18} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
