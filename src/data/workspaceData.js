// Local product demo data for FocusFlow Workspace Preview

export const initialTasks = [
  {
    id: "task-1",
    title: "Complete Portfolio",
    status: "Completed",
    progress: 100,
    project: "Personal Branding",
    priority: "High",
    dueDate: "Today",
    timeEstimate: "2.5h"
  },
  {
    id: "task-2",
    title: "Practice DSA",
    status: "In Progress",
    progress: 70,
    project: "Skill Mastery",
    priority: "Medium",
    dueDate: "Today",
    timeEstimate: "1.5h"
  },
  {
    id: "task-3",
    title: "Finish Project UI",
    status: "Pending",
    progress: 30,
    project: "FocusFlow App",
    priority: "High",
    dueDate: "Tomorrow",
    timeEstimate: "3.0h"
  },
  {
    id: "task-4",
    title: "Review Design System Specs",
    status: "Completed",
    progress: 100,
    project: "FocusFlow App",
    priority: "Low",
    dueDate: "Yesterday",
    timeEstimate: "1.0h"
  },
  {
    id: "task-5",
    title: "Setup Responsive Breakpoints",
    status: "In Progress",
    progress: 50,
    project: "FocusFlow App",
    priority: "Medium",
    dueDate: "Today",
    timeEstimate: "2.0h"
  }
];

export const activeProject = {
  name: "FocusFlow v1.0 Launch Prep",
  tagline: "High-priority workspace sprint",
  deadline: "Aug 22, 2026",
  completedPercentage: 68,
  totalTasks: 12,
  completedCount: 8,
  upcomingMilestone: "Interactive Timer & Mobile Drawer Audit"
};

export const focusSessionPresets = [
  { id: 'pomodoro', name: 'Deep Work', minutes: 25, label: '25 min' },
  { id: 'short-break', name: 'Quick Rest', minutes: 5, label: '5 min' },
  { id: 'long-break', name: 'Reset Break', minutes: 15, label: '15 min' }
];

export const productivityMetrics = {
  todayFocusHours: 3.8,
  targetFocusHours: 5.0,
  completedTasksToday: 4,
  streakDays: 6,
  weeklyFocusTrend: [
    { day: "Mon", hours: 4.2 },
    { day: "Tue", hours: 5.1 },
    { day: "Wed", hours: 3.8 },
    { day: "Thu", hours: 4.9 },
    { day: "Fri", hours: 5.5 },
    { day: "Sat", hours: 2.0 },
    { day: "Sun", hours: 0.0 }
  ]
};
