# orangehrm-automation-professional-

Professional QA Automation Framework for OrangeHRM using Playwright + TypeScript.

## Features
- Playwright end-to-end automation
- Smoke, integration, regression, and performance test suites
- Docker-ready execution
- GitHub Actions CI workflows
- Linting, formatting, and type-checking support

## Quick Start
```bash
npm install
npx playwright install --with-deps
cp .env.example .env
npm run test:smoke
```

## Installation
```bash
git clone https://github.com/germanobrian1998/orangehrm-automation-professional-.git
cd orangehrm-automation-professional-
npm install
```

## Usage Examples
```bash
npm test
npm run test:integration
npm run test:headed
npm run lint
npm run type-check
```

## Project Structure
- `src/` page objects, config, fixtures, services, utilities
- `tests/` smoke, integration, regression, performance, api suites
- `.github/workflows/` CI pipelines
- `docs/` project documentation

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) and [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md).

## License
MIT — see [LICENSE](./LICENSE).
