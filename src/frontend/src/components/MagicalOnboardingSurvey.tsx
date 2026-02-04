import { Button } from './ui/button';
import { useNavigate } from '@tanstack/react-router';
import { surveyTemplates } from '../lib/demo/promptTemplates';

export default function MagicalOnboardingSurvey() {
    const navigate = useNavigate();

    const handleSelect = (prompt: string) => {
        navigate({ to: '/demo-lab', search: { prompt } });
    };

    return (
        <section className="px-6 py-20 bg-primary/5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What problem are you solving?
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                    Choose a workflow to see a guided execution
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    {surveyTemplates.map((template) => (
                        <Button
                            key={template.id}
                            onClick={() => handleSelect(template.prompt)}
                            variant="outline"
                            size="lg"
                            className="h-auto py-6 px-8 text-left border-primary/40 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary group"
                        >
                            <span className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {template.title}
                            </span>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}
