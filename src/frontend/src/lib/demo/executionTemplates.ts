/**
 * Template-driven demo data generators for distinct execution paths.
 * Produces differentiated activity feeds and results while maintaining compatibility
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
  source: string;
  timestamp: string;
}

export interface DemoData {
  feedItems: FeedItem[];
  result: ResultData;
}

type TemplateType = 'watcher' | 'research' | 'ops' | 'support';

/**
 * Generate research/reporting template execution
 */
function generateResearchTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '🔍', message: 'Scanning competitive landscape' },
    { icon: '📊', message: 'Collecting pricing data from 12 sources' },
    { icon: '🧮', message: 'Analyzing market positioning and trends' },
    { icon: '📈', message: 'Generating strategic insights' },
    { icon: '📝', message: 'Compiling comprehensive report' },
  ];

  const result: ResultData = {
    title: 'Research Complete',
    description: 'Competitive intelligence report generated with 12 data points, 3 strategic recommendations, and market trend analysis across 5 key competitors',
    source: 'Market Intelligence Engine',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate ops/incident triage template execution
 */
function generateOpsTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '🔌', message: 'Connecting to production monitoring systems' },
    { icon: '📡', message: 'Analyzing system health metrics' },
    { icon: '⚠️', message: 'Detecting 2 anomalies requiring attention' },
    { icon: '🎯', message: 'Classifying incident severity levels' },
    { icon: '💡', message: 'Generating resolution recommendations' },
  ];

  const result: ResultData = {
    title: 'Operational Insights Ready',
    description: 'System health analysis complete: 2 incidents triaged (1 high priority, 1 medium), with automated resolution steps and escalation paths identified',
    source: 'Operations Intelligence Platform',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate support/ticket analysis template execution
 */
function generateSupportTemplate(userInput: string): DemoData {
  const timestamp = formatUTCTimestampLong(new Date());
  
  const feedItems: FeedItem[] = [
    { icon: '📬', message: 'Accessing support ticket queue' },
    { icon: '🔤', message: 'Processing 47 tickets with NLP analysis' },
    { icon: '😊', message: 'Running sentiment analysis' },
    { icon: '🎯', message: 'Calculating priority scores' },
    { icon: '📋', message: 'Generating actionable summary' },
  ];

  const result: ResultData = {
    title: 'Support Analysis Complete',
    description: 'Ticket analysis finished: 47 tickets processed, 8 high-priority items identified, average sentiment score 6.8/10, with recommended response templates for top 3 issue categories',
    source: 'Support Intelligence System',
    timestamp,
  };

  return { feedItems, result };
}

/**
 * Generate canonical Watcher monitoring template (preserved for backward compatibility)
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
    { icon: '🧠', message: 'Interpreting monitoring requirements' },
    { icon: '🔍', message: 'Connecting to external data APIs' },
    { icon: '📡', message: `Monitoring ${entity} ${metric}` },
    { icon: '⏱', message: `Threshold configured at ${threshold}` },
  ];

  const result: ResultData = {
    title: 'Alert Triggered',
    description: `${entity} ${metric} threshold reached: ${threshold} change detected at ${timestamp}`,
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
