import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail() {
  const [color, setColor] = useState('Black');
  const [size, setSize] = useState('M');
  const [index, setIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533044309907-0fa3413da946?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl">
              <div className="aspect-[4/3] relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={images[index]}
                    alt="Product"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="flex gap-2 p-3 bg-white/50 dark:bg-white/5 border-t border-white/10">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIndex(i)}
                    className={`h-14 w-20 overflow-hidden rounded-xl border ${
                      index === i ? 'border-cyan-400' : 'border-white/10'
                    }`}
                  >
                    <img src={src} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">Nebula Headphones Pro</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Experience spatial audio with magnetic comfort and zero-latency streaming. Built for creators and players alike.</p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl font-extrabold text-cyan-400">$299</span>
              <span className="text-sm text-neutral-500 line-through">$349</span>
            </div>

            <div className="mt-6">
              <p className="text-sm mb-2 text-neutral-600 dark:text-neutral-300">Color</p>
              <div className="flex gap-2">
                {['Black', 'Silver', 'Iridescent'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-3 py-1.5 rounded-full text-sm border ${
                      color === c ? 'border-cyan-400 text-cyan-400' : 'border-white/10 text-neutral-700 dark:text-neutral-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm mb-2 text-neutral-600 dark:text-neutral-300">Size</p>
              <div className="flex gap-2">
                {['S', 'M', 'L'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-10 w-10 rounded-full border font-semibold ${
                      size === s ? 'border-fuchsia-400 text-fuchsia-400' : 'border-white/10 text-neutral-700 dark:text-neutral-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(244,114,182,0.35)]"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
