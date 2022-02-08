const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Robert', '1', 'Robert@gmail.com');

    expect(employee.name).toBe('Robert');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('Robert@gmail.com');
});