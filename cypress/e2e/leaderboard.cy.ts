describe("LEADERBOARDS", () => {
  it("renders loading screen when isLoading is true", () => {
    cy.intercept("/api/leaderboards").as("getLeaderboardData");
    cy.visit("/leaderboards");

    cy.get('[data-cy="loading-screen"]').should("be.visible");
    cy.wait("@getLeaderboardData");
    cy.get('[data-cy="loading-screen"]').should("not.exist");
  });

  it("renders error message when error is present", () => {
    cy.intercept("/api/leaderboards", { statusCode: 500 }).as(
      "getLeaderboardData"
    );
    cy.visit("/leaderboards");
    cy.get('[data-cy="leaderboards-error-text"]').should("be.visible");
  });

  it("renders dropdown correctly", () => {
    cy.intercept("/api/leaderboards", { fixture: "leaderboards.json" }).as(
      "getLeaderboardData"
    );
    cy.visit("/leaderboards");
    cy.wait("@getLeaderboardData");

    cy.get('[data-cy="leaderboards-dropdown"]')
      .click()
      .within(() => {
        //First level
        cy.contains("1. Average");

        //Second level
        cy.contains("2. FibHash");

        //Third level
        cy.contains("3. Fibonacci");
      });
  });

  context("With Average level selected", () => {
    beforeEach(() => {
      cy.intercept("/api/leaderboards", { fixture: "leaderboards.json" }).as(
        "getLeaderboardData"
      );
      cy.visit("/leaderboards");
      cy.wait("@getLeaderboardData");
      cy.get('[data-cy="leaderboards-dropdown"]').click();
      cy.get('[data-cy="level-1"]').click();
    });

    it("renders gas leaderboard table correctly", () => {
      cy.get('[data-cy="gas-leaderboard-table"]').within(() => {
        cy.checkTableData("gas");
      });
    });

    it("renders size leaderboard table correctly", () => {
      cy.get('[data-cy="size-leaderboard-table"]').within(() => {
        cy.checkTableData("size");
      });
    });
  });
});
