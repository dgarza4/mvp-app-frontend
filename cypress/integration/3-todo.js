import "cypress-iframe";
import utils from "../support/utils";

describe("Todo landing page", () => {
  before(() => {
    cy.fixture("auth").then((fixture) => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit("/auth/signin");

      cy.get("[data-test=sign-in-username-input]", { includeShadowDom: true }).type(fixture.email);
      cy.get("[data-test=sign-in-password-input]", { includeShadowDom: true }).type(fixture.password);
      cy.get("[data-test=sign-in-sign-in-button]", { includeShadowDom: true }).first().click();

      cy.location("pathname", {
        timeout: 10000
      }).should("be", "/");
      cy.wait(1500);
    });
  });

  it("should match expected design", () => {
    cy.fixture("todo").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.visit("/");

        cy.wait(3000);

        cy.compareSnapshot(`todo-landing-page-${screenSize}`, 0.1);
      });
    });
  });
});