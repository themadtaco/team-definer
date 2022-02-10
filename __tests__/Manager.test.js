const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('Rick', '01', 'rick@gmail.com', '50');

    expect(manager.name).toBe('Rick');
    expect(manager.id).toBe('01');
    expect(manager.email).toBe('rick@gmail.com');
    expect(manager.officeNumber).toBe('50');
});

test('return role', () => {
    const manager = new Manager('Rick', '01', 'rick@gmail.com', '50');

    expect(manager.getRole()).toBe('Manager');
});