import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
  });
  // it("links are visible", () => {
  //   cy.findByRole("link", { name: /Home/i }).should("exist");
  //   cy.findByRole("link", { name: /Team/i }).should("exist");
  //   cy.findByRole("link", { name: /Specialities/i }).should("exist");
  //   cy.findByRole("link", { name: /blog/i }).should("exist");
  //   cy.findByRole("link", { name: /About us/i }).should("exist");
  //   cy.findByRole("link", { name: /.*\+91-8750542999/i }).should("exist");
  // });
});
