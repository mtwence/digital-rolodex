const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, engGitHub) {
        super(name, id, email);
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

