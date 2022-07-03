import { registrationForm } from '../pageObjects/pageObjects';

export const addDeposit = () => {
    cy.get(registrationForm.buttonDeposit).click()
    cy.get(registrationForm.depositInput).type('1000')
    // .should('have.attr', 'placeholder', 'amount').type('1000')
    cy.get(registrationForm.btnAddDeposit).click()
    cy.get(registrationForm.successMessage).should('be.visible')
}