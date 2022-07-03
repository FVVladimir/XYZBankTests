import { mainPage } from '../pageObjects/pageObjects';

export const buttonClick = () => {
  cy.get(mainPage.buttonCastomerLogin).click();
  // cy.get("[ng-click='customer()']").click();
  // cy.get('button').first().click();
}