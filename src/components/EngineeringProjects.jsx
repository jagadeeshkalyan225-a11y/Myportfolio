import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Building2, DraftingCompass } from 'lucide-react';

function EngineeringProjects({ projects }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="absolute inset-0 opacity-30 blueprint-grid" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Civil engineering projects</p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">Blueprint thinking with real-world clarity.</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[260px] overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 opacity-30 blueprint-grid-light" />
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-85" loading="lazy" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                      <Building2 size={14} />
                      Project showcase
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white">
                      <DraftingCompass size={16} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black tracking-[-0.04em] text-slate-950">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{project.overview}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Objective</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.objective}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Tools</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.tools.join(' • ')}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Student contribution</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.contribution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Lessons learned</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{project.lessons}</p>
                    </div>
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Review project approach <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngineeringProjects;
