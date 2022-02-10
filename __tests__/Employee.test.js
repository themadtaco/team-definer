const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Robert', '1', 'Robert@gmail.com');

    expect(employee.name).toBe('Robert');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('Robert@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Robert', '1', 'r@gmail.com');

    expect(employee.getName()).toBe('Robert');
});

test('gets employee id', () => {
    const employee = new Employee('Robert', '1', 'r@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('gets employee email', () => {
    const employee = new Employee('Robert', '1', 'r@gmail.com');
    
    expect(employee.getEmail()).toBe('r@gmail.com');
});

test('gets role', () => {
    const employee = new Employee('Robert', '1', 'r@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});