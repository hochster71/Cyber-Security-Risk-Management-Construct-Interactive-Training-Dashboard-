import React from 'react';
import { Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { MetricData } from '../types';

interface MetricCardProps {
  metric: MetricData;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const getIcon = () => {
    switch (metric.label) {
      case 'Security Score':
        return <Shield className="w-8 h-8 text-accent-primary" />;
      case 'Threats Detected':
        return <AlertTriangle className="w-8 h-8 text-accent-warning" />;
      case 'Vulnerabilities':
        return <AlertTriangle className="w-8 h-8 text-accent-danger" />;
      case 'Compliance Rate':
        return <CheckCircle className="w-8 h-8 text-accent-success" />;
      default:
        return <TrendingUp className="w-8 h-8 text-accent-primary" />;
    }
  };

  const getChangeColor = () => {
    if (metric.label === 'Threats Detected' || metric.label === 'Vulnerabilities') {
      return metric.trend === 'down' ? 'text-accent-success' : 'text-accent-danger';
    }
    return metric.trend === 'up' ? 'text-accent-success' : 'text-accent-danger';
  };

  return (
    <div className="glass-card p-6 hover:border-accent-primary/50 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div>{getIcon()}</div>
        <div className={`flex items-center ${getChangeColor()}`}>
          <TrendingUp className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
          <span className="text-sm font-semibold">{Math.abs(metric.change)}%</span>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
      <p className="text-gray-400 text-sm">{metric.label}</p>
    </div>
  );
};

export default MetricCard;
