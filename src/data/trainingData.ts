import { TrainingModule, MetricData, ChartDataPoint } from '../types';

export const trainingModules: TrainingModule[] = [
  {
    id: 'rm-001',
    title: 'Introduction to Cyber Risk Management',
    description: 'Comprehensive overview of cybersecurity risk management frameworks and methodologies',
    category: 'Risk Management',
    difficulty: 'Beginner',
    duration: '45 min',
    topics: ['Risk Assessment', 'Threat Modeling', 'Risk Frameworks', 'Compliance'],
    sources: [
      {
        title: 'NIST Cybersecurity Framework',
        organization: 'National Institute of Standards and Technology',
        url: 'https://www.nist.gov/cyberframework',
        year: 2024
      },
      {
        title: 'ISO/IEC 27005:2022 - Information security risk management',
        organization: 'International Organization for Standardization',
        url: 'https://www.iso.org/standard/80585.html',
        year: 2022
      }
    ],
    content: `
# Introduction to Cyber Risk Management

## Overview
Cybersecurity risk management is the process of identifying, assessing, and mitigating risks to information systems and data. This module covers fundamental concepts and industry-standard frameworks.

## Key Concepts

### 1. Risk Assessment
Risk assessment involves identifying potential threats, vulnerabilities, and the impact of security incidents. The formula often used is:
**Risk = Threat × Vulnerability × Impact**

### 2. NIST Framework Core Functions
- **Identify**: Develop understanding of cybersecurity risks to systems, assets, data, and capabilities
- **Protect**: Implement appropriate safeguards to ensure delivery of critical services
- **Detect**: Develop and implement activities to identify cybersecurity events
- **Respond**: Take action regarding detected cybersecurity incidents
- **Recover**: Maintain resilience and restore capabilities impaired during incidents

### 3. Risk Treatment Strategies
- **Accept**: Acknowledge the risk and choose not to take action
- **Avoid**: Eliminate the activity that creates risk
- **Transfer**: Shift risk to a third party (e.g., insurance)
- **Mitigate**: Implement controls to reduce risk likelihood or impact

## Best Practices
1. Continuous monitoring and assessment
2. Regular security audits and reviews
3. Employee training and awareness programs
4. Incident response planning
5. Documentation and compliance maintenance
    `
  },
  {
    id: 'ta-001',
    title: 'Threat Analysis and Intelligence',
    description: 'Advanced techniques for identifying, analyzing, and responding to cybersecurity threats',
    category: 'Threat Analysis',
    difficulty: 'Intermediate',
    duration: '60 min',
    topics: ['Threat Intelligence', 'APT Groups', 'MITRE ATT&CK', 'Indicators of Compromise'],
    sources: [
      {
        title: 'MITRE ATT&CK Framework',
        organization: 'MITRE Corporation',
        url: 'https://attack.mitre.org/',
        year: 2024
      },
      {
        title: 'Cyber Threat Intelligence: A Comprehensive Guide',
        author: 'SANS Institute',
        url: 'https://www.sans.org/white-papers/',
        year: 2023
      }
    ],
    content: `
# Threat Analysis and Intelligence

## Introduction
Cyber threat intelligence (CTI) is evidence-based knowledge about existing or emerging threats that can inform decisions regarding responses to those threats.

## Threat Intelligence Lifecycle

### 1. Planning and Direction
- Define intelligence requirements
- Identify critical assets and threats
- Establish collection priorities

### 2. Collection
- Gather data from multiple sources (OSINT, HUMINT, technical feeds)
- Monitor threat actor activities
- Track indicators of compromise (IOCs)

### 3. Processing
- Normalize and structure collected data
- Remove duplicates and irrelevant information
- Enrich data with context

### 4. Analysis
- Identify patterns and trends
- Assess threat actor capabilities and intentions
- Evaluate potential impact

### 5. Dissemination
- Share intelligence with stakeholders
- Provide actionable recommendations
- Update security controls

## MITRE ATT&CK Framework
The MITRE ATT&CK framework is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.

### Key Tactics:
- Initial Access
- Execution
- Persistence
- Privilege Escalation
- Defense Evasion
- Credential Access
- Discovery
- Lateral Movement
- Collection
- Command and Control
- Exfiltration
- Impact

## Advanced Persistent Threats (APTs)
APTs are sophisticated, sustained cyber attacks where intruders establish long-term presence on networks to steal sensitive data.

### Characteristics:
- Well-funded and organized
- Use of zero-day exploits
- Multi-stage attack campaigns
- Advanced social engineering
- Custom malware development
    `
  },
  {
    id: 'ir-001',
    title: 'Incident Response and Forensics',
    description: 'Master incident response procedures and digital forensics techniques',
    category: 'Incident Response',
    difficulty: 'Advanced',
    duration: '90 min',
    topics: ['IR Planning', 'Digital Forensics', 'Evidence Collection', 'Post-Incident Analysis'],
    sources: [
      {
        title: 'NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide',
        organization: 'National Institute of Standards and Technology',
        url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf',
        year: 2012
      },
      {
        title: 'SANS Incident Response Process',
        organization: 'SANS Institute',
        url: 'https://www.sans.org/incident-response/',
        year: 2024
      }
    ],
    content: `
# Incident Response and Forensics

## Incident Response Lifecycle

### 1. Preparation
- Develop IR policies and procedures
- Establish IR team and roles
- Deploy monitoring and detection tools
- Conduct training and drills

### 2. Detection and Analysis
- Monitor security alerts and logs
- Analyze indicators of compromise
- Determine incident scope and severity
- Document initial findings

### 3. Containment
- **Short-term**: Isolate affected systems
- **Long-term**: Implement temporary fixes
- Preserve evidence for investigation
- Maintain business continuity

### 4. Eradication
- Remove malware and unauthorized access
- Patch vulnerabilities
- Strengthen security controls
- Verify threat elimination

### 5. Recovery
- Restore systems from clean backups
- Verify system integrity
- Implement additional monitoring
- Gradual return to normal operations

### 6. Post-Incident Activity
- Conduct lessons learned review
- Update IR procedures
- Improve security controls
- Share intelligence with community

## Digital Forensics Principles

### Chain of Custody
Maintain detailed documentation of evidence handling to ensure admissibility in legal proceedings.

### Order of Volatility (from most to least volatile):
1. CPU registers and cache
2. RAM contents
3. Network connections
4. Running processes
5. Disk storage
6. Backup media
7. Physical configuration

### Best Practices:
- Create forensic images before analysis
- Use write-blockers to prevent contamination
- Document all actions and findings
- Follow established forensic methodologies
- Maintain evidence integrity
    `
  },
  {
    id: 'sc-001',
    title: 'Secure Coding and Application Security',
    description: 'Learn secure development practices and common vulnerability prevention',
    category: 'Application Security',
    difficulty: 'Intermediate',
    duration: '75 min',
    topics: ['OWASP Top 10', 'Secure SDLC', 'Code Review', 'Security Testing'],
    sources: [
      {
        title: 'OWASP Top 10 Web Application Security Risks',
        organization: 'Open Web Application Security Project',
        url: 'https://owasp.org/www-project-top-ten/',
        year: 2021
      },
      {
        title: 'Secure Software Development Framework (SSDF)',
        organization: 'NIST',
        url: 'https://csrc.nist.gov/publications/detail/sp/800-218/final',
        year: 2022
      }
    ],
    content: `
# Secure Coding and Application Security

## OWASP Top 10 (2021)

### A01:2021 – Broken Access Control
Failures often lead to unauthorized information disclosure, modification, or destruction of data.

**Prevention:**
- Implement proper authentication and authorization
- Deny by default
- Enforce record ownership
- Disable directory listing
- Log access control failures

### A02:2021 – Cryptographic Failures
Formerly known as Sensitive Data Exposure, focusing on failures related to cryptography.

**Prevention:**
- Classify data processed and stored
- Encrypt all sensitive data at rest and in transit
- Use strong, up-to-date cryptographic algorithms
- Proper key management
- Disable caching for sensitive data

### A03:2021 – Injection
Occurs when untrusted data is sent to an interpreter as part of a command or query.

**Prevention:**
- Use parameterized queries (prepared statements)
- Input validation using positive allowlists
- Escape special characters
- Use ORM frameworks
- Implement SSDLC security testing

### A04:2021 – Insecure Design
A new category focusing on risks related to design and architectural flaws.

**Prevention:**
- Establish secure design patterns
- Use threat modeling
- Integrate security requirements into user stories
- Write unit and integration tests for security
- Segregate tier layers on system and network layers

## Secure Development Lifecycle

### 1. Requirements Phase
- Define security requirements
- Identify compliance needs
- Establish security objectives

### 2. Design Phase
- Threat modeling
- Security architecture review
- Define security controls

### 3. Implementation Phase
- Secure coding standards
- Code review
- Static application security testing (SAST)

### 4. Testing Phase
- Dynamic application security testing (DAST)
- Penetration testing
- Security regression testing

### 5. Deployment Phase
- Security configuration review
- Deployment hardening
- Security monitoring setup

### 6. Maintenance Phase
- Patch management
- Continuous monitoring
- Regular security assessments
    `
  },
  {
    id: 'cc-001',
    title: 'Cloud Security and Zero Trust Architecture',
    description: 'Modern cloud security practices and zero trust implementation',
    category: 'Cloud Security',
    difficulty: 'Advanced',
    duration: '80 min',
    topics: ['Cloud Security', 'Zero Trust', 'IAM', 'Container Security'],
    sources: [
      {
        title: 'NIST SP 800-207: Zero Trust Architecture',
        organization: 'National Institute of Standards and Technology',
        url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf',
        year: 2020
      },
      {
        title: 'Cloud Security Alliance - Security Guidance',
        organization: 'Cloud Security Alliance',
        url: 'https://cloudsecurityalliance.org/',
        year: 2024
      }
    ],
    content: `
# Cloud Security and Zero Trust Architecture

## Cloud Security Fundamentals

### Shared Responsibility Model
Understanding the division of security responsibilities between cloud provider and customer:

**Provider Responsibilities:**
- Physical infrastructure
- Hypervisor security
- Network infrastructure
- Facility security

**Customer Responsibilities:**
- Data encryption
- Access management
- Application security
- Network configuration
- Identity and access management

## Zero Trust Architecture Principles

### Core Tenets:
1. **Never Trust, Always Verify**: Verify every access request regardless of location
2. **Least Privilege Access**: Provide minimum necessary access
3. **Assume Breach**: Operate as if the network is already compromised
4. **Verify Explicitly**: Use all available data for authentication and authorization
5. **Micro-segmentation**: Divide network into small zones for granular security

### Implementation Components:

#### 1. Identity and Access Management (IAM)
- Multi-factor authentication (MFA)
- Single sign-on (SSO)
- Privileged access management (PAM)
- Just-in-time access provisioning

#### 2. Device Security
- Device health verification
- Endpoint detection and response (EDR)
- Mobile device management (MDM)
- Patch management

#### 3. Network Security
- Software-defined perimeter (SDP)
- Micro-segmentation
- Encrypted communications (TLS/IPSec)
- Network access control (NAC)

#### 4. Data Security
- Data classification
- Encryption at rest and in transit
- Data loss prevention (DLP)
- Rights management

## Container and Kubernetes Security

### Best Practices:
- Use minimal base images
- Scan images for vulnerabilities
- Implement pod security policies
- Network segmentation
- Secrets management
- Runtime security monitoring
- RBAC implementation
- Regular security audits

## Cloud-Native Security Tools:
- AWS Security Hub / GuardDuty
- Azure Security Center / Sentinel
- Google Cloud Security Command Center
- Kubernetes Policy Engine (OPA)
- Falco for runtime security
    `
  }
];

