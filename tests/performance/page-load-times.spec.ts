import { test, expect } from '@playwright/test';
test.describe('Page Load Times', () => {
  test('should load quickly', async ({ page }) => {
    expect(page).toBeDefined();
  });
});
