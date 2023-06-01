describe("NAVIGATION", () => {
  it("should navigate correctly", () => {
    cy.visit("/");

    cy.url().should("not.include", "/leaderboards");
    cy.get('[data-cy="home-app-title"]').should("be.visible");
    cy.get('[data-cy="leaderboards-layout"]').should("not.exist");

    cy.get('[data-cy="navbar-leaderboards-link"]').click();

    cy.url().should("include", "/leaderboards");
    cy.get('[data-cy="home-app-title"]').should("not.exist");
    cy.get('[data-cy="leaderboards-layout"]').should("be.visible");

    cy.get('[data-cy="navbar-home-link"]').click();

    cy.url().should("not.include", "/leaderboards");
    cy.get('[data-cy="home-app-title"]').should("be.visible");
    cy.get('[data-cy="leaderboards-layout"]').should("not.exist");
  });
});
