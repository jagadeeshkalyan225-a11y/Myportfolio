import { useState } from 'react';

function Footer({ navItems, contactDetails }) {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-black tracking-[-0.04em] text-white">D.JAGADEESH KALYAN</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">Civil Engineering and Creative Media</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© {year} D.JAGADEESH KALYAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
