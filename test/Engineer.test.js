const Engineer = require('../lib/Engineer')

test('gets the engineer name', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.name).toBe('Anthony')
})

test('gets the engineer ID', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.id).toBe('5')
})

test('gets the engineer email', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.email).toBe('gmail')
})

test('gets the engineer github', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.github).toBe('ajmanzione')
})

test('gets the engineer role', () => {
    const engineer = new Engineer('Anthony', '5', 'gmail', 'ajmanzione')

    expect(engineer.getRole).toBe('Engineer')
})