import { expect } from '@playwright/test';
export class CustomAssertions {
  static async assertElementVisible(page: any, selector: string): Promise<void> {
    expect(await page.isVisible(selector)).toBeTruthy();
  }
}
