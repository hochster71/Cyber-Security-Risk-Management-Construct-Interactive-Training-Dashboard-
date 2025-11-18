import { useState } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw, AlertCircle } from 'lucide-react';
import { quizQuestions } from '../data/quizData';
import { useProgress } from '../contexts/useProgress';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quizQuestions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addQuizResult, awardCertificate, progress } = useProgress();

  const handleAnswerSelect = (answerIndex: number) => {
    if (!submitted) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = answerIndex;
      setSelectedAnswers(newAnswers);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const score = selectedAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;

    const passed = score >= quizQuestions.length * 0.7; // 70% passing score

    addQuizResult({
      score,
      totalQuestions: quizQuestions.length,
      date: new Date().toISOString(),
      passed,
    });

    // Award certificate if all modules completed and quiz passed with 80%+
    if (passed && score >= quizQuestions.length * 0.8 && progress.completedModules.length >= 5) {
      awardCertificate();
    }

    setSubmitted(true);
    setShowResults(true);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizQuestions.length).fill(-1));
    setShowResults(false);
    setSubmitted(false);
  };

  const calculateScore = () => {
    return selectedAnswers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;
  };

  const getScorePercentage = () => {
    return Math.round((calculateScore() / quizQuestions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = getScorePercentage();
    const passed = percentage >= 70;

    return (
      <div className="space-y-6">
        {/* Results Summary */}
        <div className="glass-card p-8 text-center space-y-6">
          <div className={`inline-flex items-center justify-center p-4 rounded-full ${
            passed ? 'bg-accent-success/20' : 'bg-accent-warning/20'
          }`}>
            {passed ? (
              <Award className="w-16 h-16 text-accent-success" aria-hidden="true" />
            ) : (
              <AlertCircle className="w-16 h-16 text-accent-warning" aria-hidden="true" />
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">
              {passed ? 'Congratulations!' : 'Good Effort!'}
            </h2>
            <p className="text-gray-400">
              {passed 
                ? 'You have passed the cybersecurity assessment!' 
                : 'Keep learning and try again to improve your score.'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div>
              <p className="text-4xl font-bold text-accent-primary">{percentage}%</p>
              <p className="text-sm text-gray-400">Score</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">{score}/{quizQuestions.length}</p>
              <p className="text-sm text-gray-400">Correct Answers</p>
            </div>
          </div>

          {passed && percentage >= 80 && progress.completedModules.length >= 5 && (
            <div className="bg-accent-success/10 border border-accent-success/30 rounded-lg p-4">
              <p className="text-accent-success font-medium">
                🎉 Certificate Earned! Check the Certificate tab to download your achievement.
              </p>
            </div>
          )}

          <button
            onClick={handleRetake}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg font-medium transition-colors"
            aria-label="Retake quiz"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
            Retake Quiz
          </button>
        </div>

        {/* Answer Review */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Review Your Answers</h3>
          {quizQuestions.map((q, index) => {
            const isCorrect = selectedAnswers[index] === q.correctAnswer;
            return (
              <div key={q.id} className="glass-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-accent-success flex-shrink-0 mt-1" aria-label="Correct" />
                  ) : (
                    <XCircle className="w-6 h-6 text-accent-danger flex-shrink-0 mt-1" aria-label="Incorrect" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-white mb-2">
                      {index + 1}. {q.question}
                    </p>
                    <div className="space-y-2 mb-3">
                      {q.options.map((option, optIndex) => (
                        <div
                          key={optIndex}
                          className={`p-3 rounded-lg border ${
                            optIndex === q.correctAnswer
                              ? 'border-accent-success bg-accent-success/10'
                              : optIndex === selectedAnswers[index]
                              ? 'border-accent-danger bg-accent-danger/10'
                              : 'border-dark-border bg-dark-elevated/50'
                          }`}
                        >
                          <p className={`text-sm ${
                            optIndex === q.correctAnswer
                              ? 'text-accent-success font-medium'
                              : optIndex === selectedAnswers[index]
                              ? 'text-accent-danger'
                              : 'text-gray-400'
                          }`}>
                            {option}
                            {optIndex === q.correctAnswer && ' ✓'}
                            {optIndex === selectedAnswers[index] && optIndex !== q.correctAnswer && ' ✗'}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-dark-elevated/50 border border-dark-border rounded-lg p-3">
                      <p className="text-sm text-gray-300">
                        <strong className="text-accent-primary">Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const answersCompleted = selectedAnswers.filter(a => a !== -1).length;

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="glass-card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-accent-primary">
            {answersCompleted} answered
          </span>
        </div>
        <div className="h-2 bg-dark-elevated rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card p-8 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-accent-secondary/20 text-accent-secondary text-xs font-medium rounded-full">
              {question.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">{question.question}</h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-3" role="radiogroup" aria-label="Answer options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-accent-primary bg-accent-primary/10'
                  : 'border-dark-border hover:border-accent-primary/50 bg-dark-elevated'
              }`}
              role="radio"
              aria-checked={selectedAnswers[currentQuestion] === index}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-accent-primary bg-accent-primary'
                    : 'border-gray-500'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-white">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous question"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswers.some(a => a === -1)}
                className="px-6 py-3 bg-accent-success hover:bg-accent-success/80 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Submit quiz"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 text-white rounded-lg font-medium transition-colors"
                aria-label="Next question"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Navigation</h3>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {quizQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`aspect-square rounded-lg font-medium text-sm transition-all ${
                index === currentQuestion
                  ? 'bg-accent-primary text-white'
                  : selectedAnswers[index] !== -1
                  ? 'bg-accent-success/20 text-accent-success'
                  : 'bg-dark-elevated text-gray-400 hover:bg-dark-border'
              }`}
              aria-label={`Go to question ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
