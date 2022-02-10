const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Tommy', '1', 't@gmail.com', 'thebigT');

    expect(engineer.name).toBe('Tommy');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('t@gmail.com');
    expect(engineer.github).toBe('thebigT');
});

test('gets github name', () => {
    const engineer = new Engineer('Tommy', '1', 't@gmail.com', 'thebigT');

    expect(engineer.getGithub()).toBe('thebigT');
});

test('gets role', () => {
    const engineer = new Engineer('Tommy', '1', 't@gmail.com', 'thebigT');

    expect(engineer.getRole()).toBe('Engineer');
})