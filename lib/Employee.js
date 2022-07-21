class employee {
    constructor(empName, empId, empEmail) {
        const shrug = "¯_(ツ)_/¯";
        this.empName = empName;
        this.empId = empId;
        this.empEmail = empEmail;
        if (empName === "") {
            this.empName = shrug;
        }
        if (empId === "") {
            this.empId = shrug;
        }
        if (empEmail === "") {
            this.empEmail = shrug;
        }
    }

    getName() { return this.empName; }

    getId() { return this.empId; }

    getEmail() { return this.empEmail; }

    getRoles() { return "Employee"; }
}
module.exports = Employee;


