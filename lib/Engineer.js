const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name = '') {
        super(name);

        // GitHub username
        this.github;
    }

    getGethub() {

    }

    getRole(){
        // Overridden to return 'Engineer
    }
}

module.exports = Engineer;