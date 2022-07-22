const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, empId, empEmail, engGitHub) {
        super(empName, empId, empEmail);
        this.engGitHub = engGitHub;
        const shrug = "¯\_(ツ)_/¯";
        if (engGitHub === "") {
            this.engGitHub = shrug;
        }
    }

    getGitHub() { return this.engGitHub; }

    getRole() { return 'Engineer'; }
}
module.exports = Engineer;

