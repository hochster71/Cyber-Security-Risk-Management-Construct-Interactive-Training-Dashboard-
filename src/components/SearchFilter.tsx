import { Search, Filter, X } from 'lucide-react';
import { useState } from 'react';

interface SearchFilterProps {
  onSearchChange: (search: string) => void;
  onDifficultyFilter: (difficulty: string[]) => void;
  onCategoryFilter: (categories: string[]) => void;
}

export default function SearchFilter({
  onSearchChange,
  onDifficultyFilter,
  onCategoryFilter,
}: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
  const categories = [
    'Risk Management',
    'Threat Intelligence',
    'Incident Response',
    'Application Security',
    'Cloud Security'
  ];

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleDifficultyToggle = (difficulty: string) => {
    const newDifficulties = selectedDifficulties.includes(difficulty)
      ? selectedDifficulties.filter(d => d !== difficulty)
      : [...selectedDifficulties, difficulty];
    
    setSelectedDifficulties(newDifficulties);
    onDifficultyFilter(newDifficulties);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onCategoryFilter(newCategories);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedDifficulties([]);
    setSelectedCategories([]);
    onSearchChange('');
    onDifficultyFilter([]);
    onCategoryFilter([]);
  };

  const hasActiveFilters = searchTerm || selectedDifficulties.length > 0 || selectedCategories.length > 0;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search training modules..."
            className="w-full pl-11 pr-4 py-3 bg-dark-elevated border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
            aria-label="Search training modules"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
            showFilters
              ? 'bg-accent-primary text-white'
              : 'bg-dark-elevated border border-dark-border text-gray-300 hover:bg-dark-border'
          }`}
          aria-label="Toggle filters"
          aria-expanded={showFilters}
        >
          <Filter className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">Filters</span>
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="px-4 py-3 bg-accent-danger/20 text-accent-danger rounded-lg font-medium hover:bg-accent-danger/30 transition-colors flex items-center gap-2"
            aria-label="Clear all filters"
          >
            <X className="w-5 h-5" aria-hidden="true" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        )}
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="glass-card p-6 space-y-6 animate-fadeIn">
          {/* Difficulty Filter */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => handleDifficultyToggle(difficulty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedDifficulties.includes(difficulty)
                      ? 'bg-accent-primary text-white'
                      : 'bg-dark-elevated border border-dark-border text-gray-300 hover:bg-dark-border'
                  }`}
                  aria-pressed={selectedDifficulties.includes(difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategories.includes(category)
                      ? 'bg-accent-secondary text-white'
                      : 'bg-dark-elevated border border-dark-border text-gray-300 hover:bg-dark-border'
                  }`}
                  aria-pressed={selectedCategories.includes(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="pt-4 border-t border-dark-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {selectedDifficulties.length + selectedCategories.length} filter
                  {selectedDifficulties.length + selectedCategories.length !== 1 ? 's' : ''} active
                </span>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-accent-primary hover:text-accent-primary/80"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
