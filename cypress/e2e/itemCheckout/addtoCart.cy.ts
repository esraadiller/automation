describe("checkout", () => {
  it("should checkout an item successfully", () => {
    cy.visitLoginPage();
    cy.fixture("login").then(
      ({
        firstUsername,
        secondUsername,
        thirdUsername,
        fourthUsername,
        fifthUsername,
        sixthUsername,
        password,
        wrongUsername,
        wrongPassword,
      }) => {
        cy.successfulLogin(
          firstUsername,
          secondUsername,
          thirdUsername,
          fourthUsername,
          fifthUsername,
          sixthUsername,
          password,
          wrongUsername,
          wrongPassword
        );
      }
    );
    cy.addtocart();
    cy.fixture("checkout").then(({ FirstName, LastName}) => {
      cy.checkout(FirstName, LastName);
    });
  });
});
