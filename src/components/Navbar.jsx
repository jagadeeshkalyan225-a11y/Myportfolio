import { Menu, X } from 'lucide-react';
import { useMemo } from 'react';

function Navbar({ navItems, activeSection, scrolled, mobileMenuOpen, setMobileMenuOpen }) {
  const visibleNavItems = useMemo(() => navItems, [navItems]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-[0_12px_40px_rgba(16,24,40,0.08)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-orange-400 text-base font-bold text-white shadow-lg shadow-blue-400/30">
            DJ
          </span>
          <span className="hidden sm:inline">D.JAGADEESH</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/60 p-2 shadow-sm backdrop-blur-md md:flex">
          {visibleNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-400" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
          >
            Let's Connect
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 md:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen((previous) => !previous)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {visibleNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-base font-medium transition ${
                  activeSection === item.href.replace('#', '') ? 'bg-slate-100 text-slate-900' : 'text-slate-700'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
