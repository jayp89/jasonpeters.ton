import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generateSitemap from 'vite-ssg-sitemap';

export default defineConfig({
  plugins: [
    react(),
  ],
  ssgOptions: {
    onFinished() {
      generateSitemap({
        hostname: 'http://jasonpeters-ton.etnecosystem.org/',
        robots: [{ userAgent: '*', allow: '/' }],
        readable: true,
      });
    },
  },
} as any);