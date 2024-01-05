describe("Login", () => {
    it("should login on all accounts successfully", () => {
      cy.visitLoginPage();
          cy.fixture('login').then(({firstUsername,
              secondUsername,
              thirdUsername,
              fourthUsername,
              fifthUsername,
              sixthUsername,
              password,
              wrongUsername,
              wrongPassword}) => {
            cy.successfulLoginAll(firstUsername,
              secondUsername,
              thirdUsername,
              fourthUsername,
              fifthUsername,
              sixthUsername,
              password,
              wrongUsername,
              wrongPassword)
          })
    });
  });