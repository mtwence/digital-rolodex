const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("Jeffrey", "007", "Jeff007@gmail.com");
    console.log(employee);
    describe("constructor", () => {
      it("should create name, id, and email", () => {
        expect(employee.empName).toEqual("Jeffrey");
        expect(employee.empId).toEqual("007");
        expect(employee.empEmail).toEqual("Jeff007@gmail.com");
      });
    });  
