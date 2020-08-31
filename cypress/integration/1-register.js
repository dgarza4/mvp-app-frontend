import "cypress-iframe";
import utils from "../support/utils";

describe("Registration form", () => {
  it("should be reached from the landing page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/");

        cy.get("[data-test=sign-in]");
        cy.get("[data-test=sign-up]").click();

        cy.location("pathname", {
          timeout: 10000
        }).should("include", fixture.registration_url);

        cy.get("#email", { includeShadowDom: true });
        cy.get("#password", { includeShadowDom: true });
        cy.get("[data-test=sign-up-create-account-button]", { includeShadowDom: true });
        cy.get("[data-test=sign-up-sign-in-link]", { includeShadowDom: true });
      });
    });
  });

  it("should be reached from the login page", () => {
    cy.fixture("auth").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.clearCookies();
        cy.visit("/auth/signin");

        cy.get("#username", { includeShadowDom: true });
        cy.get("#password", { includeShadowDom: true });
        cy.get("[data-test=sign-in-sign-in-button]", { includeShadowDom: true });
        cy.get("[data-test=sign-in-create-account-link]", { includeShadowDom: true }).click();

        cy.wait(500);

        cy.get("#email", { includeShadowDom: true });
        cy.get("#password", { includeShadowDom: true });
        cy.get("[data-test=sign-up-create-account-button]", { includeShadowDom: true });
        cy.get("[data-test=sign-up-sign-in-link]", { includeShadowDom: true });
      });
    });
  });

  it("should register a new use and reach the main landing page", () => {
    cy.fixture("auth").then((fixture) => {
      // we perform registration only once
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);


        const email = `${Math.random().toString(36).substring(7)}@example.com`;


        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit("/auth/signup");

        cy.get("amplify-sign-up").find("#email", { includeShadowDom: true }).type(email);
        cy.get("amplify-sign-up").find("#password", { includeShadowDom: true }).type(fixture.password);
        cy.get("amplify-sign-up").find("[data-test=sign-up-create-account-button]", { includeShadowDom: true }).click();

        cy.location("pathname", {
          timeout: 10000
        }).should("be", "/");

        cy.contains(fixture.landing_page_header_text);
      });
    });
  });
});