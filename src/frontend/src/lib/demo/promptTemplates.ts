/**
 * Reusable prompt templates for marketplace discovery, featured jobs, and onboarding survey.
 * Maps user selections to distinct, human-readable task prompts that trigger specific execution templates.
 */

export interface PromptTemplate {
  id: string;
  title: string;
  description?: string;
  prompt: string;
  templateType: 'watcher' | 'research' | 'ops' | 'support';
}

// Category templates - strengthened with clear descriptions
export const categoryTemplates: PromptTemplate[] = [
  {
    id: 'research-reporting',
    title: 'Research & Reporting',
    description: 'Competitive intelligence, market analysis, and strategic research workflows that deliver structured reports with actionable insights',
    prompt: 'Analyze competitor pricing strategies and generate a comprehensive market intelligence report',
    templateType: 'research',
  },
  {
    id: 'platform-ops',
    title: 'Platform Operations',
    description: 'System monitoring, incident detection, and operational health workflows that produce triage reports with resolution guidance',
    prompt: 'Monitor system health metrics and generate an incident triage report with actionable insights',
    templateType: 'ops',
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Ticket analysis, sentiment tracking, and support queue workflows that deliver priority scoring and response recommendations',
    prompt: 'Analyze recent support tickets and generate a summary report with sentiment analysis',
    templateType: 'support',
  },
  {
    id: 'monitoring-alerts',
    title: 'Monitoring & Alerts',
    description: 'Real-time tracking workflows that watch critical metrics and trigger threshold-based alerts when conditions are met',
    prompt: 'Monitor Bitcoin price and alert me when it drops by 5%',
    templateType: 'watcher',
  },
  {
    id: 'content-analysis',
    title: 'Content Analysis',
    description: 'Document processing, content extraction, and insight generation workflows that analyze text and produce structured summaries',
    prompt: 'Analyze blog content across top industry sites and generate a content strategy report with trending topics',
    templateType: 'research',
  },
  {
    id: 'data-enrichment',
    title: 'Data Enrichment',
    description: 'Data validation, enhancement, and quality workflows that clean datasets and append missing information from multiple sources',
    prompt: 'Enrich customer database with company information and generate data quality report',
    templateType: 'ops',
  },
];

// Featured job templates - expanded with more diverse examples
export const featuredTemplates: PromptTemplate[] = [
  {
    id: 'weekly-competitor-scanner',
    title: 'Weekly Competitor Scanner',
    description: 'Executes competitive intelligence workflow, outputs pricing and feature comparison with strategic recommendations',
    prompt: 'Scan top 5 competitors weekly and generate a comprehensive pricing and feature comparison report',
    templateType: 'research',
  },
  {
    id: 'incident-triage-agent',
    title: 'Incident Triage & Insight Report',
    description: 'Runs system monitoring workflow, delivers incident classification with severity levels and resolution steps',
    prompt: 'Monitor production systems and generate incident triage reports with severity classification and resolution recommendations',
    templateType: 'ops',
  },
  {
    id: 'dao-ops-agent',
    title: 'DAO Governance Tracker',
    description: 'Executes governance tracking workflow, produces voting pattern analysis with community sentiment insights',
    prompt: 'Track DAO governance proposals and generate weekly operational insights with voting patterns and community sentiment',
    templateType: 'ops',
  },
  {
    id: 'support-ticket-summary',
    title: 'Support Ticket Summary Agent',
    description: 'Runs ticket analysis workflow, outputs sentiment scores with priority recommendations and response templates',
    prompt: 'Analyze support ticket queue and generate daily summary with sentiment analysis and priority recommendations',
    templateType: 'support',
  },
  {
    id: 'market-intelligence-agent',
    title: 'Market Intelligence Agent',
    description: 'Executes market monitoring workflow, delivers trend analysis with competitive positioning and opportunity identification',
    prompt: 'Monitor market trends across multiple sources and generate weekly intelligence reports with actionable insights',
    templateType: 'research',
  },
  {
    id: 'social-sentiment-tracker',
    title: 'Social Sentiment Tracker',
    description: 'Runs social media monitoring workflow, produces sentiment analysis with brand perception metrics and trending topics',
    prompt: 'Track social media mentions and generate sentiment analysis report with brand health metrics',
    templateType: 'research',
  },
  {
    id: 'security-audit-agent',
    title: 'Security Audit Agent',
    description: 'Executes security scanning workflow, delivers vulnerability assessment with risk scoring and remediation priorities',
    prompt: 'Scan infrastructure for security vulnerabilities and generate audit report with risk assessment',
    templateType: 'ops',
  },
  {
    id: 'customer-feedback-analyzer',
    title: 'Customer Feedback Analyzer',
    description: 'Runs feedback processing workflow, outputs theme extraction with satisfaction scores and improvement recommendations',
    prompt: 'Analyze customer feedback across channels and generate insights report with satisfaction trends',
    templateType: 'support',
  },
  {
    id: 'content-performance-tracker',
    title: 'Content Performance Tracker',
    description: 'Executes content analytics workflow, produces engagement metrics with optimization recommendations and trending formats',
    prompt: 'Track content performance across platforms and generate analytics report with optimization insights',
    templateType: 'research',
  },
  {
    id: 'api-health-monitor',
    title: 'API Health Monitor',
    description: 'Runs API monitoring workflow, delivers uptime analysis with latency metrics and performance degradation alerts',
    prompt: 'Monitor API endpoints and generate health report with uptime metrics and performance insights',
    templateType: 'ops',
  },
];

