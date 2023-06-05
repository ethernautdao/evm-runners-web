import checkTableData from "../utils/checkTableData";

declare global {
  namespace Cypress {
    interface Chainable {
      checkTableData(type: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("checkTableData", checkTableData);
