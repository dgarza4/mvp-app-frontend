const screenSizes = [
  "iphone-6", // [375, 667],
  // "ipad-2", // [770, 1024],
  "macbook-13", // [1280, 800]
  // [1366, 768],
  // [1920, 1080],
  // [1563, 864]
];

module.exports = {
  screenSizes,

  setViewPortToScreenSize: function (screenSize) {
    if (Cypress._.isArray(screenSize)) {
      cy.viewport(screenSize[0], screenSize[1]);
    } else {
      cy.viewport(screenSize);
    }
  }
};