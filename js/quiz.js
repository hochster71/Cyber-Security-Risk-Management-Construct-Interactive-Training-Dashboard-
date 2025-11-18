// Quiz Data
const quizQuestions = [
    {
        question: "What is the primary goal of a cybersecurity risk assessment?",
        options: [
            "To eliminate all security risks",
            "To identify, analyze, and prioritize security risks",
            "To install antivirus software",
            "To create user passwords"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a component of the CIA triad?",
        options: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication"
        ],
        correct: 3
    },
    {
        question: "What does NIST stand for?",
        options: [
            "Network Information Security Technology",
            "National Institute of Standards and Technology",
            "New Internet Security Tools",
            "National Information Systems Training"
        ],
        correct: 1
    },
    {
        question: "Which risk treatment option involves taking action to reduce the likelihood or impact of a risk?",
        options: [
            "Risk Avoidance",
            "Risk Transfer",
            "Risk Mitigation",
            "Risk Acceptance"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of multi-factor authentication (MFA)?",
        options: [
            "To make passwords longer",
            "To add an additional layer of security beyond passwords",
            "To replace all passwords",
            "To create automatic backups"
        ],
        correct: 1
    },
    {
        question: "Which type of attack involves overwhelming a system with traffic to make it unavailable?",
        options: [
            "Phishing",
            "Malware",
            "DDoS (Distributed Denial of Service)",
            "SQL Injection"
        ],
        correct: 2
    },
    {
        question: "What is the first step in incident response?",
        options: [
            "Recovery",
            "Preparation",
            "Containment",
            "Eradication"
        ],
        correct: 1
    },
    {
        question: "Which regulation focuses on protecting personal health information?",
        options: [
            "GDPR",
            "SOX",
            "HIPAA",
            "PCI-DSS"
        ],
        correct: 2
    },
    {
        question: "What is the principle of 'least privilege' in access control?",
        options: [
            "Users should have the minimum access necessary to perform their job",
            "All users should have administrator access",
            "Access should be granted based on seniority",
            "Users should share passwords for convenience"
        ],
        correct: 0
    },
    {
        question: "What is a Zero Trust security model based on?",
        options: [
            "Trusting all internal network traffic",
            "Never trust, always verify",
            "Only trusting executives",
            "Trusting devices but not users"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStartTime = Date.now();
    
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    displayQuestion();
}

// Display Current Question
function displayQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    document.getElementById('questionText').textContent = question.question;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Display options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        
        // Mark if already selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    const nextBtn = document.getElementById('nextBtn');
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = 'Submit Quiz';
    } else {
        nextBtn.textContent = 'Next';
    }
}

// Select Option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === optionIndex) {
            opt.classList.add('selected');
        }
    });
}

// Navigate Questions
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

// Submit Quiz
function submitQuiz() {
    // Check if all questions are answered
    if (userAnswers.length < quizQuestions.length) {
        if (!confirm('You have not answered all questions. Do you want to submit anyway?')) {
            return;
        }
    }
    
    // Calculate score
    let correctAnswers = 0;
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctAnswers++;
        }
    });
    
    const scorePercentage = Math.round((correctAnswers / quizQuestions.length) * 100);
    appState.quizScore = scorePercentage;
    
    // Show results
    displayResults(correctAnswers, scorePercentage);
    
    // Save progress
    saveProgress();
    updateDashboard();
    checkAchievements();
}

// Display Results
function displayResults(correctAnswers, scorePercentage) {
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    document.getElementById('finalScore').textContent = scorePercentage + '%';
    
    // Score label
    let label = '';
    let labelClass = '';
    if (scorePercentage >= 90) {
        label = 'Excellent! Outstanding performance!';
        labelClass = 'success';
    } else if (scorePercentage >= 70) {
        label = 'Great job! You passed the quiz!';
        labelClass = 'success';
    } else if (scorePercentage >= 50) {
        label = 'Good effort! Review the material and try again.';
        labelClass = 'warning';
    } else {
        label = 'Keep learning! Review the modules and retake the quiz.';
        labelClass = 'danger';
    }
    
    const scoreLabel = document.getElementById('scoreLabel');
    scoreLabel.textContent = label;
    scoreLabel.className = 'score-label ' + labelClass;
    
    // Detailed results
    const resultsDetails = document.getElementById('resultsDetails');
    resultsDetails.innerHTML = `
        <h4>Quiz Summary</h4>
        <p><strong>Correct Answers:</strong> ${correctAnswers} out of ${quizQuestions.length}</p>
        <p><strong>Score:</strong> ${scorePercentage}%</p>
        <p><strong>Pass Mark:</strong> 70%</p>
        <p><strong>Status:</strong> ${scorePercentage >= 70 ? '<span style="color: var(--success-color)">PASSED ✓</span>' : '<span style="color: var(--danger-color)">NOT PASSED ✗</span>'}</p>
        
        <h4 style="margin-top: 20px;">Question Review</h4>
        <div class="question-review">
            ${generateQuestionReview()}
        </div>
    `;
}

// Generate Question Review
function generateQuestionReview() {
    let html = '';
    
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        html += `
            <div class="review-item" style="margin-bottom: 15px; padding: 15px; background: var(--light-bg); border-radius: var(--border-radius); border-left: 4px solid ${isCorrect ? 'var(--success-color)' : 'var(--danger-color)'};">
                <p style="margin-bottom: 8px;"><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p style="color: ${isCorrect ? 'var(--success-color)' : 'var(--danger-color)'};">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </p>
                ${!isCorrect ? `
                    <p style="font-size: 0.9em; margin-top: 5px;">
                        <strong>Your answer:</strong> ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}<br>
                        <strong>Correct answer:</strong> ${question.options[question.correct]}
                    </p>
                ` : ''}
            </div>
        `;
    });
    
    return html;
}

// Retake Quiz
function retakeQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizIntro').style.display = 'block';
}
