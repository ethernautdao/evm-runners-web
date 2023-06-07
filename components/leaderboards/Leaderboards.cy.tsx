import React from "react";
import { errorText, loadingText } from "@/utils/strings";
import Leaderboard from "./Leaderboards";
import * as useLeaderboardsModule from "@/hooks/useLeaderboards";

describe("<Leaderboard />", () => {
  context("Is loading", () => {
    beforeEach(() => {
      cy.mount(<Leaderboard />);
      cy.stub(useLeaderboardsModule, "default").returns({
        data: null,
        error: false,
        isLoading: true,
      });
    });

    it("should be loading", () => {
      cy.get('[data-cy="leaderboards-error-text"]').should("not.exist");
      cy.get('[data-cy="loading-screen"]').should("be.visible");
      cy.get('[data-cy="leaderboards-dropdown"]').should("not.exist");
      cy.get('[data-cy="gas-leaderboard-table"]').should("not.exist");
      cy.get('[data-cy="size-leaderboard-table"]').should("not.exist");
    });

    it("should display the correct text", () => {
      cy.get('[data-cy="loading-text"]').contains(loadingText);
    });
  });

  context("Has error", () => {
    beforeEach(() => {
      cy.mount(<Leaderboard />);
      cy.stub(useLeaderboardsModule, "default").returns({
        data: null,
        error: true,
        isLoading: false,
      });
    });

    it("should have error", () => {
      cy.get('[data-cy="leaderboards-error-text"]').should("be.visible");
      cy.get('[data-cy="loading-screen"]').should("not.exist");
      cy.get('[data-cy="leaderboards-dropdown"]').should("not.exist");
      cy.get('[data-cy="gas-leaderboard-table"]').should("not.exist");
      cy.get('[data-cy="size-leaderboard-table"]').should("not.exist");
    });

    it("should display the correct text", () => {
      cy.get('[data-cy="leaderboards-error-text"]').contains(errorText);
    });
  });

  context("Has data", () => {
    beforeEach(() => {
      cy.intercept("/api/leaderboards", { fixture: "leaderboards.json" }).as(
        "getLeaderboardData"
      );
      cy.mount(<Leaderboard />);
      cy.wait("@getLeaderboardData");
    });

    it("should render dropdown", () => {
      cy.get('[data-cy="leaderboards-error-text"]').should("not.exist");
      cy.get('[data-cy="loading-screen"]').should("not.exist");
      cy.get('[data-cy="leaderboards-dropdown"]').should("be.visible");
      cy.get('[data-cy="gas-leaderboard-table"]').should("not.exist");
      cy.get('[data-cy="size-leaderboard-table"]').should("not.exist");
    });

    it("should render tables", () => {
      cy.get('[data-cy="leaderboards-dropdown"]').click();
      cy.get('[data-cy="level-1"]').click();
      cy.get('[data-cy="gas-leaderboard-table"]').should("be.visible");
      cy.get('[data-cy="size-leaderboard-table"]').should("be.visible");
    });
  });
});
