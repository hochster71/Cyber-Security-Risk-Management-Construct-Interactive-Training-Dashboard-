// Application Constants

export const APP_CONFIG = {
  name: 'Dark Wolf Solutions',
  description: 'Advanced Cybersecurity Training Platform',
  author: 'Michael Hoch',
  version: '1.0.0',
} as const;

export const ROUTES = {
  dashboard: 'dashboard',
  training: 'training',
  analytics: 'analytics',
} as const;

export const CHART_COLORS = [
  '#00d4ff', // accent-primary (cyan)
  '#7c3aed', // accent-secondary (purple)
  '#10b981', // accent-success (green)
  '#f59e0b', // accent-warning (orange)
  '#ef4444', // accent-danger (red)
  '#8b5cf6', // purple variant
  '#06b6d4', // cyan variant
] as const;

export const DIFFICULTY_LEVELS = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export const METRIC_LABELS = {
  securityScore: 'Security Score',
  threatsDetected: 'Threats Detected',
  vulnerabilities: 'Vulnerabilities',
  complianceRate: 'Compliance Rate',
} as const;
