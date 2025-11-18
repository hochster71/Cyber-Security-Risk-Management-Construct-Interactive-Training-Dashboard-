import React, { memo } from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';
import { TrainingModule } from '../types';

interface TrainingCardProps {
  module: TrainingModule;
  onClick: () => void;
}

const TrainingCard: React.FC<TrainingCardProps> = memo(({ module, onClick }) => {
  const getDifficultyColor = () => {
    switch (module.difficulty) {
      case 'Beginner':
        return 'bg-accent-success/20 text-accent-success';
      case 'Intermediate':
        return 'bg-accent-warning/20 text-accent-warning';
      case 'Advanced':
        return 'bg-accent-danger/20 text-accent-danger';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <button
      onClick={onClick}
      className="glass-card p-6 cursor-pointer hover:border-accent-primary/50 transition-all duration-300 transform hover:scale-102 group text-left w-full"
      aria-label={`Open training module: ${module.title}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-accent-primary" />
            <span className="text-xs text-gray-400 uppercase tracking-wider">{module.category}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
            {module.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{module.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{module.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor()}`}>
              {module.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {module.topics.slice(0, 3).map((topic, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 bg-dark-elevated rounded-full text-gray-300"
          >
            {topic}
          </span>
        ))}
        {module.topics.length > 3 && (
          <span className="text-xs px-2 py-1 text-gray-400">
            +{module.topics.length - 3} more
          </span>
        )}
      </div>
    </button>
  );
});

TrainingCard.displayName = 'TrainingCard';

export default TrainingCard;
