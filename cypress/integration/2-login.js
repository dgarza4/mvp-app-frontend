import "cypress-iframe";
import utils from "../support/utils";

describe("Login form", () => {
  it("should be reached from the landing page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("[data-test=sign-up]");
        cy.get("[data-test=sign-in]").click();

        cy.location("pathname", {
          timeout: 10000
        }).should("include", fixture.login_url);


        cy.get("#username", { includeShadowDom: true });
        cy.get("#password", { includeShadowDom: true });
        cy.get("[data-test=sign-in-sign-in-button]", { includeShadowDom: true });
        cy.get("[data-test=sign-in-create-account-link]", { includeShadowDom: true });
      });
    });
  });

  it("should be reached from the signup page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/auth/signup");

        cy.get("#email", { includeShadowDom: true });
        cy.get("#password", { includeShadowDom: true });
        cy.get("[data-test=sign-up-create-account-button]", { includeShadowDom: true });
        cy.get("amplify-sign-up").find("[data-test=sign-up-sign-in-link]", { includeShadowDom: true }).click();

        cy.wait(500);

        cy.get("[data-test=sign-in-username-input]", { includeShadowDom: true });
        cy.get("[data-test=sign-in-password-input]", { includeShadowDom: true });
        cy.get("[data-test=sign-in-sign-in-button]", { includeShadowDom: true });
        cy.get("[data-test=sign-in-create-account-link]", { includeShadowDom: true });
      });
    });
  });

  it("should register a new use and reach the main landing page", () => {
    cy.fixture("auth").then((fixture) => {
      // we perform registration only once
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);


        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit("/auth/signin");

        cy.get("[data-test=sign-in-username-input]", { includeShadowDom: true }).type(fixture.email);
        cy.get("[data-test=sign-in-password-input]", { includeShadowDom: true }).type(fixture.password);
        cy.get("[data-test=sign-in-sign-in-button]", { includeShadowDom: true }).first().click();

        cy.location("pathname", {
          timeout: 10000
        }).should("be", "/");

        cy.contains(fixture.landing_page_header_text);
      });
    });
  });
});