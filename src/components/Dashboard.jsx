import React, { useState } from 'react';
import { 
  initialTasks, 
  activeProject, 
  productivityMetrics 
} from '../data/workspaceData';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Filter, 
  Plus, 
  Flame, 
  TrendingUp,
  Circle,
  MoreVertical,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [taskList, setTaskList] = useState(initialTasks);
  const [filter, setFilter] = useState('All'); // All, Pending, In Progress, Completed

  const toggleTaskStatus = (id) => {
    setTaskList((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus = 
            t.status === 'Completed' ? 'Pending' : 
            t.status === 'Pending' ? 'In Progress' : 'Completed';
          const nextProgress = nextStatus === 'Completed' ? 100 : nextStatus === 'In Progress' ? 50 : 0;
          return { ...t, status: nextStatus, progress: nextProgress };
        }
        return t;
      })
    );
  };

  const filteredTasks = taskList.filter((t) => {
    if (filter === 'All') return true;
    return t.status === filter;
  });

  const completedCount = taskList.filter((t) => t.status === 'Completed').length;
  const overallProgress = Math.round((completedCount / taskList.length) * 100);

  return (
    <div id="demo-dashboard" className="w-full rounded-2xl bg-slate-950 border border-slate-800/90 shadow-2xl shadow-indigo-950/30 overflow-hidden text-left">
      
      {/* Dashboard Top Header Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono text-slate-400 ml-2">FocusFlow App / Workspace</span>
        </div>
        
        {/* Workspace Active Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Interactive Demo Mode</span>
        </div>
      </div>

      {/* Main Workspace Dashboard Content */}
      <div className="p-6 md:p-8 space-y-8">
        
        {/* Greeting & Quick Stats Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              Good morning, Alex <span className="text-xl">👋</span>
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              You have <strong className="text-white">{taskList.length - completedCount} active tasks</strong> scheduled for today’s focus sessions.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Streak Pill */}
            <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
              <Flame className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Daily Streak</div>
                <div className="text-sm font-bold text-white">{productivityMetrics.streakDays} Days 🔥</div>
              </div>
            </div>

            {/* Target Hours Pill */}
            <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-indigo-400" />
              <div>
                <div className="text-xs text-slate-400 font-medium">Focus Hours</div>
                <div className="text-sm font-bold text-white">{productivityMetrics.todayFocusHours}h / {productivityMetrics.targetFocusHours}h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Task Management & Filter */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Header + Filter Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h4 className="text-lg font-bold text-white tracking-tight">Today’s Tasks</h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                  {filteredTasks.length} items
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                {['All', 'Pending', 'In Progress', 'Completed'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      filter === tab
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Task Cards List */}
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {filteredTasks.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => toggleTaskStatus(task.id)}
                    className={`group p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      task.status === 'Completed'
                        ? 'bg-slate-900/40 border-slate-800/60 text-slate-400'
                        : 'bg-slate-900/90 border-slate-800 hover:border-indigo-500/40 text-slate-200 shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <button
                        type="button"
                        aria-label={`Mark ${task.title} as ${task.status === 'Completed' ? 'incomplete' : 'completed'}`}
                        className="focus:outline-none"
                      >
                        {task.status === 'Completed' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        ) : task.status === 'In Progress' ? (
                          <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 shrink-0" />
                        )}
                      </button>

                      <div>
                        <div className={`font-semibold text-sm ${task.status === 'Completed' ? 'line-through text-slate-500' : 'text-white'}`}>
                          {task.title}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                            {task.project}
                          </span>
                          <span>• Est: {task.timeEstimate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar & Status Tag */}
                    <div className="flex items-center gap-4 self-end sm:self-auto">
                      <div className="w-24 sm:w-28 space-y-1">
                        <div className="flex justify-between text-[11px] font-mono text-slate-400">
                          <span>{task.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              task.status === 'Completed'
                                ? 'bg-emerald-400'
                                : task.status === 'In Progress'
                                ? 'bg-amber-400'
                                : 'bg-indigo-500'
                            }`}
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold shrink-0 ${
                          task.status === 'Completed'
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                            : task.status === 'In Progress'
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                            : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            <p className="text-xs text-slate-500 text-center italic">
              💡 Tip: Click on any task card above to test state completion toggling.
            </p>
          </div>

          {/* Right Column: Active Project & Productivity Summary */}
          <div className="space-y-6">
            
            {/* Active Project Card */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Current Sprint
                </span>
                <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-xs font-mono border border-indigo-800/60">
                  Active
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">
                {activeProject.name}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Deadline: <strong className="text-slate-200">{activeProject.deadline}</strong>
              </p>

              {/* Progress bar */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Sprint Completion</span>
                  <span className="font-bold text-indigo-400">{overallProgress}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-500"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Next Milestone:</span>
                  <span className="text-slate-200 font-medium">{activeProject.upcomingMilestone}</span>
                </div>
              </div>
            </div>

            {/* Daily Productivity Summary Card */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h4 className="text-base font-bold text-white">Productivity Summary</h4>
              </div>

              {/* Weekly Trend Mini Bar Visual */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-slate-400">Weekly Focus Hours Trend</div>
                <div className="flex items-end justify-between gap-2 h-20 pt-2">
                  {productivityMetrics.weeklyFocusTrend.map((item) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div
                        className="w-full rounded-t bg-indigo-600/80 hover:bg-indigo-500 transition-colors"
                        style={{ height: `${(item.hours / 6) * 100}%` }}
                        title={`${item.day}: ${item.hours} hrs`}
                      />
                      <span className="text-[10px] font-mono text-slate-400">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Completion Velocity</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  +14% vs last week
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
