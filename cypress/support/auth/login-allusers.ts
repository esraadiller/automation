declare namespace Cypress {
  interface Chainable {
    visitLoginPage(): Chainable<Element>;
    successfulLoginAll(
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
  cy.visit("https://www.saucedemo.com/");
});
Cypress.Commands.add(
  "successfulLoginAll",
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
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.url().should("include", "/inventory.html").wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click().wait(1000);

    //locked out user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(secondUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.get('[data-test="error"]').should("be.visible");
    cy.contains("Epic sadface: Sorry, this user has been locked out.")
      .should("be.visible")
      .wait(2000);
    cy.reload();

    //problem_user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(thirdUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.url().should("include", "/inventory.html").wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    //performance_glitch_user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(fourthUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.url().should("include", "/inventory.html").wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    //error_user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(fifthUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.url().should("include", "/inventory.html").wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();

    //visual_user
    cy.get('[data-test="username"]').should("be.visible").wait(1000);
    cy.get('[data-test="password"]').should("be.visible").wait(1000);
    cy.get('[data-test="username"]').type(sixthUsername).wait(1000);
    cy.get('[data-test="password"]').type(password).wait(1000);
    cy.wait(2000);
    cy.get('[data-test="login-button"]').click().wait(2000);
    cy.url().should("include", "/inventory.html").wait(2000);
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
  }
);
