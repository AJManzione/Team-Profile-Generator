const Manager = require('../lib/Manager');

test('gets name for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.name).toBe('Anthony');
})
test('gets id for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.id).toBe('40');
})
test('gets email for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.email).toBe('gmail');
})

test('gets office number for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.officeNum).toBe('200');
})

test('gets role for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.getRole()).toBe('Manager');
})