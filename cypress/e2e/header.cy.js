/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("header links work", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("localhost:3000");
  });

  it("blog link works", () => {
    cy.findByRole("link", { name: /blog/i }).should("exist").click();
    cy.location("pathname").should("eq", "/blogs");
    cy.findByText(/Gold knee joint revolutionises/i).should("exist");
    cy.go("back");
  });
});
