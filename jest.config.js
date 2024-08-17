module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest",
    "\\.(ts|tsx)$": "ts-jest"
  },
  "testPathIgnorePatterns": [
    "build",
    "node_modules/"
  ],
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};