import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('Open main page', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

Then('press button Bank Manager Login', () => {
    cy.get('button').contains('Bank Manager Login').click()
})

And('press button Add Customer', () => {
    cy.contains('Add Cust').click()
})

And('type first name', () => {
    cy.get('input').eq(0).as('firstNameInput')
    cy.get('@firstNameInput').type('new first name')
})

And('type last name', () => {
    cy.get('input').eq(1).as('lastNameInput')
    cy.get('@lastNameInput').type('new last name')
})

And('type post code', () => {
    cy.get('input').eq(2).as('newPostCode')
    cy.get('@newPostCode').type('new post code')
})

And('press button Add CAstomer', () => {
    cy.get('button.btn-default').click()
})

Then('press button Customers', () => {
    cy.contains('Customers').click()
    cy.contains('new first name').scrollIntoView()
    cy.get('button.home').click()
})