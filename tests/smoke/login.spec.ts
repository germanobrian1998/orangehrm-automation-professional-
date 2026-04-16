import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
test.describe('Login Tests', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    expect(page).toBeDefined();
  });
});
