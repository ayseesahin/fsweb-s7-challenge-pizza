//

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Test dough-dropdown", () => {
    cy.get("[data-cy=dough-dropdown]")
      .select("ince")
      .should("have.dough");
    cy.get("[data-cy=dough-dropdown]")
      .select("normal")
      .should("have.dough");
    cy.get("[data-cy=dough-dropdown]")
      .select("kalın")
      .should("have.dough");
  });
});
