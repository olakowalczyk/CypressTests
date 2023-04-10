/// <reference types='cypress' />

describe('Add/Remove elements', () => {

    it('should add element', () => {
        cy
            .visit('add_remove_elements/')
            .addElement()
            .validateAccessibilityOfButton('Delete')
    })

    it('should remove element', () => {
        cy
            .visit('add_remove_elements/')
            .addElement()
            .removeElement()
            .validateInaccessibilityOfButton('Delete')
    })
})