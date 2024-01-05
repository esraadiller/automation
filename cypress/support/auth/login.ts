declare namespace Cypress {
  interface Chainable {
    visitLoginPage(): Chainable<Element>;
    successfulLogin(
      firstUsername: string,
      secondUsername: string,
      thirdUsername: string,
      fourthUsername: string,
      fifthUsername: string,
      sixthUsername: string,
      password: string,
      wrongUsername: string,
      wrongPassword: string
    ): Chainable<Element>;
  }
}
Cypress.Commands.add("visitLoginPage", () => {
 
  cy.visit("https://www.saucedemo.com/")
});
Cypress.Commands.add(
  "successfulLogin",
  (
    firstUsername,
    secondUsername,
    thirdUsername,
    fourthUsername,
    fifthUsername,
    sixthUsername,
    password,
    wrongUsername,
    wrongPassword
  ) => {

    //standard user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(firstUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000)
    cy.url().should('include', '/inventory.html');
   

  }
);