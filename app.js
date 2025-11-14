// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// PWA Install Prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
    }
});

// Online/Offline Status
function updateOnlineStatus() {
    const statusElement = document.getElementById('onlineStatus');
    if (navigator.onLine) {
        statusElement.textContent = '🟢 Online';
        statusElement.style.color = '#4caf50';
    } else {
        statusElement.textContent = '🔴 Offline';
        statusElement.style.color = '#f44336';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// Local Storage Management
class TrainingData {
    constructor() {
        this.storageKey = 'cyberSecurityTraining';
        this.data = this.loadData();
    }

    loadData() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            completedModules: [],
            quizScore: 0,
            timeSpent: 0,
            achievements: [],
            lastVisit: new Date().toISOString()
        };
    }

    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    completeModule(moduleId) {
        if (!this.data.completedModules.includes(moduleId)) {
            this.data.completedModules.push(moduleId);
            this.saveData();
            this.updateProgress();
            this.checkAchievements();
        }
    }

    setQuizScore(score) {
        this.data.quizScore = score;
        this.saveData();
        this.updateProgress();
        this.checkAchievements();
    }

    updateProgress() {
        const totalModules = 5;
        const completed = this.data.completedModules.length;
        const percentage = Math.round((completed / totalModules) * 100);

        document.getElementById('progressPercent').textContent = percentage;
        document.getElementById('overallProgress').style.width = percentage + '%';
        document.getElementById('completedModules').textContent = completed;
        document.getElementById('quizScore').textContent = this.data.quizScore;

        // Update progress tab
        this.updateProgressTab();
    }

    updateProgressTab() {
        const modules = [
            'Risk Assessment Fundamentals',
            'Threat Intelligence',
            'Security Controls & Mitigation',
            'Compliance & Frameworks',
            'Continuous Monitoring'
        ];

        const progressList = document.querySelectorAll('.progress-item');
        progressList.forEach((item, index) => {
            const badge = item.querySelector('.status-badge');
            if (this.data.completedModules.includes(index + 1)) {
                badge.textContent = 'Complete';
                badge.classList.remove('incomplete');
                badge.classList.add('complete');
            }
        });
    }

    checkAchievements() {
        const achievements = document.querySelectorAll('.achievement');
        
        // First Module
        if (this.data.completedModules.length >= 1 && !this.data.achievements.includes('first')) {
            this.data.achievements.push('first');
            achievements[0].classList.remove('locked');
            achievements[0].classList.add('unlocked');
        }

        // Half Way
        if (this.data.completedModules.length >= 3 && !this.data.achievements.includes('halfway')) {
            this.data.achievements.push('halfway');
            achievements[1].classList.remove('locked');
            achievements[1].classList.add('unlocked');
        }

        // Master
        if (this.data.completedModules.length >= 5 && !this.data.achievements.includes('master')) {
            this.data.achievements.push('master');
            achievements[2].classList.remove('locked');
            achievements[2].classList.add('unlocked');
        }

        // Quiz Expert
        if (this.data.quizScore >= 80 && !this.data.achievements.includes('quiz')) {
            this.data.achievements.push('quiz');
            achievements[3].classList.remove('locked');
            achievements[3].classList.add('unlocked');
        }

        this.saveData();
    }
}

const trainingData = new TrainingData();

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Module Management
function toggleModule(moduleId) {
    const moduleCard = document.querySelector(`.module-card[data-module="${moduleId}"]`);
    const moduleContent = moduleCard.querySelector('.module-content');
    const button = moduleCard.querySelector('.btn-primary');
    
    if (moduleContent.style.display === 'none') {
        moduleContent.style.display = 'block';
        button.textContent = 'Hide Content';
    } else {
        moduleContent.style.display = 'none';
        button.textContent = 'Start Module';
    }
}

function completeModule(moduleId) {
    const moduleCard = document.querySelector(`.module-card[data-module="${moduleId}"]`);
    const status = moduleCard.querySelector('.module-status');
    
    status.textContent = '✅ Complete';
    status.setAttribute('data-status', 'complete');
    
    trainingData.completeModule(moduleId);
    
    // Show completion message
    const button = moduleCard.querySelector('.btn-success');
    button.textContent = '✓ Completed!';
    button.disabled = true;
    button.style.opacity = '0.6';
}

// Quiz Management
const quizAnswers = {
    q1: 'b',  // Identify and prioritize risks
    q2: 'a',  // NIST Cybersecurity Framework
    q3: 'b',  // Indicator of Compromise
    q4: 'b',  // Detective control
    q5: 'c'   // Security Information and Event Management
};

function submitQuiz() {
    let score = 0;
    const totalQuestions = Object.keys(quizAnswers).length;
    
    // Check each answer
    for (const [question, correctAnswer] of Object.entries(quizAnswers)) {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            score++;
        }
    }
    
    const percentage = Math.round((score / totalQuestions) * 100);
    const resultsDiv = document.getElementById('quizResults');
    
    resultsDiv.style.display = 'block';
    
    if (percentage >= 80) {
        resultsDiv.className = 'pass';
        resultsDiv.innerHTML = `
            <h3>🎉 Congratulations!</h3>
            <p>You passed the assessment with a score of ${percentage}%</p>
            <p>You answered ${score} out of ${totalQuestions} questions correctly.</p>
        `;
    } else {
        resultsDiv.className = 'fail';
        resultsDiv.innerHTML = `
            <h3>📚 Keep Learning!</h3>
            <p>Your score: ${percentage}%</p>
            <p>You answered ${score} out of ${totalQuestions} questions correctly.</p>
            <p>Review the training modules and try again to achieve 80% or higher.</p>
        `;
    }
    
    trainingData.setQuizScore(percentage);
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Time Tracking
let startTime = Date.now();
setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 60000);
    document.getElementById('timeSpent').textContent = elapsed;
    trainingData.data.timeSpent = elapsed;
}, 60000); // Update every minute

// Initialize on load
window.addEventListener('load', () => {
    trainingData.updateProgress();
    
    // Restore completed modules state
    trainingData.data.completedModules.forEach(moduleId => {
        const moduleCard = document.querySelector(`.module-card[data-module="${moduleId}"]`);
        if (moduleCard) {
            const status = moduleCard.querySelector('.module-status');
            status.textContent = '✅ Complete';
            status.setAttribute('data-status', 'complete');
            
            const button = moduleCard.querySelector('.btn-success');
            if (button) {
                button.textContent = '✓ Completed!';
                button.disabled = true;
                button.style.opacity = '0.6';
            }
        }
    });
    
    // Restore achievements
    trainingData.checkAchievements();
});
