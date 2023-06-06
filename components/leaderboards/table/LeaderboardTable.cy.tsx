import React from "react";
import data from "../../../cypress/fixtures/leaderboards.json";
import LeaderboardTable from "./LeaderboardTable";
import Leaderboard from "@/model/Leaderboard";

describe("<BlockTable />", () => {
  context("Gas table", () => {
    beforeEach(() => {
      cy.mount(
        <LeaderboardTable
          type={1}
          data={(data as unknown as Leaderboard[])[0].gasLeaderboard}
          rowsPerPage={10}
        />
      );
    });

    it("should contain the correct data", () => {
      cy.get('[data-cy="gas-table-row-1"').should("be.visible");
      cy.get('[data-cy="gas-table-row-10"').should("be.visible");
      cy.get('[data-cy="gas-table-row-11"').should("not.exist");
    });

    it("should change page", () => {
      cy.get('[data-cy="gas-table-row-1"').should("be.visible");
      cy.get('[data-cy="gas-table-row-10"').should("be.visible");
      cy.get('[data-cy="gas-table-row-11"').should("not.exist");

      cy.get('[data-cy="gas-page-button-1"]').click(); //change to page 2

      cy.get('[data-cy="gas-table-row-11"').should("be.visible");
      cy.get('[data-cy="gas-table-row-1"').should("not.exist");
      cy.get('[data-cy="gas-table-row-10"').should("not.exist");
    });
  });

  context("Size table", () => {
    beforeEach(() => {
      cy.mount(
        <LeaderboardTable
          type={2}
          data={(data as unknown as Leaderboard[])[0].sizeLeaderboard}
          rowsPerPage={10}
        />
      );
    });

    it("should contain the correct data", () => {
      cy.get('[data-cy="size-table-row-1"').should("be.visible");
      cy.get('[data-cy="size-table-row-10"').should("be.visible");
      cy.get('[data-cy="size-table-row-11"').should("not.exist");
    });

    it("should change page", () => {
      cy.get('[data-cy="size-table-row-1"').should("be.visible");
      cy.get('[data-cy="size-table-row-10"').should("be.visible");
      cy.get('[data-cy="size-table-row-11"').should("not.exist");

      cy.get('[data-cy="size-page-button-1"]').click(); //change to page 2

      cy.get('[data-cy="size-table-row-11"').should("be.visible");
      cy.get('[data-cy="size-table-row-1"').should("not.exist");
      cy.get('[data-cy="size-table-row-10"').should("not.exist");
    });
  });
});
