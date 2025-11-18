export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  sources: Source[];
  content: string;
}

export interface Source {
  title: string;
  author?: string;
  url?: string;
  year?: number;
  organization?: string;
}

export interface MetricData {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  category?: string;
  [key: string]: string | number | undefined;
}
