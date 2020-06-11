/// <reference types='cypress' />

describe('Dynamic controls', function () {

    it('should check whether textbox is disabled', function () {
        cy
            .visit('dynamic_controls')
            .enable()
            .disable()
            .validateDisabled()
    })

    it('should check whether textbox is enabled', function () {
        cy
            .visit('dynamic_controls')
            .enable()
            .validateEnabled()
    })

})