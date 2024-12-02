const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Diretório base do Next.js
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Ambiente correto para testes DOM
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Arquivo de setup
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
