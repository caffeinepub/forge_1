import { useEffect, useRef, useCallback } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Smoothly scrolls to top with refined easing and duration.
 * Respects prefers-reduced-motion by using instant scroll when enabled.
 * Cancels cleanly if re-invoked mid-animation.
 */
export function useSmoothScrollToTop(duration = 500) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animationFrameRef = useRef<number | null>(null);

  const scrollToTop = useCallback(() => {
    // Cancel any ongoing animation
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    // If reduced motion is preferred, scroll instantly
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const startPosition = window.scrollY;
    const startTime = performance.now();

    // Refined ease-out cubic easing for smoother deceleration
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const newPosition = startPosition * (1 - easedProgress);
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [duration, prefersReducedMotion]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return scrollToTop;
}

/**
 * Shared helper for smooth section-jump scrolling with sticky header offset.
 * Respects prefers-reduced-motion by using instant scroll when enabled.
 */
export function useSmoothScrollToElement() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }, [prefersReducedMotion]);

  return scrollToElement;
}
