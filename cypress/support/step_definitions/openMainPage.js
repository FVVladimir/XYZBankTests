import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import { addDeposit } from "../actions/addDeposit.js";
import { buttonClick } from '../actions/buttonClick.js';
import { choseUser } from "../actions/choseUser.js";



Given('User open main page', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
})

Then('Click button Customer Login', () => {   
       buttonClick();
})

And('Select user name', () => {    
    choseUser();
})

And('Press button deposit', () => {   
    addDeposit();
})

And('Check transaction', () => {
    cy.contains('Transaction').click()
    cy.get('table').should('be.visible')
})

Then('Back to home page', () => {
    cy.get('.home').click()
})