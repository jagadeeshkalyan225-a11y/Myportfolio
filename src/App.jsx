import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import CreativeGallery from './components/CreativeGallery';
import DualDiscipline from './components/DualDiscipline';
import EngineeringProjects from './components/EngineeringProjects';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LearningTimeline from './components/LearningTimeline';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import {
  contactDetails,
  creativeProjects,
  engineeringProjects,
  navItems,
  personalDetails,
  skillGroups,
  timelineItems,
} from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(currentScroll > 24);
      setShowScrollTop(currentScroll > 300);
      setScrollProgress(maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0);

      const sectionEntries = navItems
        .map((item) => ({
          id: item.href.replace('#', ''),
          offset: document.getElementById(item.href.replace('#', ''))?.offsetTop ?? 0,
        }))
        .filter((entry) => entry.id);

      const active = sectionEntries.reduce((closest, current) => {
        if (current.offset <= window.scrollY + 180) {
          return current;
        }
        return closest;
      }, sectionEntries[0] ?? { id: 'home' });

      if (active?.id) {
        setActiveSection(active.id);
      }
    };

    const revealElements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    revealElements.forEach((element) => observer.observe(element));
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-slate-200/60">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <div data-reveal>
          <Hero personalDetails={personalDetails} />
        </div>
        <div data-reveal>
          <About personalDetails={personalDetails} />
        </div>
        <div data-reveal>
          <Skills skillGroups={skillGroups} />
        </div>
        <div data-reveal>
          <EngineeringProjects projects={engineeringProjects} />
        </div>
        <div data-reveal>
          <CreativeGallery projects={creativeProjects} />
        </div>
        <div data-reveal>
          <DualDiscipline />
        </div>
        <div data-reveal>
          <LearningTimeline timelineItems={timelineItems} />
        </div>
        <div data-reveal>
          <Contact contactDetails={contactDetails} />
        </div>
      </main>

      <Footer navItems={navItems} contactDetails={contactDetails} />

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_20px_40px_rgba(37,99,235,0.35)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
