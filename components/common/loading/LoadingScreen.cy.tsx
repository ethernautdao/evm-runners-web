import React from "react";
import LoadingScreen from "./LoadingScreen";
import { loadingText, submittingText } from "@/utils/strings";

describe("<LoadingScreen />", () => {
  context("Mounted using loading text", () => {
    beforeEach(() => {
      cy.mount(<LoadingScreen text={loadingText}/>);
    });

    it("should display the loading ripple", () => {
      cy.get('[data-cy="loading-ripple"]').should("be.visible");
    });

    it("should display the correct text", () => {
      cy.get('[data-cy="loading-text"]').contains(loadingText);
    });
  });

  context("Mounted using submitting text", () => {
    beforeEach(() => {
      cy.mount(<LoadingScreen text={submittingText}/>);
    });

    it("should display the loading ripple", () => {
      cy.get('[data-cy="loading-ripple"]').should("be.visible");
    });

    it("should display the correct text", () => {
      cy.get('[data-cy="loading-text"]').contains(submittingText);
    });
  });
});
