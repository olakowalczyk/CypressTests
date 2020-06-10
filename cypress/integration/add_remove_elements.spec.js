///<reference types='cypress'/>


describe('Add/Remove elements', function () {
    const button = 'Delete'

    it('should add element', function () {
        cy
        .navigate('add_remove_elements/')
        .addElement()
        .validateAccessibilityOfElement(button)
    })

    it('should remove element', function () {
        cy
        .navigate('add_remove_elements/')
        .removeElement()
        .validateInaccessibilityOfElement(button)
    })


})