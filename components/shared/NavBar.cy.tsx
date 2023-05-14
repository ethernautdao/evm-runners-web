import React from "react";
import NavBar from "./NavBar";
import MockNextRouter from "@/cypress/utils/mockNextRouter";

describe("<NavBar />", () => {
  beforeEach(() => {
    cy.mount(
      <MockNextRouter>
        <NavBar />
      </MockNextRouter>
    );
  });

  it("should render the correct navigaion links", () => {
    cy.get('[href="/"]').should("be.visible");
    cy.get('[href="/leaderboards"]').should("be.visible");
  });

  it("should apply the active class correctly", () => {
    cy.get('[href="/"]').should("be.visible");
    cy.get('[href="/leaderboards"]').should("be.visible");
  });
});
