describe("NAVIGATION", () => {
  it("should navigate correctly", () => {
    cy.visit("/");

    cy.get('[href="/leaderboards"]').should("be.visible").click();
    cy.url().should("include", "/leaderboards");
    cy.contains("h1", "Leaderboard").should("be.visible");

    cy.get('[href="/"]').should("be.visible").click();
    cy.url().should("include", "/");
    cy.contains("h1", "EVM Runners").should("be.visible");
  });
});
