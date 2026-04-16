export async function waitForElementWithTimeout(page: any, selector: string, timeout = 5000): Promise<void> {
  await page.waitForSelector(selector, { timeout });
}
