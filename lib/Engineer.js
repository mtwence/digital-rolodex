const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, engGithub) {
        super(name, id, email);
        this.engGithub = engGithub;
        const shrug = "¯_(ツ)_/¯";
        if (engGithub === "") {
            this.engGithub = shrug;
        }
    }

    getGithub() { return this.engGithub; }

    getRole() { return 'Engineer'; }
}
module.exports = Engineer;

