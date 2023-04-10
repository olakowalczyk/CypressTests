///<reference types='cypress'/>

describe('Dropdown list', () => {
    const option = 'Option 1'
    const option_value = option.slice(-1)

    it('should select option form dropdown list', () => {
        cy
            .visit('dropdown')
            .selectFromDropdown(option)
            .validateDropdownValue(option_value)
    })
})


