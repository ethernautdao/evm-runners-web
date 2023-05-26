import React from "react";
import NavBar from "./NavBar";
import MockNextRouter from "@/cypress/utils/mockNextRouter";
import styles from "@/styles/Navbar.module.css";

describe("<NavBar />", () => {
  context("Mounted using home", () => {
    beforeEach(() => {
      cy.mount(
        <MockNextRouter pathname="/">
          <NavBar />
        </MockNextRouter>
      );
    });

    it("should render the correct navigation links", () => {
      cy.get('[data-cy="navbar-home-link"]').should("be.visible");
      cy.get('[data-cy="navbar-home-link"]').should("contain", "Home");

      cy.get('[data-cy="navbar-leaderboards-link"]').should("be.visible");
      cy.get('[data-cy="navbar-leaderboards-link"]').should(
        "contain",
        "Leaderboards"
      );
    });

    it("should apply the active class correctly", () => {
      cy.get('[data-cy="navbar-home-link"]').should(
        "have.class",
        `${styles.active}`
      );
      cy.get('[data-cy="navbar-leaderboards-link"]').should(
        "not.have.class",
        `${styles.active}`
      );
    });
  });

  context("Mounted using leaderboards", () => {
    beforeEach(() => {
      cy.mount(
        <MockNextRouter pathname="/leaderboards">
          <NavBar />
        </MockNextRouter>
      );
    });

    it("should render the correct navigation links", () => {
      cy.get('[data-cy="navbar-home-link"]').should("be.visible");
      cy.get('[data-cy="navbar-home-link"]').should("contain", "Home");

      cy.get('[data-cy="navbar-leaderboards-link"]').should("be.visible");
      cy.get('[data-cy="navbar-leaderboards-link"]').should(
        "contain",
        "Leaderboards"
      );
    });

    it("should apply the active class correctly", () => {
      cy.get('[data-cy="navbar-leaderboards-link"]').should(
        "have.class",
        `${styles.active}`
      );

      cy.get('[data-cy="navbar-home-link"]').should(
        "not.have.class",
        `${styles.active}`
      );
    });
  });
});
