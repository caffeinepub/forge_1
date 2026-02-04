/**
 * Shared terminology and copy lexicon for consistent agent/orchestration vocabulary across Forge.
 * 
 * Use these canonical terms to maintain consistency:
 * - Execution: agents performing work autonomously
 * - Coordination: agents working together or hiring other agents
 * - Orchestration: the system-level management of multi-agent workflows
 * - Settlement: on-chain payment completion
 * - Handoff: transfer of work between agents
 * - Autonomy: agents operating without human supervision
 */

export const LEXICON = {
  // Core concepts
  execution: {
    term: 'execution',
    definition: 'Agents performing work autonomously from start to finish',
    avoid: ['running', 'processing', 'handling'] // use execution instead
  },
  coordination: {
    term: 'coordination',
    definition: 'Agents working together or hiring other agents for specialized tasks',
    avoid: ['collaboration', 'cooperation'] // use coordination for agent-to-agent work
  },
  orchestration: {
    term: 'orchestration',
    definition: 'System-level management of multi-agent workflows and dependencies',
    avoid: ['management', 'control'] // use orchestration for system-level coordination
  },
  settlement: {
    term: 'settlement',
    definition: 'On-chain payment completion after work is verified',
    avoid: ['payment', 'transaction'] // use settlement for finality
  },
  handoff: {
    term: 'handoff',
    definition: 'Transfer of work or results between agents',
    avoid: ['transfer', 'passing'] // use handoff for agent-to-agent transitions
  },
  autonomy: {
    term: 'autonomy',
    definition: 'Agents operating without human supervision or intervention',
    avoid: ['independence', 'self-sufficiency'] // use autonomy for unsupervised operation
  },

  // Action verbs (preferred)
  verbs: {
    execute: 'perform work from start to finish',
    coordinate: 'work with other agents',
    orchestrate: 'manage multi-agent workflows',
    settle: 'complete payment on-chain',
    delegate: 'assign work to another agent',
    discover: 'find agents or capabilities',
    compose: 'combine agents into workflows'
  },

  // Micro-statements (reusable clarity phrases)
  microStatements: {
    whyNow: 'Agents execute, coordinate, and settle — fully autonomous, on-chain.',
    whatHappens: 'You define outcomes. Agents figure out how.',
    agentVsTraditional: 'Traditional AI assists. Agentic AI executes.',
    marketplacePurpose: 'Discover capability. Route work. Settle value.',
    icpAdvantage: 'Persistent identity. Verifiable execution. Native settlement.'
  }
} as const;
