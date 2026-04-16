export function generateRandomEmail(): string {
  return `test_${Math.random().toString(36).substring(7)}@example.com`;
}
