/// <reference types='cypress' />
var data = require('../fixtures/loginData.json')

describe('Login form', () => {

    beforeEach(() => {
        cy.visit('login')
    })

    it('should login with valid credentials', () => {
        cy
            .login(data.valid_username, data.valid_password)
            .validateMessage('You logged into a secure area!')
    })

    it('should logout', () => {
        cy
            .login(data.valid_username, data.valid_password)
            .logout()
            .validateMessage('You logged out of the secure area!')
    })

    it('should not login because of invalid credentials', () => {
        cy
            .login(data.invalid_username, data.invalid_password)
            .validateMessage('Your username is invalid!')
    })

})