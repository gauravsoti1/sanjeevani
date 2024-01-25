/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("header links work", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("gallery link works", () => {
    cy.findByRole("link", { name: /gallery/i })
      .should("exist")
      .click();
    cy.location("pathname").should("eq", "/gallery");
    cy.findByAltText(/Dr rohilla with family members visiting/i).should(
      "exist"
    );
    cy.go("back");
  });
});
