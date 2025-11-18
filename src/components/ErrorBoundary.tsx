import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-bg cyber-grid flex items-center justify-center p-4">
          <div className="glass-card p-8 max-w-lg w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent-danger/20 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-accent-danger" />
              </div>
              <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
            </div>
            <p className="text-gray-400 mb-4">
              We apologize for the inconvenience. An error occurred while loading the application.
            </p>
            {this.state.error && (
              <details className="mb-4">
                <summary className="cursor-pointer text-accent-primary hover:text-accent-primary/80 text-sm">
                  Error details
                </summary>
                <pre className="mt-2 p-3 bg-dark-elevated rounded text-xs text-gray-300 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
