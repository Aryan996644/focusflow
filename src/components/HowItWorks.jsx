import React from 'react';
import { motion } from 'framer-motion';
import { ListTodo, Timer, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Plan',
      subtitle: 'Add the work that matters.',
      description: 'Capture tasks with priorities and time estimates. FocusFlow helps you group work into focused sprints instead of endless backlog lists.',
      icon: ListTodo,
    },
    {
      step: '02',
      title: 'Focus',
      subtitle: 'Work through a distraction-free session.',
      description: 'Trigger standard or custom focus blocks. Clear your screen, target single-task execution, and track active time automatically.',
      icon: Timer,
    },
    {
      step: '03',
      title: 'Progress',
      subtitle: 'See what you completed and what comes next.',
      description: 'End each session with visual satisfaction. Watch completion percentages update in real-time and review clear daily metrics.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-3">
            Workflow Architecture
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Three steps to effortless momentum
          </p>
          <p className="mt-4 text-slate-300 text-base">
            No complex setups or onboarding fluff. FocusFlow gives you a straightforward workflow designed to get you working in seconds.
          </p>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative rounded-2xl bg-slate-950/80 border border-slate-800 p-8 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Step Number + Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-indigo-500/80 font-mono tracking-tighter">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <h4 className="text-sm font-semibold text-indigo-300 mb-3">
                    {item.subtitle}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connecting arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
