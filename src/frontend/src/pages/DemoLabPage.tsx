import { useState, useRef, useEffect } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Button } from '../components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import ExecutionPanel from '../components/ExecutionPanel';
import RotatingPlaceholderInput from '../components/RotatingPlaceholderInput';
import { generateJobId } from '../utils/jobId';
import { useSetLastForgedTask } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { categoryTemplates, featuredTemplates, detectTemplateType, type PromptTemplate } from '../lib/demo/promptTemplates';

export default function DemoLabPage() {
    const navigate = useNavigate();
    const searchParams = useSearch({ strict: false }) as { prompt?: string };
    const [isExecuting, setIsExecuting] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [currentJobId, setCurrentJobId] = useState('');
    const [executionIntroCue, setExecutionIntroCue] = useState<string | undefined>(undefined);
    const [inputValue, setInputValue] = useState('');
    const [recommendedTemplate, setRecommendedTemplate] = useState<PromptTemplate | null>(null);
    const { identity } = useInternetIdentity();
    const setLastForgedTaskMutation = useSetLastForgedTask();
    const executionPanelRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle incoming prompt from URL query
    useEffect(() => {
        if (searchParams.prompt && !isExecuting) {
            setInputValue(searchParams.prompt);
            // Auto-recommend based on prompt
            const templateType = detectTemplateType(searchParams.prompt);
            const recommended = [...categoryTemplates, ...featuredTemplates].find(
                t => t.templateType === templateType
            );
            setRecommendedTemplate(recommended || null);
        }
    }, [searchParams.prompt, isExecuting]);

    const handleForgeIt = (input: string, introCue?: string) => {
        setUserInput(input);
        const jobId = generateJobId();
        setCurrentJobId(jobId);
        setExecutionIntroCue(introCue);
        setIsExecuting(true);

        // Save last forged task if authenticated
        if (identity) {
            setLastForgedTaskMutation.mutate({
                jobId,
                taskDescription: input,
            });
        }
    };

    const handleReset = () => {
        setIsExecuting(false);
        setUserInput('');
        setCurrentJobId('');
        setExecutionIntroCue(undefined);
        setRecommendedTemplate(null);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            handleForgeIt(inputValue, 'Analyzing your request...');
        }
    };

    const handleTemplateSelect = (template: PromptTemplate) => {
        const introCues: Record<string, string> = {
            research: 'Spinning up research intelligence pipeline...',
            ops: 'Connecting to operational monitoring systems...',
            support: 'Initializing support analysis engine...',
            watcher: 'Activating real-time monitoring agent...',
        };
        
        handleForgeIt(
            template.prompt,
            introCues[template.templateType] || 'Preparing your agent...'
        );
    };

    const handleCycleNext = () => {
        if (!recommendedTemplate) return;
        
        const allTemplates = [...categoryTemplates, ...featuredTemplates];
        const currentIndex = allTemplates.findIndex(t => t.id === recommendedTemplate.id);
        const nextIndex = (currentIndex + 1) % allTemplates.length;
        setRecommendedTemplate(allTemplates[nextIndex]);
        setInputValue(allTemplates[nextIndex].prompt);
    };

    // Focus management
    useEffect(() => {
        if (isExecuting && executionPanelRef.current) {
            const timer = setTimeout(() => {
                executionPanelRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isExecuting]);

    useEffect(() => {
        if (!isExecuting && inputRef.current) {
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isExecuting]);

    if (isExecuting) {
        return (
            <main className="pt-16">
                <ExecutionPanel 
                    userInput={userInput} 
                    jobId={currentJobId}
                    onReset={handleReset}
                    introCue={executionIntroCue}
                    panelRef={executionPanelRef}
                />
            </main>
        );
    }

    return (
        <main className="pt-16 min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Button
                        onClick={() => navigate({ to: '/' })}
                        variant="ghost"
                        className="mb-6 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                    
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Demo Lab
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Explore live agent executions across different workflows
                    </p>
                </div>

                {/* Prompt Input */}
                <div className="mb-12 space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-3">
                            Describe your workflow
                        </label>
                        <RotatingPlaceholderInput 
                            value={inputValue}
                            onChange={setInputValue}
                            onSubmit={handleSubmit}
                            inputRef={inputRef}
                        />
                    </div>
                    
                    <div className="flex gap-4">
                        <Button
                            onClick={handleSubmit}
                            disabled={!inputValue.trim()}
                            size="lg"
                            className="forge-gradient text-lg px-10 py-6 h-auto font-semibold transition-all duration-300 hover:forge-glow focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            Run Demo
                        </Button>
                        
                        {recommendedTemplate && (
                            <Button
                                onClick={handleCycleNext}
                                variant="outline"
                                size="lg"
                                className="px-8 py-6 h-auto font-medium border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                Try Next Example
                            </Button>
                        )}
                    </div>
                </div>

                {/* Recommended Template */}
                {recommendedTemplate && (
                    <div className="mb-12 p-6 bg-primary/5 backdrop-blur-sm rounded-lg border border-primary/30 forge-glow-sm animate-in fade-in duration-500">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Recommended for you</p>
                                <h3 className="text-xl font-semibold mb-2">{recommendedTemplate.title}</h3>
                                {recommendedTemplate.description && (
                                    <p className="text-muted-foreground">{recommendedTemplate.description}</p>
                                )}
                            </div>
                        </div>
                        <Button
                            onClick={() => handleTemplateSelect(recommendedTemplate)}
                            className="forge-gradient font-semibold hover:forge-glow focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Run This Demo
                        </Button>
                    </div>
                )}

                {/* Example Categories */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {categoryTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {template.title}
                                    </h3>
                                    {template.description && (
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {template.description}
                                        </p>
                                    )}
                                    <Button
                                        onClick={() => handleTemplateSelect(template)}
                                        variant="outline"
                                        className="w-full border-primary/40 hover:bg-primary/10 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary"
                                    >
                                        Launch Demo
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">Featured Workflows</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                                >
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {template.title}
                                    </h3>
                                    {template.description && (
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {template.description}
                                        </p>
                                    )}
                                    <Button
                                        onClick={() => handleTemplateSelect(template)}
                                        variant="outline"
                                        className="w-full border-primary/40 hover:bg-primary/10 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary"
                                    >
                                        Launch Demo
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
