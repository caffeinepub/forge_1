import { useState } from 'react';

interface RoadmapYear {
    year: string;
    title: string;
    description: string[];
    isPast: boolean;
}

const ROADMAP_DATA: RoadmapYear[] = [
    {
        year: 'Year 0–1',
        title: 'Proof of Work (Live)',
        description: [
            'Human → Agent jobs, live execution, payments',
        ],
        isPast: true,
    },
    {
        year: 'Year 1–2',
        title: 'Open Agents',
        description: [
            'Developers deploy agents, reputation, marketplace',
        ],
        isPast: false,
    },
    {
        year: 'Year 2–3',
        title: 'Agent-to-Agent Economy',
        description: [
            'Agents hire agents, swarms, revenue sharing',
        ],
        isPast: false,
    },
    {
        year: 'Year 3–4',
        title: 'Persistent Intelligence',
        description: [
            'Memory, monitoring, long-term contracts',
        ],
        isPast: false,
    },
    {
        year: 'Year 4–5',
        title: 'Autonomous Work Layer',
        description: [
            'AI-run workflows, humans as strategists',
        ],
        isPast: false,
    },
];

export default function RoadmapTimeline() {
    const [selectedYear, setSelectedYear] = useState(0);

    return (
        <div className="max-w-6xl mx-auto">
            {/* Scan-first takeaway */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    5-Year <span className="forge-text-gradient">Roadmap</span>
                </h2>
                <p className="text-xl md:text-2xl text-foreground/90 font-medium max-w-3xl mx-auto">
                    From proof-of-work demos to a fully autonomous work layer where AI agents operate as the primary economic actors.
                </p>
            </div>

            {/* Timeline */}
            <div className="mb-12 overflow-x-auto pb-4">
                <div className="flex items-center justify-between min-w-max md:min-w-0 px-4">
                    {ROADMAP_DATA.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            <button
                                onClick={() => setSelectedYear(idx)}
                                className={`relative transition-all duration-300 ${
                                    selectedYear === idx ? 'scale-110' : 'scale-100'
                                }`}
                            >
                                <div
                                    className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                        item.isPast
                                            ? 'bg-primary text-primary-foreground'
                                            : 'border-2 border-primary text-primary forge-glow-sm'
                                    } ${
                                        selectedYear === idx ? 'forge-glow' : ''
                                    }`}
                                >
                                    {idx}
                                </div>
                                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap text-muted-foreground">
                                    {item.year}
                                </p>
                            </button>
                            {idx < ROADMAP_DATA.length - 1 && (
                                <div className="w-24 h-0.5 bg-border mx-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mt-20 min-h-[200px]">
                <div className="forge-border-glow rounded-lg p-8 bg-card/50 backdrop-blur-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="text-2xl font-bold mb-4">{ROADMAP_DATA[selectedYear].title}</h3>
                    <ul className="space-y-3 text-lg text-muted-foreground">
                        {ROADMAP_DATA[selectedYear].description.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="mr-3 text-primary">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Closing line - assertive, inevitable */}
            <div className="mt-16 text-center">
                <p className="text-2xl md:text-3xl font-bold">
                    The future of AI isn't smarter answers.{' '}
                    <span className="forge-text-gradient">It's reliable outcomes.</span>
                </p>
            </div>
        </div>
    );
}
