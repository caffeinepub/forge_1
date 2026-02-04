import { useEffect, useState, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseSectionEntryMotionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useSectionEntryMotion(options: UseSectionEntryMotionOptions = {}) {
  const [hasEntered, setHasEntered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { threshold = 0.15, rootMargin = '0px' } = options;

  useEffect(() => {
    // If reduced motion is preferred, mark as entered immediately
    if (prefersReducedMotion) {
      setHasEntered(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          // Once entered, stop observing
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, prefersReducedMotion]);

  return { ref, hasEntered };
}
