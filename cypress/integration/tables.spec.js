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
            .url()
            .should('include', '#delete')
    })

    it('it should sort ascending by last name', function () {
        const sorted = ['Bach', 'Conway', 'Doe', 'Smith']
        cy
            .sortBy('Last Name')
            .get('#table1 > tbody > tr > td:nth-child(1)')
            .should(($els) => {
                // map jquery elements to array of their innerText
                const elsText = $els
                    .toArray()
                    .map(el => el.innerText)
                expect(elsText)
                    .to
                    .deep
                    .eq(sorted)
            })

    })

})
