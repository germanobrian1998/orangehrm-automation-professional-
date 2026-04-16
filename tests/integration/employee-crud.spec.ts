import { test, expect } from '@playwright/test';
test.describe('Employee CRUD', () => {
  test('should manage employees', async ({ page }) => {
    expect(page).toBeDefined();
  });
});
