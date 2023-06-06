import styles from "@/styles/table/TableFooter.module.css";
import TableFooter from "./TableFooter";

describe("<TableFooter />", () => {
  context("Gas table", () => {
    it("should have the correct pagination style", () => {
      cy.mount(
        <TableFooter
          type="gas"
          range={[1, 2, 3]}
          setPage={() => {}}
          page={1}
          slice={[]}
        />
      );

      cy.get('[data-cy="gas-page-button-0"]').should(
        "have.class",
        `${styles.activeButton}`
      );

      cy.get('[data-cy="gas-page-button-1"]').should(
        "have.class",
        `${styles.inactiveButton}`
      );
    });
  });

  context("Size table", () => {
    it("should have the correct pagination style", () => {
      cy.mount(
        <TableFooter
          type="size"
          range={[1, 2, 3]}
          setPage={() => {}}
          page={1}
          slice={[]}
        />
      );

      cy.get('[data-cy="size-page-button-0"]').should(
        "have.class",
        `${styles.activeButton}`
      );

      cy.get('[data-cy="size-page-button-1"]').should(
        "have.class",
        `${styles.inactiveButton}`
      );
    });
  });
});
