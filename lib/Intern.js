const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = '') {
        super(name);

        this.school;
    }

    getSchool() {

    }

    getRole() {
        // Overridden to return 'Intern'
    }
}

module.exports = Intern;