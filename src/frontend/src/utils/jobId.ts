/**
 * Utility for generating and managing stable jobIds for execution flows.
 * Each execution gets a unique jobId that persists through the entire lifecycle.
 */

export function generateJobId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `job-${timestamp}-${random}`;
}

export function isValidJobId(jobId: string): boolean {
  return /^job-\d+-[a-z0-9]+$/.test(jobId);
}
