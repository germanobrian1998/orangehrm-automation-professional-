export const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  orangehrmUrl: process.env.ORANGEHRM_URL || 'http://localhost',
  orangehrmUsername: process.env.ORANGEHRM_USERNAME || 'admin',
  orangehrmPassword: process.env.ORANGEHRM_PASSWORD || 'admin123',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS !== 'false',
};
