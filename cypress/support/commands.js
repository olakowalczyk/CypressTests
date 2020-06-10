/// <reference types="cypress" />

// common
Cypress.Commands.add('navigate', (directorypath) => {
    cy
    .visit(directorypath)
 })

// /dropdown
Cypress.Commands.add('selectFromDropdown', (text) => {
    cy
    .get('#dropdown')
    .select(text)
 })

Cypress.Commands.add('validateDropdownValue', (value) => {
    cy
    .get('#dropdown')
    .should('have.value', value)
 })

// /login
Cypress.Commands.add('login', (username, password) => {
     cy
     .get('#username')
     .type(username)
     .get('#password')
     .type(password)
 })

Cypress.Commands.add('confirmLogin', () => {
    cy
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

Cypress.Commands.add('validateAccessibilityOfElement', (value) => {
    cy
    .contains(value)
    .should('be.enabled')
})

Cypress.Commands.add('validateInaccessibilityOfElement', (value) => {
    cy
    .contains(value)
    .should('not.be.enabled')
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


