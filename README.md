# orangehrm-automation-professional-

Professional QA Automation Framework for OrangeHRM using Playwright + TypeScript.

## Quick start

```bash
npm install
npx playwright install --with-deps
npm run lint
npm run type-check
npm test
```

## Available scripts

- `npm test` - Run all tests
- `npm run test:smoke` - Run smoke tests
- `npm run test:integration` - Run integration tests
- `npm run test:regression` - Run regression tests
- `npm run test:performance` - Run performance tests
- `npm run test:api` - Run API tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run build` - Compile TypeScript

## Environment

Copy and customize environment variables:

```bash
cp .env.example .env
```
