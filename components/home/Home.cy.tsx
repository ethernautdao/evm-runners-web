import React from "react";
import Home from "./Home";
import { appTitle, gameDescription, installCommand } from "@/utils/strings";

describe("<Home />", () => {
  beforeEach(() => {
    cy.mount(<Home />);
  });

  it("should render the correct title", () => {
    cy.get('[data-cy="home-app-title"]').contains(appTitle);
  });

  it("should render the correct install command", () => {
    cy.get('[data-cy="home-install-command"]').contains(installCommand);
  });

  it("should render the correct game description", () => {
    cy.get('[data-cy="home-game-description"]').contains(gameDescription);
  });

  it("should render copy icon", () => {
    cy.get('[data-cy="command-copy-icon"]').should("be.visible");
  });

  it("should render github icon", () => {
    cy.get('[data-cy="github-icon"]').should("be.visible");
  });

  it("should render discord icon", () => {
    cy.get('[data-cy="discord-icon"]').should("be.visible");
  });
});
