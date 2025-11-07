import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const saved = localStorage.getItem('theme') || userPref;
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const cartCount = cart.length;
  const handleAddToCart = (p) => setCart((c) => [...c, p]);

  const neonBg = useMemo(
    () => ({ backgroundImage: 'radial-gradient(1000px 500px at 10% 10%, rgba(34,211,238,0.15), transparent), radial-gradient(1000px 500px at 90% 20%, rgba(244,114,182,0.15), transparent)' }),
    []
  );

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white" style={neonBg}>
      <Navbar
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        theme={theme}
        cartCount={cartCount}
        onSearch={setQuery}
        onCategory={setCategory}
      />

      <AnimatePresence>{loading && <LoadingOverlay />}</AnimatePresence>

      <main className="pt-20">
        <Hero onShopClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        <ProductGrid onAddToCart={handleAddToCart} filterQuery={query} category={category} />
        <ProductDetail />
      </main>

      <Footer />
    </div>
  );
}

function LoadingOverlay() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="fixed inset-0 z-[60] grid place-items-center bg-white dark:bg-neutral-950"
    >
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-4 border-white/10 dark:border-white/10" />
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-cyan-400 border-l-fuchsia-500"
        />
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-sm text-neutral-500">
        Loading experience
      </motion.p>
    </motion.div>
  );
}
