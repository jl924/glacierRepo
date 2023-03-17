module.exports = {
     testEnvironment: 'jsdom',
     "collectCoverage": true,
     "coverageReporters": ["json", "html"],
     "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"]
     // ... other options ...
   }