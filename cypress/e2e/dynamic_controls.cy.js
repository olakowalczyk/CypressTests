/// <reference types='cypress' />

describe('Dynamic controls', () => {

    it('should check whether textbox is disabled', () => {
        cy
            .visit('dynamic_controls')
            .enable()
            .disable()
            .validateDisabled()
    })

    it('should check whether textbox is enabled', () => {
        cy
            .visit('dynamic_controls')
            .enable()
            .validateEnabled()
    })

})