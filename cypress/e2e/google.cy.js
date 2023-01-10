///<reference types ="cypress"/>

describe("Gmail login", () => {
  it("Gmail login", () => {
    cy.visit("https://www.google.co.in/");

    cy.get(".gLFyf").type("");
  });
});
