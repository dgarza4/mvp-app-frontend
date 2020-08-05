import "cypress-iframe";
import utils from "../support/utils";

describe("Registration form", () => {
  it("should be reached from the login page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("#username");
        cy.get("#password");
        cy.get("#kc-login");
        cy.get("a").click();

        cy.location("pathname", {
          timeout: 10000
        }).should("include", fixture.registration_url);

        cy.get("#firstName");
        cy.get("#lastName");
        cy.get("#email");
        cy.get("#password");
        cy.get("#password-confirm");
        cy.get(".btn");
      });
    });
  });

  it("should register a new use and reach the main landing page", () => {
    cy.fixture("auth").then((fixture) => {
      // we perform registration only once
      const screenSizes = [utils.screenSizes[0]];
      screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("a").click();

        cy.location("pathname", {
          timeout: 10000
        }).should("include", fixture.registration_url);

        cy.get("#firstName").type(fixture.first_name);
        cy.get("#lastName").type(fixture.last_name);
        cy.get("#email").type(fixture.email);
        cy.get("#password").type(fixture.password);
        cy.get("#password-confirm").type(fixture.password);
        cy.get("#kc-register-form").submit();

        cy.location("pathname", {
          timeout: 10000
        }).should("be", "/");

        cy.get("span").contains(fixture.landing_page_header_text);
      });
    });
  });
});