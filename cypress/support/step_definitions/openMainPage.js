import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";



Given('User open main page', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

Then('Click button Customer Login', () => {
    cy.contains('Customer Login').click()
    // cy.get('button').first().click()
})

And('Select user name', () => {
    cy.get('select').select('Ron Weasly').type('{enter}')
})

And('Press button deposit', () => {
    cy.contains('Deposit').click()
    cy.get('input').should('have.attr', 'placeholder', 'amount').type('1000')
    cy.get('.btn-default').click()
    cy.get('span.error').should('be.visible')
})

And('Check transaction', () => {
    cy.contains('Transaction').click()
    cy.get('table').should('be.visible')
})

Then('Back to home page', () => {
    cy.get('.home').click()
})