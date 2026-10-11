import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Clapperboard, ExternalLink, Play, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';

function CreativeGallery({ projects }) {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [projects],
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects],
  );

  return (
    <section id="creative-portfolio" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-orange-600">Creative portfolio</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">Cinematic work, polished for impact.</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setActiveFilter(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeFilter === option
                    ? 'bg-slate-950 text-white shadow-lg'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.07)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-800/10 to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-200">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 16 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-900 text-white shadow-[0_40px_120px_rgba(15,23,42,0.45)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white"
                aria-label="Close project detail"
              >
                <X size={18} />
              </button>

              <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative min-h-[280px] bg-slate-800">
                  {selectedProject.videoUrl ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      poster={selectedProject.poster}
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  ) : (
                    <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-cover" />
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    <Clapperboard size={14} />
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl font-black tracking-[-0.04em]">{selectedProject.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{selectedProject.description}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
                    {selectedProject.details}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900"
                    >
                      <Sparkles size={16} />
                      Close Preview
                    </button>
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white"
                      >
                        <Play size={16} />
                        Open Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CreativeGallery;
