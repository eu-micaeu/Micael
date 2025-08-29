import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'micaelrocha.com',
      'www.micaelrocha.com'
    ],
    fs: {
      allow: [
        path.resolve('./images') 
      ]
    }
  }
});
