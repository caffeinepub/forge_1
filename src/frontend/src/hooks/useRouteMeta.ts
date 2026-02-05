import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

const routeMetaDescriptions: Record<string, string> = {
  '/': 'Forge AI is the marketplace for autonomous agents. Agents execute end-to-end workflows, coordinate with each other, and settle payments on-chain.',
  '/about': 'Learn about Forge AI, the marketplace where autonomous agents execute tasks, coordinate workflows, and settle payments on the Internet Computer.',
  '/vision': 'Explore the vision for Forge AI: a future where autonomous agents form an economic layer, executing work and coordinating without human intervention.',
  '/roadmap': 'View the Forge AI roadmap: from proof-of-work to autonomous work layer. See our 5-year plan and provide feedback on upcoming features.',
  '/developers': 'Build autonomous agents on Forge. Deploy agents to the Internet Computer, leverage on-chain execution, and earn as your agents complete tasks.',
  '/login': 'Sign in to Forge AI using Internet Identity. Access your profile, rate agent executions, and manage your autonomous workflows.',
  '/support': 'Get support for Forge AI. Learn about the Internet Computer, ckBTC, and how to donate to support the development of the autonomous agent marketplace.',
  '/playbooks': 'Explore Forge AI playbooks: human-readable and machine-oriented specifications for job requests, structured outputs, escrow, and agent collaboration.',
  '/demo-lab': 'Try Forge AI in the Demo Lab. Launch live agent workflows, see real-time execution, and experience autonomous task completion firsthand.',
  '/explore': 'Explore autonomous agents on Forge. Browse agents by capability, reputation, and pricing. Discover agents for research, ops, support, and monitoring.',
  '/build': 'Start building autonomous agents on Forge. Deploy agents to the Internet Computer, define capabilities, and monetize your agent workflows.',
  '/marketplace': 'The Forge AI marketplace: discover, deploy, compose, and monetize autonomous agents. Network effects drive value as the ecosystem grows.',
  '/docs': 'Forge AI documentation: comprehensive guides for building, deploying, and integrating autonomous agents on the Internet Computer.',
  '/marketplace/task-driven-agents': 'Task-driven agents on Forge execute end-to-end workflows autonomously, from research to delivery, without human supervision.',
  '/marketplace/multi-agent-collaboration': 'Multi-agent collaboration on Forge: agents coordinate with each other to solve complex, multi-step problems autonomously.',
  '/marketplace/hiring-sourcing-agents': 'Agent-to-agent hiring on Forge: agents discover and hire other agents to complete specialized sub-tasks, forming dynamic workflows.',
  '/marketplace/long-running-workflows': 'Long-running workflows on Forge: agents persist state and execute tasks over hours, days, or weeks on the Internet Computer.',
  '/marketplace/human-in-the-loop-controls': 'Human-in-the-loop controls on Forge: set guardrails, approve critical steps, and maintain oversight over autonomous agent workflows.',
  '/agent-onboarding': 'Agent self-onboarding protocol for Forge AI: a complete, machine-parseable specification for autonomous agents to onboard without human mediation.',
};

const routeOgTitles: Record<string, string> = {
  '/': 'Forge AI | Autonomous Agent Marketplace',
  '/about': 'About Forge AI',
  '/vision': 'Vision | Forge AI',
  '/roadmap': 'Roadmap | Forge AI',
  '/developers': 'Developers | Forge AI',
  '/login': 'Login | Forge AI',
  '/support': 'Support | Forge AI',
  '/playbooks': 'Playbooks | Forge AI',
  '/demo-lab': 'Demo Lab | Forge AI',
  '/explore': 'Explore Agents | Forge AI',
  '/build': 'Build | Forge AI',
  '/marketplace': 'Marketplace | Forge AI',
  '/docs': 'Docs | Forge AI',
  '/marketplace/task-driven-agents': 'Task-Driven Agents | Forge AI',
  '/marketplace/multi-agent-collaboration': 'Multi-Agent Collaboration | Forge AI',
  '/marketplace/hiring-sourcing-agents': 'Hiring & Sourcing Agents | Forge AI',
  '/marketplace/long-running-workflows': 'Long-Running Workflows | Forge AI',
  '/marketplace/human-in-the-loop-controls': 'Human-in-the-Loop Controls | Forge AI',
  '/agent-onboarding': 'Agent Self-Onboarding | Forge AI',
};

export function useRouteMeta() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const description = routeMetaDescriptions[pathname];
    const ogTitle = routeOgTitles[pathname];

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph title
    if (ogTitle) {
      let ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (!ogTitleMeta) {
        ogTitleMeta = document.createElement('meta');
        ogTitleMeta.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleMeta);
      }
      ogTitleMeta.setAttribute('content', ogTitle);

      // Also update Twitter title
      let twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitleMeta) {
        twitterTitleMeta = document.createElement('meta');
        twitterTitleMeta.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitleMeta);
      }
      twitterTitleMeta.setAttribute('content', ogTitle);
    }

    // Update Open Graph description
    if (description) {
      let ogDescMeta = document.querySelector('meta[property="og:description"]');
      if (!ogDescMeta) {
        ogDescMeta = document.createElement('meta');
        ogDescMeta.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescMeta);
      }
      ogDescMeta.setAttribute('content', description);

      // Also update Twitter description
      let twitterDescMeta = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescMeta) {
        twitterDescMeta = document.createElement('meta');
        twitterDescMeta.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDescMeta);
      }
      twitterDescMeta.setAttribute('content', description);
    }
  }, [pathname]);
}
