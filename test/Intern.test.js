const Intern = require('../lib/Intern');

test('get name for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    expect(intern.name).toBe('Anthony')
})

test('get ID for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    expect(intern.id).toBe('1')
})

test('get email for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    expect(intern.email).toBe('gmail')
})

test('get school information for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    expect(intern.school).toBe('FSU')
})

test('get role for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    expect(intern.getRole).toBe('Intern')
})