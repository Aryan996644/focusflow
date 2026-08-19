import React from 'react';
import { Calendar, Timer, TrendingUp, Layers, Compass, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      id: 'plan',
      title: 'Plan',
      description: 'Organize tasks and projects in one focused workspace.',
      icon: Calendar,
      accent: 'from-blue-500 to-indigo-600',
      badgeText: 'Structured Prioritization',
      highlights: ['Project milestone mapping', 'Task status & estimates', 'Priority flags']
    },
    {
      id: 'focus',
      title: 'Focus',
      description: 'Use dedicated focus sessions to protect deep work.',
      icon: Timer,
      accent: 'from-indigo-500 to-purple-600',
      badgeText: 'Distraction Protection',
      highlights: ['Customizable Pomodoro clock', 'Break notifications', 'Session streak tracking']
    },
    {
      id: 'progress',
      title: 'Progress',
      description: 'Understand what is moving forward and what needs attention.',
      icon: TrendingUp,
      accent: 'from-emerald-500 to-teal-600',
      badgeText: 'Actionable Insights',
      highlights: ['Daily completion %', 'Weekly focus hours trend', 'Upcoming deadline radar']
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Core Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for clarity, built for execution.
          </p>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            FocusFlow removes tool fatigue by combining planning, session protection, and progress tracking into one seamless workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/90 p-8 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl shadow-slate-950/40 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.accent} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block text-xs font-semibold text-indigo-400 mb-2">
                    {feature.badgeText}
                  </span>

                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {feature.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
