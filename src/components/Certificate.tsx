import { useProgress } from '../contexts/useProgress';
import { Award, Download, Calendar, User } from 'lucide-react';
import { useRef } from 'react';

export default function Certificate() {
  const { progress } = useProgress();
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    // For now, we'll create a simple download prompt
    alert('Certificate download feature: In a production app, this would generate a PDF certificate using a library like jsPDF or html2canvas.');
  };

  const handlePrint = () => {
    window.print();
  };

  if (!progress.certificateEarned) {
    return (
      <div className="glass-card p-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-dark-elevated rounded-full">
          <Award className="w-16 h-16 text-gray-500" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Certificate Not Yet Earned</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complete all 5 training modules and pass the quiz with 80% or higher to earn your
            Cybersecurity Risk Management Certificate.
          </p>
        </div>
        <div className="bg-dark-elevated border border-dark-border rounded-lg p-6 max-w-md mx-auto">
          <h3 className="font-medium text-white mb-4">Requirements:</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className={progress.completedModules.length >= 5 ? 'text-accent-success' : 'text-gray-500'}>
                {progress.completedModules.length >= 5 ? '✓' : '○'}
              </span>
              Complete all 5 training modules ({progress.completedModules.length}/5)
            </li>
            <li className="flex items-center gap-2">
              <span className={
                progress.quizResults.some(r => (r.score / r.totalQuestions) * 100 >= 80)
                  ? 'text-accent-success'
                  : 'text-gray-500'
              }>
                {progress.quizResults.some(r => (r.score / r.totalQuestions) * 100 >= 80) ? '✓' : '○'}
              </span>
              Pass quiz with 80%+ score
            </li>
          </ul>
        </div>
      </div>
    );
  }

  const certificateDate = progress.certificateDate 
    ? new Date(progress.certificateDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-dark-elevated hover:bg-dark-border text-white rounded-lg transition-colors"
          aria-label="Print certificate"
        >
          Print
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg transition-colors"
          aria-label="Download certificate"
        >
          <Download className="w-5 h-5" aria-hidden="true" />
          Download PDF
        </button>
      </div>

      {/* Certificate */}
      <div 
        ref={certificateRef}
        className="glass-card p-12 space-y-8 certificate-print"
        style={{ minHeight: '600px' }}
      >
        {/* Certificate Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full">
            <Award className="w-16 h-16 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Certificate of Completion
            </h1>
            <p className="text-gray-400">Dark Wolf Solutions</p>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-300">This is to certify that</p>
            
            <div className="py-4 border-b-2 border-accent-primary">
              <div className="flex items-center justify-center gap-3">
                <User className="w-6 h-6 text-accent-primary" aria-hidden="true" />
                <p className="text-3xl font-bold text-white">
                  [Your Name]
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 pt-4">
              has successfully completed the comprehensive training program
            </p>

            <div className="py-6">
              <h2 className="text-2xl font-bold gradient-text mb-3">
                Advanced Cybersecurity Risk Management
              </h2>
              <p className="text-gray-400">Interactive Training Dashboard</p>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-dark-elevated/50 rounded-lg p-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Modules Completed</h3>
              <ul className="space-y-1 text-sm text-white">
                <li>• Cyber Risk Management</li>
                <li>• Threat Analysis & Intelligence</li>
                <li>• Incident Response & Forensics</li>
                <li>• Secure Coding & App Security</li>
                <li>• Cloud Security & Zero Trust</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">Achievement Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent-primary" aria-hidden="true" />
                  <span className="text-white">{certificateDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-success" aria-hidden="true" />
                  <span className="text-white">
                    Quiz Score: {
                      progress.quizResults.length > 0
                        ? `${Math.max(...progress.quizResults.map(r => (r.score / r.totalQuestions) * 100)).toFixed(0)}%`
                        : 'N/A'
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks Reference */}
          <div className="text-center space-y-3 pt-4">
            <p className="text-sm text-gray-400">
              Training based on industry-standard frameworks including:
            </p>
            <p className="text-xs text-gray-500">
              NIST Cybersecurity Framework • MITRE ATT&CK • OWASP Top 10 • NIST SP 800-61 • ISO/IEC 27005
            </p>
          </div>
        </div>

        {/* Certificate Footer */}
        <div className="border-t border-dark-border pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="border-t-2 border-gray-500 w-48 mx-auto mb-2"></div>
              <p className="text-sm font-medium text-white">Michael Hoch</p>
              <p className="text-xs text-gray-400">Course Developer</p>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-gray-500 w-48 mx-auto mb-2"></div>
              <p className="text-sm font-medium text-white">Dark Wolf Solutions</p>
              <p className="text-xs text-gray-400">Training Provider</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
