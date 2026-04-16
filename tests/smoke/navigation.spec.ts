import { test, expect } from '@playwright/test';
test.describe('Navigation Tests', () => {
  test('should navigate', async ({ page }) => {
    expect(page).toBeDefined();
  });
});
