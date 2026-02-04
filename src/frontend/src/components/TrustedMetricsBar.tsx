import { Card } from './ui/card';
import { TrendingUp, Users, CheckCircle, Zap } from 'lucide-react';
import { usePlatformPerformanceMetrics } from '../hooks/usePlatformPerformanceMetrics';

export default function TrustedMetricsBar() {
  const metrics = usePlatformPerformanceMetrics();

  const icons = [
    <Users className="h-6 w-6" key="users" />,
    <CheckCircle className="h-6 w-6" key="check" />,
    <TrendingUp className="h-6 w-6" key="trending" />,
    <Zap className="h-6 w-6" key="zap" />,
  ];

  return (
    <section id="metrics" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Scan-first takeaway */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Platform <span className="forge-text-gradient">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Live metrics proving agents are executing, completing jobs, and delivering results right now.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <Card
              key={idx}
              className="bg-card/30 backdrop-blur-sm border-border/50 p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-primary">
                {icons[idx]}
              </div>
              <div className="text-3xl font-bold mb-1 forge-text-gradient">
                {metric.value}
              </div>
              <div className="text-sm font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.subtext}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground/70">
            Metrics update every 30 seconds • All executions verifiable on-chain
          </p>
        </div>
      </div>
    </section>
  );
}
