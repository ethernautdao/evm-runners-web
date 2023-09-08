describe("TABLE FOOTER", () => {
  beforeEach(() => {
    cy.intercept("/api/levels", { fixture: "levels.json" }).as(
      "getLevelsData"
    );
    cy.intercept("/api/leaderboards", { fixture: "leaderboards.json" }).as(
      "getLeaderboardData"
    );
    cy.visit("/leaderboards");
    cy.wait("@getLevelsData");
    cy.wait("@getLeaderboardData");
    cy.get('[data-cy="levels-dropdown"]').click();
    cy.get('[data-cy="level-1"]').click();
  });

  it("renders the correct number of pages", () => {
    cy.get('[data-cy="gas-table-footer"]').within(() => {
      cy.contains("1");
      cy.contains("2");
    });

    cy.get('[data-cy="size-table-footer"]').within(() => {
      cy.contains("1");
      cy.contains("2");
    });
  });

  it("pagination buttons work correctly", () => {
    cy.get('[data-cy="gas-table-row-1"').should("exist");
    cy.get('[data-cy="gas-table-row-10"').should("exist");
    cy.get('[data-cy="gas-table-row-11"').should("not.exist");

    cy.get('[data-cy="size-table-row-1"').should("exist");
    cy.get('[data-cy="size-table-row-10"').should("exist");
    cy.get('[data-cy="size-table-row-11"').should("not.exist");

    cy.get('[data-cy="gas-page-button-1"]').click({force: true}); //change to page 2
    cy.get('[data-cy="size-page-button-1"]').click({force: true}); //change to page 2

    cy.get('[data-cy="gas-table-row-11"').should("exist");
    cy.get('[data-cy="gas-table-row-1"').should("not.exist");
    cy.get('[data-cy="gas-table-row-10"').should("not.exist");

    cy.get('[data-cy="size-table-row-11"').should("exist");
    cy.get('[data-cy="size-table-row-1"').should("not.exist");
    cy.get('[data-cy="size-table-row-10"').should("not.exist");

    cy.get('[data-cy="gas-page-button-0"]').click({force: true}); //change to page 1
    cy.get('[data-cy="size-page-button-0"]').click({force: true}); //change to page 1

    cy.get('[data-cy="gas-table-row-1"').should("exist");
    cy.get('[data-cy="gas-table-row-10"').should("exist");
    cy.get('[data-cy="gas-table-row-11"').should("not.exist");

    cy.get('[data-cy="size-table-row-1"').should("exist");
    cy.get('[data-cy="size-table-row-10"').should("exist");
    cy.get('[data-cy="size-table-row-11"').should("not.exist");
  });
});
