import React from 'react';
import { Target } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Logo & Wordmark */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <Target className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Focus<span className="text-indigo-400">Flow</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-300">
            <a href="#product-preview" className="hover:text-white transition-colors">
              Product
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </nav>

          {/* Copyright Notice */}
          <div className="text-xs text-slate-500 text-center md:text-right">
            © {currentYear} FocusFlow. Fictional product demo for challenge evaluation.
          </div>

        </div>
      </div>
    </footer>
  );
}
