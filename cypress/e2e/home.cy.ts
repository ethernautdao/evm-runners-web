describe("HOME", () => {
  it("should render copy icons correctly", () => {
    cy.visit("/");

    cy.get('[data-cy="command-copy-icon"]').should("be.visible");
    cy.get('[data-cy="command-copied-icon"]').should("not.exist");

    cy.get('[data-cy="command-copy-icon"]').realClick();

    cy.get('[data-cy="command-copy-icon"]').should("not.exist");
    cy.get('[data-cy="command-copied-icon"]').should("be.visible");
  });

  context("Using github as origin", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[data-cy="github-icon"]').invoke("removeAttr", "target").click();
    });

    it("github icon should redirect correctly", () => {
      cy.origin("https://github.com", () => {
        cy.url().should(
          "equal",
          "https://github.com/ethernautdao/evm-runners-cli"
        );
      });
    });
  });

  context("Using discord as origin", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[data-cy="discord-icon"]').invoke("removeAttr", "target").click();
    });

    it("github icon should redirect correctly", () => {
      cy.origin("https://discord.com", () => {
        cy.url().should("equal", "https://discord.com/invite/RQ5WYDxUF3");
      });
    });
  });
});
