import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Sun, Moon, Filter } from 'lucide-react';

export default function Navbar({ onToggleTheme, theme, cartCount, onSearch, onCategory }) {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const [openFilters, setOpenFilters] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categories = ['All', 'Wearables', 'Audio', 'Laptops', 'Accessories'];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <a href="#top" className="font-semibold tracking-tight text-xl flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></span>
            <span className="font-[800]">NEONSTORE</span>
          </a>
          <div className="hidden md:flex items-center gap-2 ml-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => onCategory(c)}
                className="px-3 py-1 text-sm rounded-full border border-white/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
              >
                {c}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                className="bg-transparent outline-none text-sm w-48 placeholder:text-neutral-400"
                placeholder="Search futuristic gear..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  onSearch(e.target.value);
                }}
              />
            </div>
            <button
              onClick={() => setOpenFilters((v) => !v)}
              className="sm:hidden p-2 rounded-full bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10"
              aria-label="Filters"
            >
              <Filter className="h-5 w-5" />
            </button>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-white/60 dark:bg-white/5 border border-neutral-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="relative p-2 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white shadow-lg shadow-cyan-400/30">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-white text-neutral-900 font-semibold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {openFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden mt-3"
            >
              <div className="flex flex-col gap-2 p-3 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md">
                  <Search className="h-4 w-4 text-neutral-500" />
                  <input
                    className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-400"
                    placeholder="Search futuristic gear..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      onSearch(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => onCategory(c)}
                      className="px-3 py-1 text-sm rounded-full border border-white/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
