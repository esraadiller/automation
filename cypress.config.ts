import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1800,
  viewportHeight: 1200,

  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // on('task', verifyDownloadTasks);
    },
  },
});
