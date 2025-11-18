// App State Management
const appState = {
    currentSection: 'dashboard',
    completedModules: [],
    quizScore: 0,
    assessmentsCompleted: 0,
    trainingTime: 0,
    achievements: [],
    startTime: null
};

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateDashboard();
    startTrainingTimer();
    initializeNavigation();
    initializeSliders();
});

// Navigation
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });
}

function navigateToSection(section) {
    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');

    // Update content sections
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');

    appState.currentSection = section;
    
    // Update progress when viewing progress section
    if (section === 'progress') {
        updateProgressSection();
    }
}

// Initialize Sliders
function initializeSliders() {
    const likelihoodSlider = document.getElementById('likelihood');
    const impactSlider = document.getElementById('impact');
    
    if (likelihoodSlider) {
        likelihoodSlider.addEventListener('input', function() {
            updateSliderLabel('likelihood', this.value);
        });
    }
    
    if (impactSlider) {
        impactSlider.addEventListener('input', function() {
            updateSliderLabel('impact', this.value);
        });
    }
}

function updateSliderLabel(type, value) {
    const labels = {
        1: 'Very Low',
        2: 'Low',
        3: 'Moderate',
        4: 'High',
        5: 'Very High'
    };
    
    const likelihoodLabels = {
        1: 'Rare',
        2: 'Unlikely',
        3: 'Possible',
        4: 'Likely',
        5: 'Almost Certain'
    };
    
    if (type === 'likelihood') {
        document.getElementById('likelihoodValue').textContent = `${value} - ${likelihoodLabels[value]}`;
    } else {
        document.getElementById('impactValue').textContent = `${value} - ${labels[value]}`;
    }
}

