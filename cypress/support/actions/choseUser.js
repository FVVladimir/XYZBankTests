import { selectForm } from '../pageObjects/pageObjects';


export const choseUser = () => {
    cy.get(selectForm.selectUser).select('Ron Weasly').type('{enter}')
}