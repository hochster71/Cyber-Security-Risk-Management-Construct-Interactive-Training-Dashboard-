import { useState, lazy, Suspense } from 'react';
import { Shield, Activity, BookOpen, TrendingUp, Brain, Menu, X } from 'lucide-react';
import MetricCard from './components/MetricCard';
import TrainingCard from './components/TrainingCard';
import { 
  trainingModules, 
  securityMetrics, 
  threatTrendData, 
  attackTypeData, 
  complianceData 
} from './data/trainingData';
import { TrainingModule } from './types';

// Lazy load heavy components
const ChartComponent = lazy(() => import('./components/ChartComponent'));
const ModuleDetail = lazy(() => import('./components/ModuleDetail'));

function App() {
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'training' | 'analytics'>('dashboard');

  return (
    <div className="min-h-screen bg-dark-bg cyber-grid">
      {/* Header */}
      <header className="glass-card sticky top-0 z-40 border-b border-dark-border/50" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg" aria-hidden="true">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Dark Wolf Solutions</h1>
                <p className="text-sm text-gray-400">Advanced Cybersecurity Training Platform</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-current={activeTab === 'dashboard' ? 'page' : undefined}
              >
                <Activity className="w-5 h-5" aria-hidden="true" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => setActiveTab('training')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'training'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-current={activeTab === 'training' ? 'page' : undefined}
              >
                <BookOpen className="w-5 h-5" aria-hidden="true" />
                <span>Training</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
                aria-current={activeTab === 'analytics' ? 'page' : undefined}
              >
                <TrendingUp className="w-5 h-5" aria-hidden="true" />
                <span>Analytics</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-dark-elevated rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2 border-t border-dark-border pt-4">
              <button
                onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Activity className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
              <button
                onClick={() => { setActiveTab('training'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'training'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Training</span>
              </button>
              <button
                onClick={() => { setActiveTab('analytics'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-accent-primary/20 text-accent-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Analytics</span>
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8" role="main">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <section className="glass-card p-8 text-center relative overflow-hidden" aria-label="Platform introduction">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 animate-gradient"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full mb-4" aria-hidden="true">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold gradient-text mb-4">
                  AI-Powered Cybersecurity Training
                </h2>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                  Master cybersecurity risk management with our advanced interactive training platform.
                  Comprehensive courses with real-world scenarios, expert insights, and cited references.
                </p>
                <p className="text-sm text-gray-400">
                  Developed by Michael Hoch | Dark Wolf Solutions
                </p>
              </div>
            </section>

            {/* Metrics Grid */}
            <section aria-label="Security metrics overview">
              <h3 className="text-2xl font-bold text-white mb-6">Security Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityMetrics.map((metric, index) => (
                  <MetricCard key={index} metric={metric} />
                ))}
              </div>
            </section>

            {/* Quick Training Access */}
            <section aria-label="Featured training modules">
              <h3 className="text-2xl font-bold text-white mb-6">Featured Training Modules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingModules.slice(0, 3).map((module) => (
                  <TrainingCard
                    key={module.id}
                    module={module}
                    onClick={() => setSelectedModule(module)}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Training Tab */}
        {activeTab === 'training' && (
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h2 className="text-3xl font-bold gradient-text mb-2">Training Modules</h2>
              <p className="text-gray-400">
                Comprehensive cybersecurity training with detailed content and verified sources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingModules.map((module) => (
                <TrainingCard
                  key={module.id}
                  module={module}
                  onClick={() => setSelectedModule(module)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h2 className="text-3xl font-bold gradient-text mb-2">Security Analytics</h2>
              <p className="text-gray-400">
                Real-time insights and visualizations of security metrics and trends
              </p>
            </div>

            {/* Charts Grid */}
            <Suspense fallback={
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
              </div>
            }>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartComponent
                  data={threatTrendData}
                  type="area"
                  title="Threat Trends (12 Months)"
                />
                <ChartComponent
                  data={attackTypeData}
                  type="pie"
                  title="Attack Type Distribution"
                />
                <ChartComponent
                  data={complianceData}
                  type="bar"
                  title="Compliance Framework Status"
                />
                <ChartComponent
                  data={threatTrendData.slice(-6)}
                  type="line"
                  title="Recent Threat Activity"
                />
              </div>
            </Suspense>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="glass-card mt-16 border-t border-dark-border" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent-primary" />
                <span className="font-bold text-white">Dark Wolf Solutions</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced cybersecurity training platform providing comprehensive, AI-powered learning experiences.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Platform Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Interactive AI-powered training</li>
                <li>• Real-time security analytics</li>
                <li>• Comprehensive threat intelligence</li>
                <li>• Industry-standard frameworks</li>
                <li>• Verified source citations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Technologies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Recharts Visualization</li>
                <li>• Framer Motion</li>
                <li>• Modern Web Stack</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-border text-center text-sm text-gray-400">
            <p>© 2024 Dark Wolf Solutions. Developed by Michael Hoch. All rights reserved.</p>
            <p className="mt-2">All training content includes verified sources and industry-standard references.</p>
          </div>
        </div>
      </footer>

      {/* Module Detail Modal */}
      {selectedModule && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
          </div>
        }>
          <ModuleDetail
            module={selectedModule}
            onClose={() => setSelectedModule(null)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
