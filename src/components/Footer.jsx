import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] border-t border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} NeonStore. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/50 transition-colors"><Github className="h-5 w-5" /></a>
          <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/50 transition-colors"><Twitter className="h-5 w-5" /></a>
          <a href="#" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/50 transition-colors"><Instagram className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