// Quick-start sample flows for Explore page entry
export const quickStartSamples: PromptTemplate[] = [
  {
    id: 'quick-competitor-research',
    title: 'Research competitors',
    description: 'Analyze competitor strategies and generate market intelligence',
    prompt: 'Analyze competitor pricing strategies and generate a comprehensive market intelligence report',
    templateType: 'research',
  },
  {
    id: 'quick-system-health',
    title: 'Monitor system health',
    description: 'Track infrastructure metrics and detect incidents',
    prompt: 'Monitor system health metrics and generate an incident triage report with actionable insights',
    templateType: 'ops',
  },
  {
    id: 'quick-support-analysis',
    title: 'Analyze support tickets',
    description: 'Process customer feedback and identify priorities',
    prompt: 'Analyze recent support tickets and generate a summary report with sentiment analysis',
    templateType: 'support',
  },
  {
    id: 'quick-price-alert',
    title: 'Track price changes',
    description: 'Monitor asset prices and trigger threshold alerts',
    prompt: 'Monitor Bitcoin price and alert me when it drops by 5%',
    templateType: 'watcher',
  },
];

// Survey choice templates
export const surveyTemplates: PromptTemplate[] = [
  {
    id: 'automate-reporting',
    title: 'Automate reporting',
    prompt: 'Generate automated weekly reports analyzing competitor pricing, market trends, and strategic recommendations',
    templateType: 'research',
  },
  {
    id: 'improve-ops-insights',
    title: 'Improve ops insights',
    prompt: 'Monitor production systems and generate real-time operational insights with incident detection and resolution guidance',
    templateType: 'ops',
  },
  {
    id: 'scale-community-moderation',
    title: 'Scale community moderation',
    prompt: 'Analyze community support tickets and generate moderation insights with sentiment tracking and priority scoring',
    templateType: 'support',
  },
  {
    id: 'track-critical-metrics',
    title: 'Track critical metrics',
    prompt: 'Monitor Bitcoin price continuously and send alerts when threshold changes occur',
    templateType: 'watcher',
  },
];

// Helper to get template by ID
export function getTemplateById(id: string): PromptTemplate | undefined {
  return [...categoryTemplates, ...featuredTemplates, ...surveyTemplates, ...quickStartSamples].find(t => t.id === id);
}

// Helper to detect template type from prompt keywords
export function detectTemplateType(prompt: string): 'watcher' | 'research' | 'ops' | 'support' {
  const lower = prompt.toLowerCase();
  
  // Watcher keywords (highest priority for backward compatibility)
  if (/monitor|track|watch|alert|notify|threshold|bitcoin|ethereum|price|uptime/i.test(lower)) {
    return 'watcher';
  }
  
  // Research keywords
  if (/research|report|competitor|market|intelligence|analysis|pricing|strategy|content|social|sentiment/i.test(lower)) {
    return 'research';
  }
  
  // Ops keywords
  if (/ops|operational|incident|triage|system|health|production|dao|governance|security|audit|api|infrastructure/i.test(lower)) {
    return 'ops';
  }
  
  // Support keywords
  if (/support|ticket|customer|sentiment|moderation|community|priority|feedback/i.test(lower)) {
    return 'support';
  }
  
  // Default to research for general queries
  return 'research';
}
