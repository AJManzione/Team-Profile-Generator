const Intern = require('../lib/Intern');

test('get school information for the intern', () => {
    const intern = new Intern('Anthony', '1', 'gmail', 'FSU')

    XPathExpression(intern.school).toBe('FSU')
})