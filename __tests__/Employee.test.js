const Employee = require("../lib/Employee");

describe("Employee", () => {
  const employee = new Employee("Jeffrey", "007", "Jeff007@gmail.com");
  describe("constructor", () => {
    it("should create name, id, and email", () => {
      expect(employee.empName).toEqual("Jeffrey");
      expect(employee.empId).toEqual("007");
      expect(employee.empEmail).toEqual("Jeff007@gmail.com");
    });
  });
  describe("class methods", () => {
    it("should return employee name", () => {
      expect(employee.getName()).toEqual("Jeffrey");
    });
    it("should return employee id", () => {
      expect(employee.getId()).toEqual("007");
    });
    it("should return employee email", () => {
      expect(employee.getEmail()).toEqual("Jeff007@gmail.com");
    });
    it("should return employee role", () => {
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
