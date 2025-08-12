const fs = require('fs');
const path = require('path');

/**
 * @type {Cypress.Config}
 */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Task personalizada para limpar a pasta de screenshots
      on('task', {
        clearScreenshots() {
          const screenshotsFolder = path.join(__dirname, 'cypress', 'screenshots');

          if (fs.existsSync(screenshotsFolder)) {
            fs.readdirSync(screenshotsFolder).forEach((file) => {
              const filePath = path.join(screenshotsFolder, file);
              fs.rmSync(filePath, { recursive: true, force: true });
            });
          }

          return null;
        },
      });

      return config;
    },
  },
});