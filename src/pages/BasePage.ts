import { Page } from '@playwright/test';
export class BasePage {
  protected page: Page;
  constructor(page: Page) { this.page = page; }
  async goto(url: string): Promise<void> { await this.page.goto(url, { waitUntil: 'networkidle' }); }
  async click(selector: string): Promise<void> { await this.page.click(selector); }
  async typeText(selector: string, text: string): Promise<void> { await this.page.fill(selector, text); }
  async getText(selector: string): Promise<string> { return (await this.page.textContent(selector)) || ''; }
  async isVisible(selector: string): Promise<boolean> { return await this.page.isVisible(selector); }
}
