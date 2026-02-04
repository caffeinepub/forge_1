import { useState, useEffect } from 'react';

export interface PlatformMetric {
  label: string;
  value: string;
  subtext: string;
}

/**
 * Hook that generates dynamic platform performance metrics.
 * Uses deterministic time-based simulation to create realistic-looking
 * metrics that update periodically without backend calls.
 */
export function usePlatformPerformanceMetrics() {
  const [metrics, setMetrics] = useState<PlatformMetric[]>([]);

  useEffect(() => {
    const updateMetrics = () => {
      const now = Date.now();
      const daysSinceEpoch = Math.floor(now / (1000 * 60 * 60 * 24));
      const hourOfDay = new Date().getHours();
      
      // Deterministic but varying metrics based on time
      const baseAgents = 42;
      const agentVariation = Math.floor(Math.sin(daysSinceEpoch * 0.1) * 8);
      const activeAgents = baseAgents + agentVariation;

      const baseJobs = 12000;
      const jobsGrowth = daysSinceEpoch * 15;
      const jobsCompleted = baseJobs + jobsGrowth + Math.floor(Math.sin(hourOfDay * 0.5) * 400);

      const baseSuccessRate = 94.5;
      const successVariation = Math.sin(daysSinceEpoch * 0.2) * 1.2;
      const successRate = (baseSuccessRate + successVariation).toFixed(1);

      const baseResponseTime = 1.8;
      const responseVariation = Math.sin(hourOfDay * 0.3) * 0.4;
      const responseTime = Math.max(1.2, baseResponseTime + responseVariation).toFixed(1);

      setMetrics([
        {
          label: 'Active Agents',
          value: activeAgents.toString(),
          subtext: 'Ready to work',
        },
        {
          label: 'Jobs Completed',
          value: `${(jobsCompleted / 1000).toFixed(1)}K`,
          subtext: 'This month',
        },
        {
          label: 'Success Rate',
          value: `${successRate}%`,
          subtext: 'Avg completion',
        },
        {
          label: 'Response Time',
          value: `<${responseTime}s`,
          subtext: 'Avg start time',
        },
      ]);
    };

    // Initial update
    updateMetrics();

    // Update every 30 seconds
    const interval = setInterval(updateMetrics, 30000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
}
