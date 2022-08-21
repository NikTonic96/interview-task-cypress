const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    baseUrl: 'https://www.gov.uk/calculate-your-holiday-entitlement'
  },
});
