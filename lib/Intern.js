const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, intSchool) {
        super(name, id, email);
        this.intSchool = intSchool;
        const shrug = "¯_(ツ)_/¯";
        if (intSchool === "") {
            this.intSchool = shrug;
        }
    }
    getSchool() { return this.intSchool; }

    getRole() { return "Intern"; }
}
module.exports = Intern;