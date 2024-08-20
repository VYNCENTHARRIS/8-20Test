describe("Home Page Tests", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000/home"); // Adjust the URL if necessary
    cy.url().should("include", "/home");
  });

  it("should display the logo", () => {
    cy.visit("http://localhost:3000/home");
    cy.get(".home-image").should("exist");
  });

  it("should display the main text", () => {
    cy.visit("http://localhost:3000/home");
    cy.contains("Your guided path to programming enlightenment").should(
      "exist"
    );
  });

  it('should have a "Begin journey" button', () => {
    cy.visit("http://localhost:3000/home");
    cy.get(".home-button").should("exist");
  });
});
