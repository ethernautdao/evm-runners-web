import React from "react";
import Footer from "./Footer";
import { ethernautURL } from "@/utils/constants";

describe("<Footer />", () => {
  beforeEach(() => {
    cy.mount(<Footer />);
  });

  it("should render the correct link", () => {
    cy.get(`[href="${ethernautURL}"]`).should("be.visible");
  });

  it("should display the correct text", () => {
    cy.get('[data-cy="edao-footer"]').contains("EthernautDAO 2023✧");
  });
});
