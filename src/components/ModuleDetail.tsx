import React from 'react';
import { X, ExternalLink, BookOpen, User, Calendar } from 'lucide-react';
import { TrainingModule } from '../types';
import ReactMarkdown from 'react-markdown';

interface ModuleDetailProps {
  module: TrainingModule;
  onClose: () => void;
}

const ModuleDetail: React.FC<ModuleDetailProps> = ({ module, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass-card max-w-4xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-dark-surface/95 backdrop-blur-sm border-b border-dark-border p-6 flex justify-between items-start z-10">
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">{module.title}</h2>
            <p className="text-gray-400">{module.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark-elevated rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Module Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-accent-primary mb-2">
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">Category</span>
              </div>
              <p className="text-white">{module.category}</p>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-accent-primary mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-white">{module.duration}</p>
            </div>
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-accent-primary mb-2">
                <User className="w-5 h-5" />
                <span className="font-semibold">Difficulty</span>
              </div>
              <p className="text-white">{module.difficulty}</p>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Topics Covered</h3>
            <div className="flex flex-wrap gap-2">
              {module.topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-lg text-accent-primary font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none">
            <div className="text-gray-300 space-y-4">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-6 mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-5 mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold text-accent-primary mt-4 mb-2">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 mb-3 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-3 ml-4">{children}</ul>,
                  li: ({ children }) => <li className="text-gray-300">{children}</li>,
                  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                  code: ({ children }) => <code className="bg-dark-elevated px-2 py-1 rounded text-accent-primary">{children}</code>,
                }}
              >
                {module.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-dark-border pt-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-accent-primary" />
              References & Sources
            </h3>
            <div className="space-y-3">
              {module.sources.map((source, index) => (
                <div key={index} className="glass-card p-4 hover:border-accent-primary/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{source.title}</h4>
                      <div className="text-sm text-gray-400 space-y-1">
                        {source.organization && (
                          <p>Organization: {source.organization}</p>
                        )}
                        {source.author && (
                          <p>Author: {source.author}</p>
                        )}
                        {source.year && (
                          <p>Year: {source.year}</p>
                        )}
                      </div>
                    </div>
                    {source.url && (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 p-2 hover:bg-dark-elevated rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-accent-primary" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-6 border-t border-dark-border">
            <p className="text-gray-400 text-sm">
              Training material developed by Michael Hoch for Dark Wolf Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
