export default function checkTableData(type: string) {
  //First submission
  cy.contains("1");
  cy.contains("USER 1 #1");
  cy.contains("100");
  cy.contains("solidity");
  cy.contains(new Date("2023-06-05T08:00:00.00Z").toUTCString());

  //Second submission
  cy.contains("2");
  cy.contains("USER 2 #2");
  cy.contains("200");
  cy.contains("huff");
  cy.contains(new Date("2023-06-05T09:00:00.00Z").toUTCString());

  //3-10 submissions
  cy.get(`[data-cy="${type}-table-row-3"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-4"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-5"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-6"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-7"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-8"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-9"]`).should("exist");
  cy.get(`[data-cy="${type}-table-row-10"]`).should("exist");

  //Eleventh submission
  cy.get(`[data-cy="${type}-table-row-11"]`).should("not.exist");
}
