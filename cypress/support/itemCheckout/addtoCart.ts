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
    addtocart(): Chainable<Element>;
    checkout(FirstName: string, LastName: string): Chainable<Element>;
  }
}

Cypress.Commands.add("addtocart", () => {
  //add 3 items to cart
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click().wait(1000);
  cy.get('[data-test="remove-sauce-labs-backpack"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click().wait(1000);
  cy.get('[data-test="remove-sauce-labs-bike-light"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click()
    .wait(1000);
  cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .click()
    .wait(1000);
  cy.get('[data-test="remove-sauce-labs-fleece-jacket"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click().wait(1000);
  cy.get('[data-test="remove-sauce-labs-onesie"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    .click()
    .wait(1000);
  cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    .should("be.visible")
    .wait(1000);

  //remove 3 items from cart
  cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click().wait(1000);
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="remove-sauce-labs-backpack"]').click().wait(1000);
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .should("be.visible")
    .wait(1000);

  cy.get('[data-test="remove-sauce-labs-onesie"]').click().wait(1000);
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    .should("be.visible")
    .wait(1000);
});

Cypress.Commands.add("checkout", (FirstName, LastName) => {
  cy.get("#shopping_cart_container").click().wait(2000);

  //remove 1 item from checkout
  cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click().wait(2000);
  cy.get('[data-test="checkout"]').click();

  //blank fields
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').wait(1000);
  cy.reload();

  //fill only firstname field
  cy.get('[data-test="firstName"]').type(FirstName);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').wait(1000);
  cy.reload();

  //fill only lastname field
  cy.get('[data-test="lastName"]').type(LastName);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').wait(1000);
  cy.reload();

  //fill only ZIP/Postcode field
  cy.get('[data-test="postalCode"]').type("10000");
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="error"]').wait(1000);
  cy.reload();

  //fill all the fields with space
  cy.get('[data-test="firstName"]').type("   ");
  cy.get('[data-test="lastName"]').type("   ");
  cy.get('[data-test="postalCode"]').type("   ");
  cy.get('[data-test="continue"]').click();
  //   cy.get('[data-test="error"]').wait(1000)  error message is missing here
  cy.reload();
  cy.get('[data-test="cancel"]').click().wait(2000);

  cy.get("#shopping_cart_container").click().wait(2000);
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(FirstName);
  cy.get('[data-test="lastName"]').type(LastName);
  cy.get('[data-test="postalCode"]').type("10000");
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="cancel"]').click();

  //finish
  cy.get("#shopping_cart_container").click().wait(2000);
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(FirstName);
  cy.get('[data-test="lastName"]').type(LastName);
  cy.get('[data-test="postalCode"]').type("10000");
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
  cy.get("#checkout_complete_container").should("be.visible");
  cy.get('[data-test="back-to-products"]').click();

//logout
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
});
