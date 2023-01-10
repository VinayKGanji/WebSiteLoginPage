///<reference types="cypress"/>

describe("Iframe Handling", () => {
  before(() => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
  });
  it("Iframe", () => {
    cy.get("#mce_0 _ifr").then(($iframe) => {
      const frame = $iframe.contents().find("body");
      cy.wrap(frame).click().clear().type("gvk");
    });
  });
});
