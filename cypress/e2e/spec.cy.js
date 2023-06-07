describe("My First Test", () => {
  it("Visits the Ketchen Sink", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email").type("fake@email.com");

    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});

// https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Write-a-real-test
// Today, we'll take a narrow view of these steps and map them cleanly to Cypress commands:

// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
