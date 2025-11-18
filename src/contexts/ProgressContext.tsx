import { createContext, useState, useEffect, ReactNode } from 'react';

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  completedAt?: string;
  timeSpent?: number; // in minutes
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  date: string;
  passed: boolean;
}

export interface UserProgress {
  completedModules: ModuleProgress[];
  quizResults: QuizResult[];
  totalTimeSpent: number;
  certificateEarned: boolean;
  certificateDate?: string;
}

interface ProgressContextType {
  progress: UserProgress;
  markModuleComplete: (moduleId: string, timeSpent?: number) => void;
  addQuizResult: (result: QuizResult) => void;
  awardCertificate: () => void;
  resetProgress: () => void;
  isModuleCompleted: (moduleId: string) => boolean;
  getCompletionPercentage: () => number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'cybersecurity-training-progress';

const defaultProgress: UserProgress = {
  completedModules: [],
  quizResults: [],
  totalTimeSpent: 0,
  certificateEarned: false,
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProgress;
    } catch (error) {
      console.error('Failed to load progress:', error);
      return defaultProgress;
    }
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  }, [progress]);

  const markModuleComplete = (moduleId: string, timeSpent = 0) => {
    setProgress((prev) => {
      const existingIndex = prev.completedModules.findIndex(
        (m) => m.moduleId === moduleId
      );

      const newModule: ModuleProgress = {
        moduleId,
        completed: true,
        completedAt: new Date().toISOString(),
        timeSpent,
      };

      const completedModules =
        existingIndex >= 0
          ? prev.completedModules.map((m, i) =>
              i === existingIndex ? newModule : m
            )
          : [...prev.completedModules, newModule];

      return {
        ...prev,
        completedModules,
        totalTimeSpent: prev.totalTimeSpent + timeSpent,
      };
    });
  };

  const addQuizResult = (result: QuizResult) => {
    setProgress((prev) => ({
      ...prev,
      quizResults: [...prev.quizResults, result],
    }));
  };

  const awardCertificate = () => {
    setProgress((prev) => ({
      ...prev,
      certificateEarned: true,
      certificateDate: new Date().toISOString(),
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to reset progress:', error);
    }
  };

  const isModuleCompleted = (moduleId: string): boolean => {
    return progress.completedModules.some(
      (m) => m.moduleId === moduleId && m.completed
    );
  };

  const getCompletionPercentage = (): number => {
    // Assuming 5 modules total (can be made dynamic)
    const totalModules = 5;
    return Math.round((progress.completedModules.length / totalModules) * 100);
  };

  const value: ProgressContextType = {
    progress,
    markModuleComplete,
    addQuizResult,
    awardCertificate,
    resetProgress,
    isModuleCompleted,
    getCompletionPercentage,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
