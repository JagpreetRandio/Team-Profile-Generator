const Employee = require('./Employee');
// employee js is used 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // added school validation
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;