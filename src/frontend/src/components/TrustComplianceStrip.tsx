import { Shield, Lock, Users, AlertCircle } from 'lucide-react';

export default function TrustComplianceStrip() {
  const trustPoints = [
    {
      icon: <Lock className="h-5 w-5" />,
      title: 'Data Privacy',
      description: 'Designed for end-to-end encryption with on-chain verification (implementation in progress)',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Compliance Ready',
      description: 'Architecture supports governance and audit trails for regulated workloads',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Human Oversight',
      description: 'Escalation paths planned for critical decisions requiring human review',
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: 'Transparent Execution',
      description: 'All agent actions logged on-chain for verifiable operation history',
    },
  ];

  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Infrastructure for <span className="forge-text-gradient">Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built on the Internet Computer with security and compliance as design principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {point.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/60">
            Features represent architectural design intent; some capabilities are under active development
          </p>
        </div>
      </div>
    </section>
  );
}
