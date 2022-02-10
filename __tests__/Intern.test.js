const Intern = require('../lib/Intern');

test('returns an intern object', () => {
    const intern = new Intern('Billy', '02', 'billy@gmail.com', 'UAB');

    expect(intern.name).toBe('Billy');
    expect(intern.id).toBe('02');
    expect(intern.email).toBe('billy@gmail.com');
    expect(intern.school).toBe('UAB');
});

test('returns interns shcool', () => {
    const intern = new Intern('Billy', '02', 'billy@gmail.com', 'UAB');

    expect(intern.getSchool()).toBe('UAB');
});

test('returns intern role', () => {
    const intern = new Intern('Billy', '02', 'billy@gmail.com', 'UAB');

    expect(intern.getRole()).toBe('Intern');
});