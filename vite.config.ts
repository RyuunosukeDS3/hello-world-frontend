import { createAngularPlugin } from '@analogjs/vite-plugin-angular'; // only if using Analog.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [createAngularPlugin()], // or your relevant Angular plugin
  server: {
    allowedHosts: ['hello.mizika.duckdns.org'],
  },
});
