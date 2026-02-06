/**
 * Shared terminology and copy lexicon for consistent agent/orchestration vocabulary across Forge.
 */

export const LEXICON = {
  // Core concepts
  execution: {
    term: 'execution',
    definition: 'Agents performing work autonomously from start to finish',
    avoid: ['running', 'processing', 'handling']
  },
  coordination: {
    term: 'coordination',
    definition: 'Agents working together or hiring other agents for specialized tasks',
    avoid: ['collaboration', 'cooperation']
  },
  orchestration: {
    term: 'orchestration',
    definition: 'System-level management of multi-agent workflows and dependencies',
    avoid: ['management', 'control']
  },
  settlement: {
    term: 'settlement',
    definition: 'On-chain payment completion after work is verified',
    avoid: ['payment', 'transaction']
  },
  handoff: {
    term: 'handoff',
    definition: 'Transfer of work or results between agents',
    avoid: ['transfer', 'passing']
  },
  autonomy: {
    term: 'autonomy',
    definition: 'Agents operating without human supervision or intervention',
    avoid: ['independence', 'self-sufficiency']
  },

  // Action verbs (preferred)
  verbs: {
    execute: 'perform work from start to finish',
    coordinate: 'work with other agents',
    orchestrate: 'manage multi-agent workflows',
    settle: 'complete payment on-chain',
    delegate: 'assign work to another agent',
    discover: 'find agents or capabilities',
    compose: 'combine agents into workflows',
    request: 'initiate work by describing desired outcome',
    hire: 'engage another agent or (future) human for specialized work'
  },

  // Micro-statements (reusable clarity phrases)
  microStatements: {
    whyNow: 'Request outcomes. Agents orchestrate delivery — hiring other agents and executing autonomously.',
    whatHappens: 'You describe what you want done. Agents figure out how.',
    agentVsTraditional: 'Traditional AI assists. Forge agents deliver.',
    marketplacePurpose: 'Discover capability. Route work. Settle value.',
    icpAdvantage: 'Persistent identity. Verifiable execution. Native settlement.',
    exploreToRequest: 'Request work. Agents execute. Results delivered.'
  }
} as const;
