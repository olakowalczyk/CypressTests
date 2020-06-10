///<reference types='cypress'/>


describe('Dropdown list', function () {
    const option = 'Option 1'
    const option_value = option.slice(-1)
    
    it('should select option form dropdown list', function () {
        cy
        .navigate('dropdown')
        .selectFromDropdown(option)
        .validateDropdownValue(option_value)
    })
})


