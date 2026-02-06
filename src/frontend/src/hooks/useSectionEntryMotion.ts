import { useEffect, useState, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseSectionEntryMotionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useSectionEntryMotion(options: UseSectionEntryMotionOptions = {}) {
  const [hasEntered, setHasEntered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', triggerOnce = true } = options;

  useEffect(() => {
    // If reduced motion is preferred, mark as entered immediately
    if (prefersReducedMotion) {
      setHasEntered(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: mark as entered immediately if not supported
      setHasEntered(true);
      return;
    }

    // Check if element is already in viewport on mount
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInViewport) {
      setHasEntered(true);
      return;
    }

    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // Failsafe timeout: ensure section becomes visible after 3 seconds
    // This prevents sections from being permanently hidden if observer fails
    const timeoutId = setTimeout(() => {
      setHasEntered(true);
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, hasEntered };
}
