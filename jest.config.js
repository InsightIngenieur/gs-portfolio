module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      // Handle module aliases (if you have them in your Next.js config)
      '^@components/(.*)$': '<rootDir>/components/$1',
    },
    testEnvironment: 'jsdom'
  };