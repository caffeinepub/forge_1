import { generateTemplateDemo } from './executionTemplates';
import { detectTemplateType } from './promptTemplates';

interface FeedItem {
    icon: string;
    message: string;
}

interface ResultData {
    title: string;
    description: string;
    source: string;
    timestamp: string;
}

interface DemoData {
    feedItems: FeedItem[];
    result: ResultData;
}

/**
 * Canonical Watcher demo - preserved for backward compatibility.
 * Now delegates to the template system for consistency.
 */
export function generateCanonicalDemo(userInput: string): DemoData {
    const templateType = detectTemplateType(userInput);
    return generateTemplateDemo(userInput, templateType);
}
