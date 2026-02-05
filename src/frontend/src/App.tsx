import { ThemeProvider } from 'next-themes';
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import RootLayout from './layouts/RootLayout';
import ForgeHomePage from './pages/ForgeHomePage';
import AboutPage from './pages/AboutPage';
import VisionPage from './pages/VisionPage';
import RoadmapPage from './pages/RoadmapPage';
import DevelopersPage from './pages/DevelopersPage';
import LoginPage from './pages/LoginPage';
import SupportPage from './pages/SupportPage';
import PlaybooksPage from './pages/PlaybooksPage';
import DemoLabPage from './pages/DemoLabPage';
import ExplorePage from './pages/ExplorePage';
import BuildPage from './pages/BuildPage';
import MarketplacePage from './pages/MarketplacePage';
import DocsPage from './pages/DocsPage';
import AgentSelfOnboardingPage from './pages/AgentSelfOnboardingPage';
import CapabilityTaskDrivenAgentsPage from './pages/marketplace/CapabilityTaskDrivenAgentsPage';
import CapabilityMultiAgentCollaborationPage from './pages/marketplace/CapabilityMultiAgentCollaborationPage';
import CapabilityHiringSourcingAgentsPage from './pages/marketplace/CapabilityHiringSourcingAgentsPage';
import CapabilityLongRunningWorkflowsPage from './pages/marketplace/CapabilityLongRunningWorkflowsPage';
import CapabilityHumanInTheLoopControlsPage from './pages/marketplace/CapabilityHumanInTheLoopControlsPage';

// Create root route with layout
const rootRoute = createRootRoute({
    component: RootLayout,
});

// Create page routes
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: ForgeHomePage,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: AboutPage,
});

const visionRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/vision',
    component: VisionPage,
});

const roadmapRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/roadmap',
    component: RoadmapPage,
});

const developersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/developers',
    component: DevelopersPage,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
});

const supportRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/support',
    component: SupportPage,
});

const playbooksRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/playbooks',
    component: PlaybooksPage,
});

const demoLabRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/demo-lab',
    component: DemoLabPage,
});

const exploreRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/explore',
    component: ExplorePage,
});

const buildRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/build',
    component: BuildPage,
});

const marketplaceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace',
    component: MarketplacePage,
});

const docsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/docs',
    component: DocsPage,
});

const agentOnboardingRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/agent-onboarding',
    component: AgentSelfOnboardingPage,
});

// Capability sub-pages
const capabilityTaskDrivenRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace/task-driven-agents',
    component: CapabilityTaskDrivenAgentsPage,
});

const capabilityMultiAgentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace/multi-agent-collaboration',
    component: CapabilityMultiAgentCollaborationPage,
});

const capabilityHiringRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace/hiring-sourcing-agents',
    component: CapabilityHiringSourcingAgentsPage,
});

const capabilityLongRunningRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace/long-running-workflows',
    component: CapabilityLongRunningWorkflowsPage,
});

const capabilityHumanInLoopRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/marketplace/human-in-the-loop-controls',
    component: CapabilityHumanInTheLoopControlsPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
    indexRoute,
    aboutRoute,
    visionRoute,
    roadmapRoute,
    developersRoute,
    loginRoute,
    supportRoute,
    playbooksRoute,
    demoLabRoute,
    exploreRoute,
    buildRoute,
    marketplaceRoute,
    docsRoute,
    agentOnboardingRoute,
    capabilityTaskDrivenRoute,
    capabilityMultiAgentRoute,
    capabilityHiringRoute,
    capabilityLongRunningRoute,
    capabilityHumanInLoopRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export default function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
