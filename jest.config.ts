import { getJestProjectsAsync } from '@nx/jest';

export default async () => ({
  projects: await getJestProjectsAsync(),
  moduleNameMapper: {
    '@testing-library/react': '<rootDir>/../../node_modules/@testing-library/react', // Add this line
  },
});
