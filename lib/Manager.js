const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name = '') {
        super(name);

        this.officeNumber
    }

    getRole() {
        // Overwrites to return 'Manager'
    }
}

module.exports = Manager;