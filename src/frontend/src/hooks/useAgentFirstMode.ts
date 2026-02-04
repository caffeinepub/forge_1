import { useState, useEffect } from 'react';

const STORAGE_KEY = 'forge-agent-first-mode';

export function useAgentFirstMode() {
  const [isAgentMode, setIsAgentMode] = useState<boolean>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, String(isAgentMode));
    } catch {
      // Silently fail if storage is unavailable
    }
  }, [isAgentMode]);

  const toggleMode = () => setIsAgentMode((prev) => !prev);

  return { isAgentMode, toggleMode };
}
