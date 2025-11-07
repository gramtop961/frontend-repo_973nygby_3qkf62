import { motion } from 'framer-motion';

const sampleProducts = [
  { id: 1, title: 'Nebula Headphones', price: 299, category: 'Audio', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Holo Watch', price: 449, category: 'Wearables', img: 'https://images.unsplash.com/photo-1518444088603-0e5a9805b0a6?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Quantum Laptop', price: 1899, category: 'Laptops', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Ion Smart Glasses', price: 599, category: 'Accessories', img: 'https://images.unsplash.com/photo-1533044309907-0fa3413da946?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Photon Earbuds', price: 149, category: 'Audio', img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Flux Keyboard', price: 229, category: 'Accessories', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
];

export default function ProductGrid({ onAddToCart, filterQuery = '', category = 'All' }) {
  const filtered = sampleProducts.filter((p) => {
    const matchesQuery = p.title.toLowerCase().includes(filterQuery.toLowerCase());
    const matchesCat = category === 'All' || p.category === category;
    return matchesQuery && matchesCat;
  });

  return (
    <section id="products" className="relative py-16">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-fuchsia-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Featured Products</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Hover cards for microinteractions</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                  <span className="text-cyan-400 font-bold">${p.price}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30">{p.category}</span>
                  <button
                    onClick={() => onAddToCart(p)}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