// Module Management
function openModule(moduleNumber) {
    const moduleContent = getModuleContent(moduleNumber);
    const modal = document.getElementById('moduleModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = moduleContent;
    modal.style.display = 'block';
    
    // Track module completion
    setTimeout(() => {
        completeModule(moduleNumber);
    }, 3000); // Mark as complete after 3 seconds
}

function closeModal() {
    document.getElementById('moduleModal').style.display = 'none';
}

function getModuleContent(moduleNumber) {
    const modules = {
        1: `
            <h2>Module 1: Understanding Cyber Threats</h2>
            <div class="module-content">
                <h3>Introduction</h3>
                <p>Cybersecurity threats are constantly evolving. This module covers the fundamental types of cyber threats organizations face today.</p>
                
                <h3>Key Threat Types</h3>
                <ul>
                    <li><strong>Malware:</strong> Malicious software designed to damage or gain unauthorized access to systems</li>
                    <li><strong>Phishing:</strong> Social engineering attacks that trick users into revealing sensitive information</li>
                    <li><strong>Ransomware:</strong> Malware that encrypts data and demands payment for decryption</li>
                    <li><strong>DDoS Attacks:</strong> Overwhelming systems with traffic to make them unavailable</li>
                    <li><strong>Insider Threats:</strong> Security risks from within the organization</li>
                    <li><strong>Advanced Persistent Threats (APTs):</strong> Sophisticated, targeted attacks over extended periods</li>
                </ul>
                
                <h3>Threat Actors</h3>
                <p>Understanding who might attack your organization:</p>
                <ul>
                    <li>Cybercriminals seeking financial gain</li>
                    <li>Hacktivists pursuing political or social goals</li>
                    <li>Nation-state actors conducting espionage</li>
                    <li>Insider threats (malicious or negligent employees)</li>
                </ul>
                
                <h3>Best Practices</h3>
                <ul>
                    <li>Implement defense-in-depth strategies</li>
                    <li>Maintain updated security awareness training</li>
                    <li>Keep systems and software patched</li>
                    <li>Use multi-factor authentication</li>
                    <li>Monitor for suspicious activities</li>
                </ul>
                
                <button class="btn-primary" onclick="closeModal()">Complete Module</button>
            </div>
        `,
        2: `
            <h2>Module 2: Risk Assessment Methodologies</h2>
            <div class="module-content">
                <h3>Overview</h3>
                <p>Learn systematic approaches to identifying, analyzing, and evaluating cybersecurity risks.</p>
                
                <h3>NIST Risk Management Framework</h3>
                <p>The NIST RMF provides a structured process:</p>
                <ol>
                    <li>Prepare: Essential activities to prepare the organization</li>
                    <li>Categorize: Information systems and data</li>
                    <li>Select: Appropriate security controls</li>
                    <li>Implement: Security controls</li>
                    <li>Assess: Security control effectiveness</li>
                    <li>Authorize: System operation</li>
                    <li>Monitor: Ongoing security state</li>
                </ol>
                
                <h3>ISO 27005</h3>
                <p>International standard for information security risk management:</p>
                <ul>
                    <li>Context establishment</li>
                    <li>Risk assessment (identification, analysis, evaluation)</li>
                    <li>Risk treatment</li>
                    <li>Risk acceptance</li>
                    <li>Risk communication and consultation</li>
                </ul>
                
                <h3>FAIR (Factor Analysis of Information Risk)</h3>
                <p>Quantitative risk assessment framework focusing on:</p>
                <ul>
                    <li>Loss Event Frequency</li>
                    <li>Loss Magnitude</li>
                    <li>Risk measurement in financial terms</li>
                </ul>
                
                <button class="btn-primary" onclick="closeModal()">Complete Module</button>
            </div>
        `
    };
    
    return modules[moduleNumber] || '<p>Module content not available.</p>';
}

function completeModule(moduleNumber) {
    if (!appState.completedModules.includes(moduleNumber)) {
        appState.completedModules.push(moduleNumber);
        
        // Unlock next module
        const nextModule = moduleNumber + 1;
        if (nextModule <= 6) {
            const nextCard = document.querySelector(`[data-module="${nextModule}"]`);
            if (nextCard) {
                const status = nextCard.querySelector('.module-status');
                const btn = nextCard.querySelector('.module-btn');
                status.textContent = '🔓';
                status.setAttribute('data-status', 'unlocked');
                btn.disabled = false;
                btn.textContent = 'Start Module';
                btn.onclick = () => openModule(nextModule);
            }
        }
        
        // Update completed module status
        const currentCard = document.querySelector(`[data-module="${moduleNumber}"]`);
        if (currentCard) {
            const status = currentCard.querySelector('.module-status');
            status.textContent = '✅';
            status.setAttribute('data-status', 'completed');
        }
        
        saveProgress();
        updateDashboard();
        checkAchievements();
    }
}

// Dashboard Updates
function updateDashboard() {
    // Update modules completed
    const modulesCompleted = appState.completedModules.length;
    document.getElementById('modulesCompleted').textContent = `${modulesCompleted}/6`;
    
    // Update quiz score
    document.getElementById('quizScore').textContent = `${appState.quizScore}%`;
    
    // Update assessments
    document.getElementById('assessmentsCompleted').textContent = appState.assessmentsCompleted;
    
    // Update training time
    const minutes = Math.floor(appState.trainingTime / 60);
    document.getElementById('trainingTime').textContent = `${minutes} min`;
    
    // Update user score
    const totalScore = calculateTotalScore();
    document.getElementById('userScore').textContent = `Score: ${totalScore}`;
}

function calculateTotalScore() {
    const moduleScore = (appState.completedModules.length / 6) * 300;
    const quizScoreValue = (appState.quizScore / 100) * 400;
    const assessmentScore = Math.min(appState.assessmentsCompleted * 20, 300);
    return Math.round(moduleScore + quizScoreValue + assessmentScore);
}

// Progress Section Updates
function updateProgressSection() {
    // Calculate overall progress
    const moduleProgress = (appState.completedModules.length / 6) * 100;
    const overallProgress = Math.round((moduleProgress + appState.quizScore + (appState.assessmentsCompleted * 5)) / 3);
    
    // Update circular progress
    const circle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (overallProgress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('overallProgress').textContent = `${Math.round(overallProgress)}%`;
    
    // Update module progress
    document.getElementById('moduleProgress').textContent = `${Math.round(moduleProgress)}%`;
    document.getElementById('moduleProgressBar').style.width = `${moduleProgress}%`;
    
    // Update quiz progress
    document.getElementById('quizProgress').textContent = `${appState.quizScore}%`;
    document.getElementById('quizProgressBar').style.width = `${appState.quizScore}%`;
    
    // Update assessment progress
    const assessmentProgress = Math.min((appState.assessmentsCompleted / 10) * 100, 100);
    document.getElementById('assessmentProgress').textContent = `${appState.assessmentsCompleted} completed`;
    document.getElementById('assessmentProgressBar').style.width = `${assessmentProgress}%`;
    
    updateAchievements();
}

// Achievements
function checkAchievements() {
    // First Steps - Complete first module
    if (appState.completedModules.length >= 1 && !appState.achievements.includes('first-steps')) {
        unlockAchievement('first-steps');
    }
    
    // Knowledge Seeker - Complete all modules
    if (appState.completedModules.length >= 6 && !appState.achievements.includes('knowledge-seeker')) {
        unlockAchievement('knowledge-seeker');
    }
    
    // Risk Master - Complete 5 assessments
    if (appState.assessmentsCompleted >= 5 && !appState.achievements.includes('risk-master')) {
        unlockAchievement('risk-master');
    }
    
    // Perfect Score - Get 100% on quiz
    if (appState.quizScore === 100 && !appState.achievements.includes('perfect-score')) {
        unlockAchievement('perfect-score');
    }
}

function unlockAchievement(achievementId) {
    appState.achievements.push(achievementId);
    saveProgress();
    updateAchievements();
}

function updateAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    const achievements = achievementsGrid.querySelectorAll('.achievement');
    
    achievements.forEach((ach, index) => {
        const achievementIds = ['first-steps', 'knowledge-seeker', 'risk-master', 'perfect-score'];
        if (appState.achievements.includes(achievementIds[index])) {
            ach.classList.remove('locked');
        }
    });
}

// Training Timer
function startTrainingTimer() {
    appState.startTime = Date.now();
    setInterval(() => {
        appState.trainingTime++;
        if (appState.trainingTime % 60 === 0) {
            updateDashboard();
            saveProgress();
        }
    }, 1000);
}

// Utility Functions
function showAbout() {
    alert('Cyber Security Risk Management Training Dashboard\n\nVersion 1.0\n\nThis interactive training platform helps you learn and practice cybersecurity risk management principles.\n\n© 2025 All rights reserved.');
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
        localStorage.removeItem('cybersecurity-progress');
        location.reload();
    }
}

