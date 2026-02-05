/**
 * Motion profile definitions for section-entry reveals.
 * Provides per-page tuning of timing, easing, and stagger patterns.
 */

export interface MotionProfile {
  duration: number; // in ms
  delay: number; // in ms
  stagger: number; // in ms between items
  easing: string;
  intensity: 'hero' | 'early' | 'subtle';
}

export const motionProfiles = {
  // Explore page profiles - expressive, agent-like
  exploreHero: {
    duration: 900,
    delay: 100,
    stagger: 0,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'hero' as const,
  },
  explorePrimaryPath: {
    duration: 800,
    delay: 200,
    stagger: 0,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'hero' as const,
  },
  exploreQuickStart: {
    duration: 600,
    delay: 100,
    stagger: 80,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'early' as const,
  },
  exploreCategories: {
    duration: 700,
    delay: 150,
    stagger: 100,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'early' as const,
  },
  exploreBottomCta: {
    duration: 800,
    delay: 100,
    stagger: 0,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'subtle' as const,
  },

  // Marketplace page profiles - coordinated, flow-oriented
  marketplaceHero: {
    duration: 900,
    delay: 100,
    stagger: 0,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'hero' as const,
  },
  marketplaceDynamics: {
    duration: 750,
    delay: 150,
    stagger: 120,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'early' as const,
  },
  marketplaceNetworkEffects: {
    duration: 800,
    delay: 100,
    stagger: 150,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'early' as const,
  },
  marketplaceExtensibility: {
    duration: 700,
    delay: 100,
    stagger: 100,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'subtle' as const,
  },
  marketplaceCta: {
    duration: 800,
    delay: 100,
    stagger: 0,
    easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    intensity: 'subtle' as const,
  },
} as const;

export type MotionProfileKey = keyof typeof motionProfiles;
