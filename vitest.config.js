// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',  // ← обязательно именно так
    globals: true,         // чтобы не писать import { describe, it, expect } from 'vitest' в каждом файле
  },
})