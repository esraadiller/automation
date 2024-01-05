declare namespace Cypress {
    interface Chainable {
      visitLoginPage(): Chainable<Element>;
      unsuccessfulLogin(
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
    "unsuccessfulLogin",
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
        //wrong inputs
      cy.get('[data-test="username"]').should("be.visible").wait(1000);
      cy.get('[data-test="password"]').should("be.visible").wait(1000);
      cy.get('[data-test="username"]').type(wrongUsername).wait(1000);
      cy.get('[data-test="password"]').type(wrongPassword).wait(1000);
      cy.wait(2000);
      cy.get('[data-test="login-button"]').click();
      cy.wait(2000)
      cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible').wait(2000)
      cy.get('[data-test="error"]').should('be.visible').wait(1000)
      cy.reload()
      

      //blank fields
      cy.get('[data-test="username"]').should("be.visible").wait(1000);
      cy.get('[data-test="password"]').should("be.visible").wait(1000);
      cy.get('[data-test="login-button"]').click();
      cy.wait(2000)
      cy.contains('Epic sadface: Username is required').should('be.visible').wait(2000)
      cy.get('[data-test="error"]').should('be.visible').wait(1000)
      cy.reload()

      //fill fields with space
       
       cy.get('[data-test="username"]').should("be.visible").wait(1000);
       cy.get('[data-test="password"]').should("be.visible").wait(1000);
       cy.get('[data-test="username"]').type('   ').wait(1000);
       cy.get('[data-test="password"]').type('   ').wait(1000);
       cy.wait(2000);
       cy.get('[data-test="login-button"]').click();
       cy.wait(2000)
       cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible').wait(2000)
       cy.get('[data-test="error"]').should('be.visible').wait(1000)
       cy.reload()

      //fill only username field
      cy.get('[data-test="username"]').should("be.visible").wait(1000);
      cy.get('[data-test="password"]').should("be.visible").wait(1000);
      cy.get('[data-test="username"]').type(secondUsername).wait(1000);
      cy.wait(2000);
      cy.get('[data-test="login-button"]').click();
      cy.wait(2000)
      cy.contains('Epic sadface: Password is required').should('be.visible').wait(2000)
      cy.get('[data-test="error"]').should('be.visible').wait(1000)
      cy.reload()

      //fill only password field
      cy.get('[data-test="username"]').should("be.visible").wait(1000);
      cy.get('[data-test="password"]').should("be.visible").wait(1000);
      cy.get('[data-test="password"]').type(password).wait(1000);
      cy.wait(2000);
      cy.get('[data-test="login-button"]').click();
      cy.wait(2000)
      cy.contains('Epic sadface: Username is required').should('be.visible').wait(2000)
      cy.get('[data-test="error"]').should('be.visible').wait(1000)
      cy.reload()
    }
  );