function exportProgress() {
    const progressData = {
        completedModules: appState.completedModules,
        quizScore: appState.quizScore,
        assessmentsCompleted: appState.assessmentsCompleted,
        trainingTime: appState.trainingTime,
        achievements: appState.achievements,
        totalScore: calculateTotalScore(),
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(progressData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cybersecurity-training-progress.json';
    link.click();
}

// Local Storage
function saveProgress() {
    const progressData = {
        completedModules: appState.completedModules,
        quizScore: appState.quizScore,
        assessmentsCompleted: appState.assessmentsCompleted,
        trainingTime: appState.trainingTime,
        achievements: appState.achievements
    };
    localStorage.setItem('cybersecurity-progress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('cybersecurity-progress');
    if (saved) {
        const data = JSON.parse(saved);
        appState.completedModules = data.completedModules || [];
        appState.quizScore = data.quizScore || 0;
        appState.assessmentsCompleted = data.assessmentsCompleted || 0;
        appState.trainingTime = data.trainingTime || 0;
        appState.achievements = data.achievements || [];
        
        // Update UI for completed modules
        appState.completedModules.forEach(moduleNum => {
            const card = document.querySelector(`[data-module="${moduleNum}"]`);
            if (card) {
                const status = card.querySelector('.module-status');
                status.textContent = '✅';
                status.setAttribute('data-status', 'completed');
            }
            
            // Unlock next module
            const nextModule = moduleNum + 1;
            if (nextModule <= 6) {
                const nextCard = document.querySelector(`[data-module="${nextModule}"]`);
                if (nextCard) {
                    const status = nextCard.querySelector('.module-status');
                    const btn = nextCard.querySelector('.module-btn');
                    status.textContent = '🔓';
                    status.setAttribute('data-status', 'unlocked');
                    btn.disabled = false;
                    btn.textContent = 'Start Module';
                    btn.onclick = () => openModule(nextModule);
                }
            }
        });
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('moduleModal');
    if (event.target === modal) {
        closeModal();
    }
};
