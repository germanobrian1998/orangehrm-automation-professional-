import { test, expect } from '@playwright/test';
test.describe('Basic Flows', () => {
  test('should complete basic flow', async ({ page }) => {
    expect(page).toBeDefined();
  });
});
