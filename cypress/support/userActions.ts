declare namespace Cypress {
  interface Chainable {
    /**
     * @param firstUsername - takes the standard user
     * @param secondUsername - takes the locked_out_user
     * @param thirdUsername - takes the problem_user
     * @param fourthUsername -takes the performance_glitch_user
     * @param fifthUsername -tskes the error_user
     * @param sixthUsername -takes the visual_user
     * @param password - takes the correct password
     * @param wrongUsername- takes the non existing username
     * @param wrongPassword - takes the wrong password
     * @param addtocart - finishes the proccess of adding items to the card
     * @param checkout - finishes the process of checkouting an item
     * @param FirstName - Takes the First Name at the Card details screen
     * @param LastName - Takes the Last Name at the Card details screen
     */

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

    addtocart(): Chainable<Element>;
    checkout(FirstName: string, LastName: string): Chainable<Element>;
  }
}
