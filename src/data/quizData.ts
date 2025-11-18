export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which NIST function focuses on identifying cybersecurity risks to systems, assets, and data?',
    options: [
      'Protect',
      'Detect',
      'Identify',
      'Respond'
    ],
    correctAnswer: 2,
    explanation: 'The "Identify" function of the NIST Cybersecurity Framework helps organizations understand their cybersecurity risks to systems, assets, data, and capabilities.',
    category: 'Risk Management'
  },
  {
    id: 'q2',
    question: 'What does the MITRE ATT&CK framework primarily provide?',
    options: [
      'A compliance checklist',
      'A knowledge base of adversary tactics and techniques',
      'An antivirus software',
      'A network monitoring tool'
    ],
    correctAnswer: 1,
    explanation: 'MITRE ATT&CK is a globally accessible knowledge base of adversary tactics and techniques based on real-world observations.',
    category: 'Threat Intelligence'
  },
  {
    id: 'q3',
    question: 'Which phase of the Incident Response lifecycle comes immediately after "Detection and Analysis"?',
    options: [
      'Preparation',
      'Containment, Eradication, and Recovery',
      'Post-Incident Activity',
      'Identification'
    ],
    correctAnswer: 1,
    explanation: 'According to NIST SP 800-61, after Detection and Analysis, the next phase is Containment, Eradication, and Recovery.',
    category: 'Incident Response'
  },
  {
    id: 'q4',
    question: 'Which of the following is NOT part of the OWASP Top 10 (2021)?',
    options: [
      'Injection',
      'Broken Access Control',
      'DDoS Attacks',
      'Security Misconfiguration'
    ],
    correctAnswer: 2,
    explanation: 'DDoS Attacks are not part of the OWASP Top 10 web application security risks. The OWASP Top 10 focuses on application-level vulnerabilities.',
    category: 'Application Security'
  },
  {
    id: 'q5',
    question: 'What is a core principle of Zero Trust Architecture?',
    options: [
      'Trust everyone inside the network perimeter',
      'Never trust, always verify',
      'Only verify external users',
      'Trust once, verify never'
    ],
    correctAnswer: 1,
    explanation: 'Zero Trust operates on the principle of "never trust, always verify," requiring authentication and authorization for every access request.',
    category: 'Cloud Security'
  },
  {
    id: 'q6',
    question: 'In the context of risk management, what does "likelihood" refer to?',
    options: [
      'The cost of implementing security controls',
      'The probability that a threat will exploit a vulnerability',
      'The severity of impact when an incident occurs',
      'The number of vulnerabilities in a system'
    ],
    correctAnswer: 1,
    explanation: 'Likelihood refers to the probability or chance that a specific threat will exploit a particular vulnerability.',
    category: 'Risk Management'
  },
  {
    id: 'q7',
    question: 'Which security testing method involves analyzing source code without executing it?',
    options: [
      'Dynamic Application Security Testing (DAST)',
      'Penetration Testing',
      'Static Application Security Testing (SAST)',
      'Runtime Application Self-Protection (RASP)'
    ],
    correctAnswer: 2,
    explanation: 'SAST (Static Application Security Testing) analyzes source code or compiled versions without executing the program.',
    category: 'Application Security'
  },
  {
    id: 'q8',
    question: 'What is the primary purpose of Security Information and Event Management (SIEM)?',
    options: [
      'To encrypt sensitive data',
      'To centralize log collection and provide real-time analysis',
      'To perform vulnerability scanning',
      'To manage user passwords'
    ],
    correctAnswer: 1,
    explanation: 'SIEM systems centralize the collection of security logs and events, providing real-time analysis, correlation, and alerting.',
    category: 'Threat Intelligence'
  },
  {
    id: 'q9',
    question: 'Which cloud service model provides the most control over the underlying infrastructure?',
    options: [
      'Software as a Service (SaaS)',
      'Platform as a Service (PaaS)',
      'Infrastructure as a Service (IaaS)',
      'Function as a Service (FaaS)'
    ],
    correctAnswer: 2,
    explanation: 'IaaS provides the most control as customers manage operating systems, applications, and middleware, while the provider manages the physical infrastructure.',
    category: 'Cloud Security'
  },
  {
    id: 'q10',
    question: 'What is the primary goal of digital forensics in incident response?',
    options: [
      'To prevent future attacks',
      'To collect, preserve, and analyze evidence for investigation',
      'To restore normal operations quickly',
      'To notify law enforcement'
    ],
    correctAnswer: 1,
    explanation: 'Digital forensics focuses on the proper collection, preservation, and analysis of digital evidence to support investigation and potential legal proceedings.',
    category: 'Incident Response'
  }
];
