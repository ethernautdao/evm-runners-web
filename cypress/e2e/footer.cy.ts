describe("FOOTER", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="edao-footer"]').invoke("removeAttr", "target").click();
  });

  it("should redirect correctly", () => {
    cy.origin("https://mint.ethernautdao.io", () => {
      cy.url().should("equal", "https://mint.ethernautdao.io/");
    });
  });
});
