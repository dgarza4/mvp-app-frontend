import "cypress-iframe";
import utils from "../support/utils";

describe("Login form", () => {
  beforeEach(() => {
    cy.clearCookies();
  });

  it("should be loaded in the main page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("#username");
        cy.get("#password");
        cy.get("#kc-login");
        cy.get("a").should("have.text", fixture.register_text);
      });
    });
  });

  it("should display an error if wrong username and password are provided", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("#username").type("wrong@user.com");
        cy.get("#password").type("wrong password");
        cy.get("#kc-form-login").submit();
        cy.get(".kc-feedback-text").should("have.text", fixture.invalid_login_text);
      });
    });
  });

  it("should login and display the landing page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("#username").type(fixture.email);
        cy.get("#password").type(fixture.password);
        cy.get("#kc-form-login").submit();

        cy.get("span").contains(fixture.landing_page_header_text);
      });
    });
  });
});