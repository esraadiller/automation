describe("Login", () => {
    it("should login successfully", () => {
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
            cy.successfulLogin(firstUsername,
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