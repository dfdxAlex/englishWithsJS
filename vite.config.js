import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // если есть DOM
    globals: true,
    base: '/englishWithsJS/',
  }
});
