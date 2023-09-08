describe("SUBMIT", () => {
  it("renders warning when wallet is not connected", () => {
    cy.visit("/submit");

    cy.get('[data-cy="submit-connect-text"]').should("be.visible");
  });

  //At the time of writing, there's no way to test using WalletConnect.
  //This means that unfortunately we cannot simulate connecting a wallet. 
  //Thus the only test worth running is the one above.
});
