import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["hello.mizika.duckdns.org", "localhost", "your-other-hosts"],
  },
});
