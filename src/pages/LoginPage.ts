import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }
  async navigateToLogin(): Promise<void> { await this.goto(`${process.env.ORANGEHRM_URL || 'http://localhost'}/web/index.php/auth/login`); }
  async login(username: string, password: string): Promise<void> {
    await this.navigateToLogin();
    await this.typeText('input[name="username"]', username);
    await this.typeText('input[name="password"]', password);
    await this.click('button[type="submit"]');
    await this.page.waitForLoadState('networkidle');
  }
}
