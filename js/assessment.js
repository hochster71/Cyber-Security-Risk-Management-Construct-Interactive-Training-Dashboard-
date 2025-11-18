// Risk Assessment Functions

let riskAssessments = [];

// Calculate Risk Score
function calculateRisk() {
    const assetName = document.getElementById('assetName').value;
    const threatType = document.getElementById('threatType').value;
    const likelihood = parseInt(document.getElementById('likelihood').value);
    const impact = parseInt(document.getElementById('impact').value);
    
    // Validation
    if (!assetName || !threatType) {
        alert('Please fill in all fields before calculating risk.');
        return;
    }
    
    // Calculate risk score (likelihood × impact)
    const riskScore = likelihood * impact;
    
    // Determine risk level
    let riskLevel = '';
    let riskColor = '';
    let riskClass = '';
    
    if (riskScore <= 8) {
        riskLevel = 'LOW';
        riskColor = 'var(--success-color)';
        riskClass = 'risk-low';
    } else if (riskScore <= 15) {
        riskLevel = 'MEDIUM';
        riskColor = 'var(--warning-color)';
        riskClass = 'risk-medium';
    } else {
        riskLevel = 'HIGH';
        riskColor = 'var(--danger-color)';
        riskClass = 'risk-high';
    }
    
    // Get threat type name
    const threatTypes = {
        'malware': 'Malware Attack',
        'phishing': 'Phishing',
        'insider': 'Insider Threat',
        'ddos': 'DDoS Attack',
        'data-breach': 'Data Breach',
        'ransomware': 'Ransomware'
    };
    
    const threatName = threatTypes[threatType] || threatType;
    
    // Display results
    displayRiskResults(assetName, threatName, likelihood, impact, riskScore, riskLevel, riskClass);
    
    // Save to history
    saveRiskAssessment(assetName, threatName, likelihood, impact, riskScore, riskLevel);
    
    // Update app state
    appState.assessmentsCompleted++;
    saveProgress();
    updateDashboard();
    checkAchievements();
}

// Display Risk Results
function displayRiskResults(asset, threat, likelihood, impact, score, level, riskClass) {
    const resultsDiv = document.getElementById('riskResults');
    
    const likelihoodLabels = {
        1: 'Rare',
        2: 'Unlikely',
        3: 'Possible',
        4: 'Likely',
        5: 'Almost Certain'
    };
    
    const impactLabels = {
        1: 'Very Low',
        2: 'Low',
        3: 'Moderate',
        4: 'High',
        5: 'Very High'
    };
    
    resultsDiv.innerHTML = `
        <div class="risk-result">
            <h4>Assessment for: ${asset}</h4>
            <p><strong>Threat Type:</strong> ${threat}</p>
            
            <div class="risk-metrics">
                <p><strong>Likelihood:</strong> ${likelihood} - ${likelihoodLabels[likelihood]}</p>
                <p><strong>Impact:</strong> ${impact} - ${impactLabels[impact]}</p>
            </div>
            
            <div class="risk-score ${riskClass}">
                ${score}
                <div style="font-size: 0.5em; margin-top: 10px;">Risk Score</div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: var(--light-bg); border-radius: var(--border-radius);">
                <h4>Risk Level: ${level}</h4>
                ${getRecommendations(level)}
            </div>
        </div>
    `;
}

// Get Recommendations based on Risk Level
function getRecommendations(level) {
    const recommendations = {
        'LOW': `
            <p><strong>Recommended Actions:</strong></p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Continue monitoring the risk</li>
                <li>Implement standard security controls</li>
                <li>Review periodically (quarterly)</li>
                <li>Document in risk register</li>
            </ul>
        `,
        'MEDIUM': `
            <p><strong>Recommended Actions:</strong></p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Develop mitigation plan within 30 days</li>
                <li>Implement additional security controls</li>
                <li>Increase monitoring frequency</li>
                <li>Assign risk owner for oversight</li>
                <li>Review monthly and after significant changes</li>
            </ul>
        `,
        'HIGH': `
            <p><strong>Recommended Actions (URGENT):</strong></p>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Immediate attention required</li>
                <li>Develop and implement mitigation plan within 7 days</li>
                <li>Consider risk transfer (insurance)</li>
                <li>Implement compensating controls immediately</li>
                <li>Escalate to senior management</li>
                <li>Continuous monitoring required</li>
                <li>Weekly reviews until risk is reduced</li>
            </ul>
        `
    };
    
    return recommendations[level] || '<p>No recommendations available.</p>';
}

// Save Risk Assessment to History
function saveRiskAssessment(asset, threat, likelihood, impact, score, level) {
    const assessment = {
        timestamp: new Date().toISOString(),
        asset: asset,
        threat: threat,
        likelihood: likelihood,
        impact: impact,
        score: score,
        level: level
    };
    
    riskAssessments.unshift(assessment);
    
    // Keep only last 10 assessments
    if (riskAssessments.length > 10) {
        riskAssessments = riskAssessments.slice(0, 10);
    }
    
    // Update history display
    updateAssessmentHistory();
    
    // Save to localStorage
    localStorage.setItem('risk-assessments', JSON.stringify(riskAssessments));
}

// Update Assessment History Display
function updateAssessmentHistory() {
    const historyDiv = document.getElementById('historyList');
    
    if (riskAssessments.length === 0) {
        historyDiv.innerHTML = '<p class="placeholder-text">No assessments yet</p>';
        return;
    }
    
    let html = '';
    riskAssessments.forEach((assessment, index) => {
        const date = new Date(assessment.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        let levelColor = '';
        if (assessment.level === 'LOW') levelColor = 'var(--success-color)';
        else if (assessment.level === 'MEDIUM') levelColor = 'var(--warning-color)';
        else levelColor = 'var(--danger-color)';
        
        html += `
            <div class="history-item">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div style="flex: 1;">
                        <strong>${assessment.asset}</strong>
                        <p style="font-size: 0.9em; color: var(--light-text); margin-top: 3px;">
                            ${assessment.threat}
                        </p>
                        <p style="font-size: 0.85em; color: var(--light-text); margin-top: 3px;">
                            ${formattedDate}
                        </p>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 1.5em; font-weight: bold; color: ${levelColor};">
                            ${assessment.score}
                        </div>
                        <div style="font-size: 0.85em; font-weight: 600; color: ${levelColor};">
                            ${assessment.level}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    historyDiv.innerHTML = html;
}

// Load Risk Assessments from localStorage
function loadRiskAssessments() {
    const saved = localStorage.getItem('risk-assessments');
    if (saved) {
        riskAssessments = JSON.parse(saved);
        updateAssessmentHistory();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadRiskAssessments();
});
