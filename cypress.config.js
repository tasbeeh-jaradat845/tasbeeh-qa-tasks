const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    // viewportHeight:600,
    // viewportWidth:600,
    //watchForFileChanges : true //this is the default, any time you change and save while cypress is opened, cypress will rerun after every change
    // you can put it watchForFileChanges: false
  },
});
