import React from 'react';
import Dashboard from './Dashboard';
import { motion } from 'framer-motion';
import { LayoutDashboard, Sparkles } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section id="product-preview" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300 mb-4">
            <LayoutDashboard className="w-3.5 h-3.5 text-indigo-400" />
            <span>Product Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See FocusFlow in Action
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Experience a clean, unified workspace that keeps your tasks, focus timer, and progress in full view.
          </p>
        </div>

        {/* Dashboard Preview Container with subtle glow frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Subtle Ambient Glow behind dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 -z-10" />

          {/* Embedded Interactive Dashboard Component */}
          <Dashboard />
        </motion.div>

      </div>
    </section>
  );
}
