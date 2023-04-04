/// <reference types='cypress' />

describe('Add/Remove elements', function () {

    it('should add element', function () {
        cy
            .visit('add_remove_elements/')
            .addElement()
            .validateAccessibilityOfButton()
    })

    it('should remove element', function () {
        cy
            .visit('add_remove_elements/')
            .removeElement()
            .validateInaccessibilityOfButton()
    })
})