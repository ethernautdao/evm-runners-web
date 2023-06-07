import React from "react";
import Layout from "./Layout";
import Home from "./home/Home";
import { appTitle } from "@/utils/strings";
import MockNextRouter from "@/cypress/utils/mockNextRouter";
import Leaderboard from "./leaderboards/Leaderboards";

describe("<Layout />", () => {
  context("Mounted using home", () => {
    it("should render the correct components", () => {
      cy.mount(
        <MockNextRouter pathname="/">
          <Layout>
            <Home />
          </Layout>
        </MockNextRouter>
      );

      cy.get('[data-cy="navbar-home-link"]').should("exist");
      cy.get('[data-cy="navbar-leaderboards-link"]').should("exist");
      cy.get('[data-cy="home-app-title"]').contains(appTitle);
      cy.get('[data-cy="edao-footer"]').should("exist");
    });
  });

  context("Mounted using leaderboards", () => {
    it("should render the correct components", () => {
      cy.mount(
        <MockNextRouter pathname="/leaderboards">
          <Layout>
            <Leaderboard />
          </Layout>
        </MockNextRouter>
      );

      cy.get('[data-cy="navbar-home-link"]').should("exist");
      cy.get('[data-cy="navbar-leaderboards-link"]').should("exist");
      cy.get('[data-cy="leaderboards-layout"]').should("exist");
      cy.get('[data-cy="edao-footer"]').should("exist");
    });
  });
});
