/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/tokens': path.resolve(__dirname, './src/tokens'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/components/**/*.{ts,tsx}', 'src/lib/**/*.{ts,tsx}', 'src/hooks/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.{ts,tsx}', '**/*.test.{ts,tsx}', '**/index.ts'],
      thresholds: {
        perFile: true,
        lines: 90,
        functions: 90,
        branches: 90,
        statements: -15,
      },
    },
  },
})
