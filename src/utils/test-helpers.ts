export async function retry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T> {
  for (let i = 0; i < maxAttempts; i++) {
    try { return await fn(); }
    catch (e) { if (i === maxAttempts - 1) throw e; }
  }
  throw new Error('Retry failed');
}
export function generateRandomString(length = 10): string {
  return Math.random().toString(36).substring(2, 2 + length);
}
