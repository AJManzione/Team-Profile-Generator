const Manager = require('../lib/Manager');

test('gets office number for manager', () => {
    const manager = new Manager('Anthony', '40', 'gmail', '200')

    expect(manager.officeNum).toBe('200');
})