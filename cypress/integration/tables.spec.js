/// <reference types="cypress" />

describe('Tables - Actions', function () {

    beforeEach(function () {
        cy.visit('tables')
    })

    it('should edit first row', function () {
        cy
            .get('#table1 > tbody')
            .children()
            .first()
            .contains('edit')
            .click()
        cy
            .url()
            .should('include', '#edit')
    })

    it('should delete first row', function () {
        cy
            .get('#table1 > tbody')
            .children()
            .first()
            .contains('delete')
            .click()
        cy
            .url()
            .should('include', '#delete')
    })

    it.only('it should sort ascending by last name', function () {
        cy
        .sortBy('Last Name')
        .get('#table1 > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.text', 'Bach')
        .get('#table1 > tbody > tr:nth-child(2) > td:nth-child(1)').should('have.text', 'Conway')
        .get('#table1 > tbody > tr:nth-child(3) > td:nth-child(1)').should('have.text', 'Doe')
        .get('#table1 > tbody > tr:nth-child(4) > td:nth-child(1)').should('have.text', 'Smith')
    })
})