export const securityMetrics: MetricData[] = [
  {
    label: 'Security Score',
    value: 87,
    change: 5.2,
    trend: 'up'
  },
  {
    label: 'Threats Detected',
    value: 1247,
    change: -12.3,
    trend: 'down'
  },
  {
    label: 'Vulnerabilities',
    value: 23,
    change: -31.4,
    trend: 'down'
  },
  {
    label: 'Compliance Rate',
    value: 94,
    change: 8.1,
    trend: 'up'
  }
];

export const threatTrendData: ChartDataPoint[] = [
  { name: 'Jan', value: 450 },
  { name: 'Feb', value: 520 },
  { name: 'Mar', value: 480 },
  { name: 'Apr', value: 590 },
  { name: 'May', value: 680 },
  { name: 'Jun', value: 720 },
  { name: 'Jul', value: 650 },
  { name: 'Aug', value: 780 },
  { name: 'Sep', value: 890 },
  { name: 'Oct', value: 920 },
  { name: 'Nov', value: 1050 },
  { name: 'Dec', value: 1247 }
];

export const attackTypeData: ChartDataPoint[] = [
  { name: 'Phishing', value: 35, category: 'Social Engineering' },
  { name: 'Malware', value: 28, category: 'Malicious Code' },
  { name: 'DDoS', value: 15, category: 'Availability' },
  { name: 'SQL Injection', value: 12, category: 'Web Application' },
  { name: 'Ransomware', value: 10, category: 'Malicious Code' }
];

export const complianceData: ChartDataPoint[] = [
  { name: 'NIST CSF', value: 95 },
  { name: 'ISO 27001', value: 92 },
  { name: 'SOC 2', value: 88 },
  { name: 'GDPR', value: 97 },
  { name: 'HIPAA', value: 91 }
];
