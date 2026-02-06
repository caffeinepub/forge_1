import React, { CSSProperties, ElementType } from 'react';
import { useSectionEntryMotion } from '../hooks/useSectionEntryMotion';
import { motionProfiles, MotionProfileKey } from './sectionEntryProfiles';

interface SectionEntryRevealProps {
  children: React.ReactNode;
  profile: MotionProfileKey;
  className?: string;
  as?: ElementType;
  staggerChildren?: boolean;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reusable wrapper component for section-entry reveal animations.
 * Applies profile-driven timing and CSS-variable tuning while respecting prefers-reduced-motion.
 * Includes failsafe mechanisms to prevent permanent invisibility.
 */
export function SectionEntryReveal({
  children,
  profile,
  className = '',
  as: Component = 'div',
  staggerChildren = false,
  threshold,
  rootMargin,
}: SectionEntryRevealProps) {
  const { ref, hasEntered } = useSectionEntryMotion({ 
    threshold: threshold ?? 0.15,
    rootMargin: rootMargin ?? '0px 0px -10% 0px'
  });
  const motionProfile = motionProfiles[profile];

  const style: CSSProperties = {
    '--motion-duration': `${motionProfile.duration}ms`,
    '--motion-delay': `${motionProfile.delay}ms`,
    '--motion-stagger': `${motionProfile.stagger}ms`,
    '--motion-easing': motionProfile.easing,
  } as CSSProperties;

  const baseClass = staggerChildren ? 'forge-staged-entrance' : 'forge-section-reveal';
  const intensityClass = `forge-motion-${motionProfile.intensity}`;
  const enteredClass = hasEntered ? 'entered' : '';

  return (
    <Component
      ref={ref}
      className={`${baseClass} ${intensityClass} ${enteredClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
