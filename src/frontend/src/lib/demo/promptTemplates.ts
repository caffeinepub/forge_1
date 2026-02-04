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

// Category templates
export const categoryTemplates: PromptTemplate[] = [
  {
    id: 'research-reporting',
    title: 'Research & Reporting',
    description: 'Launch workflows that analyze data sources and generate structured reports with insights',
    prompt: 'Analyze competitor pricing strategies and generate a comprehensive market intelligence report',
    templateType: 'research',
  },
  {
    id: 'platform-ops',
    title: 'Platform Operations',
    description: 'Execute monitoring workflows that assess system health and produce operational insights',
    prompt: 'Monitor system health metrics and generate an incident triage report with actionable insights',
    templateType: 'ops',
  },
  {
    id: 'customer-support',
    title: 'Customer Support',
    description: 'Run analysis workflows that process support data and deliver sentiment summaries',
    prompt: 'Analyze recent support tickets and generate a summary report with sentiment analysis',
    templateType: 'support',
  },
  {
    id: 'monitoring-alerts',
    title: 'Monitoring & Alerts',
    description: 'Deploy continuous tracking workflows that watch metrics and trigger threshold alerts',
    prompt: 'Monitor Bitcoin price and alert me when it drops by 5%',
    templateType: 'watcher',
  },
];

// Featured job templates
export const featuredTemplates: PromptTemplate[] = [
  {
    id: 'weekly-competitor-scanner',
    title: 'Weekly Competitor Scanner',
    description: 'Executes competitive intelligence workflow, outputs pricing and feature comparison',
    prompt: 'Scan top 5 competitors weekly and generate a comprehensive pricing and feature comparison report',
    templateType: 'research',
  },
  {
    id: 'incident-triage-agent',
    title: 'Incident Triage & Insight Report',
    description: 'Runs system monitoring workflow, delivers incident classification and resolution steps',
    prompt: 'Monitor production systems and generate incident triage reports with severity classification and resolution recommendations',
    templateType: 'ops',
  },
  {
    id: 'dao-ops-agent',
    title: 'DAO Ops Agent',
    description: 'Executes governance tracking workflow, produces voting pattern analysis and insights',
    prompt: 'Track DAO governance proposals and generate weekly operational insights with voting patterns and community sentiment',
    templateType: 'ops',
  },
  {
    id: 'support-ticket-summary',
    title: 'Support Ticket Summary Agent',
    description: 'Runs ticket analysis workflow, outputs sentiment scores and priority recommendations',
    prompt: 'Analyze support ticket queue and generate daily summary with sentiment analysis and priority recommendations',
    templateType: 'support',
  },
  {
    id: 'market-intelligence-agent',
    title: 'Market Intelligence Agent',
    description: 'Executes market monitoring workflow, delivers trend analysis and actionable insights',
    prompt: 'Monitor market trends across multiple sources and generate weekly intelligence reports with actionable insights',
    templateType: 'research',
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
  return [...categoryTemplates, ...featuredTemplates, ...surveyTemplates].find(t => t.id === id);
}

// Helper to detect template type from prompt keywords
export function detectTemplateType(prompt: string): 'watcher' | 'research' | 'ops' | 'support' {
  const lower = prompt.toLowerCase();
  
  // Watcher keywords (highest priority for backward compatibility)
  if (/monitor|track|watch|alert|notify|threshold|bitcoin|ethereum|price|uptime/i.test(lower)) {
    return 'watcher';
  }
  
  // Research keywords
  if (/research|report|competitor|market|intelligence|analysis|pricing|strategy/i.test(lower)) {
    return 'research';
  }
  
  // Ops keywords
  if (/ops|operational|incident|triage|system|health|production|dao|governance/i.test(lower)) {
    return 'ops';
  }
  
  // Support keywords
  if (/support|ticket|customer|sentiment|moderation|community|priority/i.test(lower)) {
    return 'support';
  }
  
  // Default to research for general queries
  return 'research';
}
