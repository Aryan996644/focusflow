import React from 'react';
import { ArrowRight, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-b from-indigo-950/90 to-slate-950 border border-indigo-800/60 p-8 sm:p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-indigo-950/50"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

          {/* Logo Badge */}
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/90 border border-indigo-400/30 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-indigo-600/30">
            <Target className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to make progress?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal">
            Bring your tasks, focus sessions, and progress into one clear workspace.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#timer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start Focusing
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Product demonstration prototype for Acdyon Technologies Frontend Challenge.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
