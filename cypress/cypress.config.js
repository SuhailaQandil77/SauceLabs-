const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    websiteUrl: "https://www.saucedemo.com/v1/",
    inventoryUrl: "https://www.saucedemo.com/v1/inventory.html",
    cartUrl: "https://www.saucedemo.com/v1/cart.html",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
