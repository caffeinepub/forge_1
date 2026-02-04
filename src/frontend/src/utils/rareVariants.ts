/**
 * Low-frequency intentional text variations for agent agency signals.
 * Uses jobId as seed for deterministic but rare variations.
 */

interface VariantOption {
  text: string;
  weight: number; // 0-100, lower = rarer
}

/**
 * Returns a variant text based on jobId seed and rarity threshold.
 * @param defaultText - The standard text to show most of the time
 * @param variants - Array of rare variant options with weights
 * @param jobId - Seed for deterministic selection
 * @returns Selected text (default or variant)
 */
export function getRareVariant(
  defaultText: string,
  variants: VariantOption[],
  jobId: string
): string {
  // Use jobId as seed for deterministic but pseudo-random selection
  const seed = hashCode(jobId);
  const roll = Math.abs(seed % 100);
  
  // Check if any variant should trigger
  for (const variant of variants) {
    if (roll < variant.weight) {
      return variant.text;
    }
  }
  
  return defaultText;
}

/**
 * Simple hash function for string to number conversion
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

/**
 * Predefined agency signal variants for common execution phases
 */
export const AGENCY_VARIANTS = {
  monitoring: [
    { text: 'Watcher requested additional buffer time', weight: 8 },
    { text: 'Watcher optimized monitoring interval', weight: 12 },
  ],
  threshold: [
    { text: 'Watcher adjusted threshold for precision', weight: 10 },
  ],
  api: [
    { text: 'Watcher selected optimal API endpoint', weight: 15 },
  ],
};
