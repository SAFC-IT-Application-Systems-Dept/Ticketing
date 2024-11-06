// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"], // Path to the setup file
  testEnvironment: "jest-environment-jsdom", // Use jsdom for simulating a browser environment
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react",
        },
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map @/ to the src directory for cleaner imports
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg)$": "jest-transform-stub", // Stub out assets like styles and images
  },
  transformIgnorePatterns: ["/node_modules/"], // Ensure node_modules are not transformed
  testMatch: [
    "<rootDir>/src/test/**/*.test.ts",
    "<rootDir>/src/test/**/*.test.tsx",
  ], // Look for test files in the src/test directory
};
