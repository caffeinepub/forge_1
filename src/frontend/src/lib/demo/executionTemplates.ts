/**
 * Template-driven demo data generators for distinct execution paths.
 * Produces detailed activity feeds and polished, structured deliverables while maintaining compatibility
 * with the existing ExecutionPanel → ActivityFeed → ResultReveal → RatingStars flow.
 */

import { formatUTCTimestampLong } from '../../utils/time';

interface FeedItem {
  icon: string;
  message: string;
}

interface ResultData {
  title: string;
  description: string;
  deliverable: string;
  source: string;
  timestamp: string;
}

export interface DemoData {
  feedItems: FeedItem[];
  result: ResultData;
}

type TemplateType = 'watcher' | 'research' | 'ops' | 'support';

/**
 * Generate research/reporting template execution with detailed steps and structured deliverable
 */
function generateResearchTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '🔍', message: 'Initializing competitive intelligence pipeline' },
    { icon: '🌐', message: 'Scanning 12 competitor websites and pricing pages' },
    { icon: '📊', message: 'Extracting pricing data, feature matrices, and positioning statements' },
    { icon: '🧮', message: 'Running comparative analysis across product tiers and market segments' },
    { icon: '📈', message: 'Identifying pricing patterns, gaps, and strategic opportunities' },
    { icon: '💡', message: 'Generating strategic recommendations based on competitive positioning' },
    { icon: '📝', message: 'Compiling comprehensive market intelligence report' },
    { icon: '✅', message: 'Report finalized with executive summary and actionable insights' },
  ];

  const deliverable = `
**Executive Summary**
Analyzed 12 competitors across 3 market segments. Identified 3 strategic pricing opportunities and 2 feature gaps.

**Key Findings**
• Average competitor pricing: $49-$199/month across tiers
• 67% offer freemium models; 33% trial-only
• Top differentiator: API access limits (10x variance)
• Emerging trend: Usage-based pricing gaining 23% adoption

**Competitive Positioning**
• Leader segment: Premium features, $150+ pricing
• Challenger segment: Feature parity, aggressive pricing
• Niche segment: Specialized workflows, mid-tier pricing

**Strategic Recommendations**
1. Consider freemium entry tier to capture early-stage users
2. Differentiate on API limits and integration ecosystem
3. Monitor usage-based pricing trend for potential pivot

**Data Sources**
12 competitor websites, 8 pricing pages, 4 feature comparison matrices

**Confidence Score: 94%**
  `.trim();

  const result: ResultData = {
    title: 'Market Intelligence Report Complete',
    description: 'Competitive analysis delivered: 12 competitors analyzed, 3 strategic recommendations, 2 feature gaps identified, 94% confidence score',
    deliverable,
    source: 'Research Intelligence Engine',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate ops/incident triage template execution with detailed steps and structured deliverable
 */
function generateOpsTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '🔌', message: 'Connecting to production monitoring infrastructure' },
    { icon: '📡', message: 'Collecting metrics from 24 service endpoints across 3 regions' },
    { icon: '🔍', message: 'Analyzing latency, error rates, and resource utilization patterns' },
    { icon: '⚠️', message: 'Anomaly detection: 2 incidents flagged for investigation' },
    { icon: '🎯', message: 'Classifying incident severity using historical pattern matching' },
    { icon: '🔧', message: 'Cross-referencing with runbook database for resolution steps' },
    { icon: '💡', message: 'Generating automated resolution recommendations and escalation paths' },
    { icon: '📋', message: 'Compiling operational triage report with priority matrix' },
  ];

  const deliverable = `
**Incident Summary**
2 incidents detected requiring attention. 1 high priority, 1 medium priority.

**High Priority: API Gateway Latency Spike**
• Severity: P1 (High)
• Affected Service: api-gateway-us-east
• Impact: 15% of requests experiencing >2s latency
• Root Cause: Database connection pool exhaustion
• Resolution Steps:
  1. Scale database connection pool from 50 to 100
  2. Enable connection pooling monitoring
  3. Review slow query logs for optimization opportunities
• Estimated Resolution Time: 15 minutes
• Escalation Path: On-call SRE → Engineering Lead

**Medium Priority: Cache Hit Rate Degradation**
• Severity: P2 (Medium)
• Affected Service: content-cache-eu-west
• Impact: Cache hit rate dropped from 92% to 78%
• Root Cause: Cache invalidation pattern change in recent deployment
• Resolution Steps:
  1. Review deployment diff for cache key changes
  2. Adjust TTL settings for affected content types
  3. Monitor hit rate recovery over 1 hour window
• Estimated Resolution Time: 30 minutes
• Escalation Path: On-call SRE

**System Health Metrics**
• Overall uptime: 99.94%
• Average response time: 245ms (within SLA)
• Error rate: 0.12% (within threshold)

**Recommended Actions**
1. Immediate: Address API gateway latency (P1)
2. Short-term: Investigate cache configuration (P2)
3. Long-term: Implement predictive alerting for connection pool exhaustion
  `.trim();

  const result: ResultData = {
    title: 'Operational Triage Report Ready',
    description: 'System health analysis complete: 2 incidents triaged (1 P1, 1 P2), automated resolution steps generated, escalation paths identified',
    deliverable,
    source: 'Operations Intelligence Platform',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate support/ticket analysis template execution with detailed steps and structured deliverable
 */
function generateSupportTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '📬', message: 'Accessing support ticket queue across all channels' },
    { icon: '🔤', message: 'Processing 47 tickets with natural language understanding' },
    { icon: '🏷️', message: 'Categorizing tickets by issue type, product area, and urgency' },
    { icon: '😊', message: 'Running sentiment analysis on customer language and tone' },
    { icon: '🎯', message: 'Calculating priority scores using urgency, impact, and sentiment' },
    { icon: '📊', message: 'Identifying recurring themes and systemic issues' },
    { icon: '💬', message: 'Generating response templates for top 3 issue categories' },
    { icon: '📋', message: 'Compiling actionable support summary with priority queue' },
  ];

  const deliverable = `
**Ticket Analysis Summary**
47 tickets processed. 8 high-priority items identified. Average sentiment: 6.8/10.

**Priority Queue (Top 8)**
1. **Login Issues** (P1) - 5 tickets, avg sentiment 4.2/10
   • Impact: Account access blocked
   • Recommended Response: "We've identified a login issue affecting some accounts. Our team is actively working on a fix. Expected resolution: 2 hours. We'll notify you immediately when resolved."

2. **Payment Processing Errors** (P1) - 3 tickets, avg sentiment 3.8/10
   • Impact: Transaction failures
   • Recommended Response: "We're aware of payment processing issues and have escalated to our payment provider. Your transaction is safe and will be retried automatically. No action needed on your end."

3. **Feature Request: Export Functionality** (P2) - 4 tickets, avg sentiment 7.5/10
   • Impact: Workflow limitation
   • Recommended Response: "Thank you for the export feature request. This is on our roadmap for Q2. We'll notify you when it's available. In the meantime, here's a workaround: [link to guide]."

**Issue Category Breakdown**
• Technical Issues: 18 tickets (38%)
• Feature Requests: 12 tickets (26%)
• Billing Questions: 9 tickets (19%)
• General Inquiries: 8 tickets (17%)

**Sentiment Analysis**
• Positive (8-10): 12 tickets (26%)
• Neutral (6-7): 23 tickets (49%)
• Negative (1-5): 12 tickets (26%)

**Recurring Themes**
• Login reliability concerns (5 mentions)
• Export functionality requests (4 mentions)
• Payment clarity needed (3 mentions)

**Recommended Actions**
1. Immediate: Address login and payment issues (P1)
2. Short-term: Publish export feature timeline
3. Long-term: Improve payment error messaging
  `.trim();

  const result: ResultData = {
    title: 'Support Analysis Complete',
    description: 'Ticket analysis finished: 47 tickets processed, 8 high-priority items identified, sentiment score 6.8/10, response templates generated for top 3 categories',
    deliverable,
    source: 'Support Intelligence System',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate canonical Watcher monitoring template with detailed steps (preserved for backward compatibility)
 */
function generateWatcherTemplate(userInput: string): DemoData {
  const input = userInput.toLowerCase();
  const timestamp = formatUTCTimestampLong(new Date());
  
  let entity = 'Bitcoin';
  let metric = 'price';
  let threshold = '5%';
  
  if (/ethereum|eth/i.test(input)) {
    entity = 'Ethereum';
  } else if (/stock|share/i.test(input)) {
    entity = 'Stock';
  } else if (/website|uptime|server/i.test(input)) {
    entity = 'Website';
    metric = 'uptime';
  }
  
  const thresholdMatch = input.match(/(\d+)%/);
  if (thresholdMatch) {
    threshold = thresholdMatch[0];
  }

  const feedItems: FeedItem[] = [
    { icon: '🧠', message: 'Interpreting monitoring requirements and threshold parameters' },
    { icon: '🔍', message: 'Establishing connection to external data APIs' },
    { icon: '📡', message: `Monitoring ${entity} ${metric} in real-time` },
    { icon: '⏱', message: `Threshold configured: ${threshold} change detection` },
    { icon: '🎯', message: 'Baseline established, continuous monitoring active' },
    { icon: '⚠️', message: `Alert condition met: ${threshold} threshold reached` },
  ];

  const deliverable = `
**Alert Details**
${entity} ${metric} threshold reached.

**Threshold Configuration**
• Monitored Asset: ${entity}
• Metric: ${metric}
• Threshold: ${threshold} change
• Detection Time: ${timestamp}

**Current Status**
• Alert triggered successfully
• Monitoring continues for additional threshold events
• Historical data logged for trend analysis

**Recommended Actions**
1. Review ${entity} ${metric} trend over last 24 hours
2. Assess if threshold adjustment needed
3. Consider setting up additional alerts for related metrics
  `.trim();

  const result: ResultData = {
    title: 'Alert Triggered',
    description: `${entity} ${metric} threshold reached: ${threshold} change detected at ${timestamp}`,
    deliverable,
    source: 'Real-time Monitoring Service',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Main template selector - routes to appropriate execution template
 */
export function generateTemplateDemo(userInput: string, templateType: TemplateType): DemoData {
  switch (templateType) {
    case 'research':
      return generateResearchTemplate(userInput);
    case 'ops':
      return generateOpsTemplate(userInput);
    case 'support':
      return generateSupportTemplate(userInput);
    case 'watcher':
      return generateWatcherTemplate(userInput);
    default:
      return generateResearchTemplate(userInput);
  }
}
