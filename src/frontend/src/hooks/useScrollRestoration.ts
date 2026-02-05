import { useEffect, useRef, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';

/**
 * Manages scroll position restoration for browser back/forward navigation.
 * Records scroll positions per route and restores them on popstate events.
 */
export function useScrollRestoration() {
  const routerState = useRouterState();
  const scrollPositions = useRef<Map<string, number>>(new Map());
  const [isPopstate, setIsPopstate] = useState(false);
  const currentKeyRef = useRef<string>('');

  // Generate a unique key for the current route
  const getRouteKey = () => {
    const { pathname, search, hash } = routerState.location;
    return `${pathname}${search}${hash}`;
  };

  // Save current scroll position before navigation
  useEffect(() => {
    const saveScrollPosition = () => {
      const key = currentKeyRef.current;
      if (key) {
        scrollPositions.current.set(key, window.scrollY);
      }
    };

    // Save scroll position before unload
    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  // Track popstate events (back/forward navigation)
  useEffect(() => {
    const handlePopstate = () => {
      setIsPopstate(true);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  // Handle scroll restoration or save position on route change
  useEffect(() => {
    const newKey = getRouteKey();
    const previousKey = currentKeyRef.current;

    // Save previous position if we had one
    if (previousKey && previousKey !== newKey) {
      scrollPositions.current.set(previousKey, window.scrollY);
    }

    // Update current key
    currentKeyRef.current = newKey;

    // Check if this is a popstate navigation
    if (isPopstate) {
      // Restore saved position for this route
      const savedPosition = scrollPositions.current.get(newKey);
      
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition ?? 0);
      });

      // Reset popstate flag after restoration
      setIsPopstate(false);
    }
  }, [routerState.location.pathname, routerState.location.search, routerState.location.hash, isPopstate]);

  return {
    isPopstate,
  };
}
