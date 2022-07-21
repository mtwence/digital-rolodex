const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum = officeNum;
        const shrug = "¯_(ツ)_/¯";
        if (officeNum === "") {
            this.officeNum = shrug;
        }
    }

    getOffNum () { return this.officeNum; }

    getRole () { return "Manager"; }
}