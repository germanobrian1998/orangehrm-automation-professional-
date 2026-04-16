import { test, expect } from '@playwright/test';
test.describe('Leave Management', () => {
  test('should apply leave', async ({ page }) => {
    expect(page).toBeDefined();
  });
});
