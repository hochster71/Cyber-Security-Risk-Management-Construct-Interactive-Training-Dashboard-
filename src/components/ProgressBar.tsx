import { useProgress } from '../contexts/useProgress';
import { CheckCircle, Award, Clock } from 'lucide-react';

export default function ProgressBar() {
  const { progress, getCompletionPercentage } = useProgress();
  const completionPercentage = getCompletionPercentage();
  const completedCount = progress.completedModules.length;
  const totalModules = 5; // This could be dynamic based on trainingModules.length

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Your Progress</h3>
        {progress.certificateEarned && (
          <div className="flex items-center gap-2 text-accent-success" aria-label="Certificate earned">
            <Award className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">Certified</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">
            {completedCount} of {totalModules} modules completed
          </span>
          <span className="font-bold text-accent-primary">{completionPercentage}%</span>
        </div>
        <div 
          className="h-3 bg-dark-elevated rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={completionPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Course completion: ${completionPercentage}%`}
        >
          <div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-500 ease-out"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-success/20 rounded-lg">
            <CheckCircle className="w-5 h-5 text-accent-success" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Completed</p>
            <p className="font-bold text-white">{completedCount}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-primary/20 rounded-lg">
            <Clock className="w-5 h-5 text-accent-primary" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Time Spent</p>
            <p className="font-bold text-white">{Math.round(progress.totalTimeSpent)} min</p>
          </div>
        </div>

        <div className="flex items-center gap-3 col-span-2 md:col-span-1">
          <div className="p-2 bg-accent-secondary/20 rounded-lg">
            <Award className="w-5 h-5 text-accent-secondary" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Quiz Attempts</p>
            <p className="font-bold text-white">{progress.quizResults.length}</p>
          </div>
        </div>
      </div>

      {/* Best Quiz Score */}
      {progress.quizResults.length > 0 && (
        <div className="pt-2 border-t border-dark-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Best Quiz Score</span>
            <span className="font-bold text-accent-success">
              {Math.max(...progress.quizResults.map(r => (r.score / r.totalQuestions) * 100)).toFixed(0)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
