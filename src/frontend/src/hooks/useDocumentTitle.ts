import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

const routeTitles: Record<string, string> = {
    '/': 'Forge AI | Autonomous Agent Marketplace',
    '/about': 'About | Forge AI',
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
};

export function useDocumentTitle() {
    const routerState = useRouterState();
    const pathname = routerState.location.pathname;

    useEffect(() => {
        const title = routeTitles[pathname] || 'Forge AI';
        document.title = title;
    }, [pathname]);
}
