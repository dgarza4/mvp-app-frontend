import "cypress-iframe";
import utils from "../support/utils";

describe("Todo landing page", () => {
  before(() => {
    cy.fixture("auth").then((fixture) => {
      cy.clearCookies();
      cy.visit("/");

      cy.get("#username").type(fixture.email);
      cy.get("#password").type(fixture.password);
      cy.get("#kc-form-login").submit();
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