const Employee = require('../lib/Employee');

test('returns the name of the employee being added', () => {
    const employee = new Employee('Anthony')

    expect(employee.name).toBe('Anthony');
})

test('returns the employee id', () => {
    const employee = new Employee('Anthony', '1')

    expect(employee.id).toBe('1')
})

test('returns the employee email', () => {
    const employee = new Employee('Anthony', '1', 'imanzioneaj@gmail.com')

    expect(employee.email).toBe('imanzioneaj@gmail.com')
})

