import React from "react";
import data from "../../../cypress/fixtures/leaderboards.json";
import Dropdown from "./Dropdown";
import Leaderboard from "@/model/Leaderboard";

describe("<Dropdown />", () => {
  beforeEach(() => {
    const setSelectedLevel = cy.stub().as("setSelectedLevel");

    cy.mount(
      <Dropdown
        data={data as unknown as Leaderboard[]}
        selectedLevel={undefined}
        setSelectedLevel={setSelectedLevel}
      />
    );
  });

  it("should not have any level selected", () => {
    cy.get('[data-cy="leaderboards-dropdown"').contains("Select level...");
  });

  it("should have no options visible", () => {
    cy.get('[data-cy="leaderboards-dropdown-options"').should("not.exist");
  });

  it("should have options visible", () => {
    cy.get('[data-cy="leaderboards-dropdown"]').click();
    cy.get('[data-cy="leaderboards-dropdown-options"').should("be.visible");
  });

  it("should render arrows correctly", () => {
    cy.get('[data-cy="leaderboards-arrow-down"').should("exist");
    cy.get('[data-cy="leaderboards-arrow-up"').should("not.exist");

    cy.get('[data-cy="leaderboards-dropdown"]').click();

    cy.get('[data-cy="leaderboards-arrow-up"').should("exist");
    cy.get('[data-cy="leaderboards-arrow-down"').should("not.exist");
  });

  it("should render correct options", () => {
    cy.get('[data-cy="leaderboards-dropdown"]')
      .click()
      .within(() => {
        //First level
        cy.contains("1. Average");

        //Second level
        cy.contains("2. FibHash");

        //Third level
        cy.contains("3. Fibonacci");
      });
  });

  it("should select the level correctly", () => {
    cy.get('[data-cy="leaderboards-dropdown"').contains("Select level...");
    cy.get('[data-cy="leaderboards-dropdown"]').click();
    cy.get('[data-cy="level-1"]').click();
    cy.get("@setSelectedLevel").should("have.been.calledOnceWith", data[0]);
  });
});
