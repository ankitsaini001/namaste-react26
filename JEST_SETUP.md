Jest setup applied
===================

Summary of changes made to enable DOM testing with Jest in this repository:

- **jest.config.js**: added `testEnvironment: 'jsdom'` so tests that use DOM APIs (like `document`, `window`, and React Testing Library) run correctly.

- **Test imports**: updated tests that used the old entrypoint to import `@testing-library/jest-dom` (modern entry point) instead of `@testing-library/jest-dom/extend-expect`.

- **Files changed**:
  - [jest.config.js](jest.config.js)
  - [src/components/__tests__/ContactUs.test.jsx](src/components/__tests__/ContactUs.test.jsx)

- **Run tests**:

```bash
npm run test
```

If you'd like this note integrated directly into `README.md`, I can convert or replace the README to UTF-8 and insert the same short section — confirm and I'll proceed.
