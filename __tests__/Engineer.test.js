const Engineer = require('../lib/Engineer')

test('gets the engineer github', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.github).toBe('ajmanzione')
})