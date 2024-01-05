describe("un-successful Login", () => {
    it("should show error messages", () => {
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
            cy.unsuccessfulLogin(firstUsername,
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