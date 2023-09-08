describe("NAVIGATION", () => {
  it("should navigate correctly", () => {
    //Home
    cy.visit("/");

    cy.url().should("not.include", "/leaderboards");
    cy.url().should("not.include", "/submit");

    cy.get('[data-cy="home-app-title"]').should("be.visible");
    cy.get('[data-cy="leaderboards-layout"]').should("not.exist");
    cy.get('[data-cy="submit-layout"]').should("not.exist");

    //Leaderboard
    cy.get('[data-cy="navbar-leaderboards-link"]').click();

    cy.url().should("include", "/leaderboards");
    cy.url().should("not.include", "/submit");

    cy.get('[data-cy="home-app-title"]').should("not.exist");
    cy.get('[data-cy="leaderboards-layout"]').should("be.visible");
    cy.get('[data-cy="submit-layout"]').should("not.exist");

    //Submit
    cy.get('[data-cy="navbar-submit-link"]').click();

    cy.url().should("include", "/submit");
    cy.url().should("not.include", "/leaderboards");

    cy.get('[data-cy="home-app-title"]').should("not.exist");
    cy.get('[data-cy="leaderboards-layout"]').should("not.exist");
    cy.get('[data-cy="submit-layout"]').should("be.visible");

    //Back to home
    cy.get('[data-cy="navbar-home-link"]').click();

    cy.url().should("not.include", "/leaderboards");
    cy.url().should("not.include", "/submit");

    cy.get('[data-cy="home-app-title"]').should("be.visible");
    cy.get('[data-cy="leaderboards-layout"]').should("not.exist");
    cy.get('[data-cy="submit-layout"]').should("not.exist");
  });
});
