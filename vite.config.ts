import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { InlineConfig } from 'vitest'
import type { UserConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
