/// <reference types="cypress" />

// /dropdown
Cypress.Commands.add('selectFromDropdown', (text) => {
    cy
    .get('#dropdown')
    .select(text)
 })

Cypress.Commands.add('validateDropdownValue', (text) => {
    cy
    .get('#dropdown')
    .should('have.value', text)
 })

// /login
Cypress.Commands.add('login', (username, password) => {
     cy
     .get('#username')
     .type(username)
     .get('#password')
     .type(password)
     .get('.radius')
     .click()
})

Cypress.Commands.add('validateMessage', (text) => {
    cy
    .get('#flash')
    .should('include.text', text)
})

// /secure
Cypress.Commands.add('logout', () => {
    cy
    .get('.icon-signout')
    .click()
})

// /add_remove_elements/
Cypress.Commands.add('addElement', () => {
    cy
    .contains('Add Element')
    .click()
})

Cypress.Commands.add('removeElement', () => {
    cy
    .contains('Delete')
    .click()
}) 

Cypress.Commands.add('validateAccessibilityOfButton', (button_name) => {
    cy
    .contains(button_name)
    .should('be.enabled')
})

Cypress.Commands.add('validateInaccessibilityOfButton', (button_name) => {
    cy
    .contains(button_name)
    .should('not.exist')
})

// /dynamic_controls
Cypress.Commands.add('enable', () => {
    cy
    .get('button')
    .contains('Enable')
    .click()
})

Cypress.Commands.add('disable', () => {
    cy
    .get('button')
    .contains('Disable')
    .click()
})

Cypress.Commands.add('validateDisabled', () => {
    cy
    .get('#input-example > input', )
    .should('not.be.enabled')
})

Cypress.Commands.add('validateEnabled', () => {
    cy
    .get('#input-example > input')
    .should('be.enabled')
})

// /tables
Cypress.Commands.add('sortBy', (column) => {
    cy
    .get('#table1')
    .children()
    .first()
    .children()
    .children()
    .contains(column)
    .click()
})