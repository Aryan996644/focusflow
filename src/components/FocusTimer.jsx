import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Flame, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FocusTimer() {
  const [mode, setMode] = useState('pomodoro'); // pomodoro (25), shortBreak (5), longBreak (15)
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(2);
  const timerRef = useRef(null);

  const presets = {
    pomodoro: { label: 'Focus Session', minutes: 25 },
    shortBreak: { label: 'Short Break', minutes: 5 },
    longBreak: { label: 'Long Break', minutes: 15 },
  };

  const totalSeconds = presets[mode].minutes * 60;
  const progressPercentage = Math.round(((totalSeconds - timeLeft) / totalSeconds) * 100);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            if (mode === 'pomodoro') {
              setCompletedSessions((c) => c + 1);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, mode]);

  const handleModeChange = (newMode) => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(presets[newMode].minutes * 60);
  };

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(presets[mode].minutes * 60);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(presets[mode].minutes * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="timer" className="py-16 md:py-24 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Interactive Micro-Interaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Protect Your Deep Work Sessions
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Test FocusFlow’s built-in focus timer. Select your session duration, start the clock, and minimize distractions.
          </p>
        </div>

        {/* Timer Box Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-md mx-auto rounded-3xl bg-slate-950/90 border border-slate-800 p-8 shadow-2xl shadow-indigo-950/40 relative overflow-hidden"
        >
          {/* Top Mode Selectors */}
          <div className="flex items-center justify-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 mb-8">
            {Object.keys(presets).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => handleModeChange(key)}
                className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                  mode === key
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {presets[key].label}
              </button>
            ))}
          </div>

          {/* Time Display Circle */}
          <div className="relative my-6 flex items-center justify-center">
            {/* SVG Circular Ring */}
            <svg className="w-56 h-56 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="currentColor"
                strokeWidth="6"
                className="text-slate-800"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="currentColor"
                strokeWidth="6"
                className="text-indigo-500 transition-all duration-500 ease-linear"
                fill="transparent"
                strokeDasharray="263.89"
                strokeDashoffset={263.89 - (263.89 * progressPercentage) / 100}
                strokeLinecap="round"
              />
            </svg>

            {/* Centered Time Text */}
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-white tracking-tighter font-mono">
                {formatTime(timeLeft)}
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                {isRunning ? 'Session Active' : timeLeft === 0 ? 'Completed 🎉' : 'Paused / Ready'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={toggleTimer}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white transition-all duration-200 shadow-lg ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20'
                  : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/30'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5" /> Pause Session
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-white" /> Start Session
                </>
              )}
            </button>

            <button
              type="button"
              onClick={resetTimer}
              aria-label="Reset Timer"
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Session Footer Info */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Streak: <strong className="text-white">6 Days</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Today: <strong className="text-white">{completedSessions} Sessions Completed</strong></span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
