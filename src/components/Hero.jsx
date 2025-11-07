import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onShopClick }) {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-transparent dark:from-neutral-900/80 dark:via-neutral-900/30" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Welcome to the Neon Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-neutral-700 dark:text-neutral-300 text-lg"
          >
            A fusion of precision hardware and cyberpunk aesthetics. Discover gear engineered for speed, presence, and delight.
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onShopClick}
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              <span className="relative z-10">Shop the Future</span>
              <span className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
            </motion.button>
            <motion.button
              whileHover={{ x: 3 }}
              className="px-6 py-3 rounded-full font-semibold border border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-md text-neutral-900 dark:text-white"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-neutral-950" />
    </section>
  );
}
