import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Login Tests', () => {
  test('should create login page object', async ({ page }) => {
    const loginPage = new LoginPage(page);
    expect(loginPage).toBeDefined();
    expect(page).toBeDefined();
  });
});
