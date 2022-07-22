const Manager = require("../lib/Manager");

describe("Manager", () => {
  const manager = new Manager (
    "Karl Marx",
    "0011",
    "Kmarxie@gmail.com",
    "2121",
  );
  describe("constructor", () => {
    it("should create name, id, email, and office number", () => {
      expect(manager.name).toEqual("Karl Marx");
      expect(manager.id).toEqual("0011");
      expect(manager.email).toEqual("Kmarxie@gmail.com");
      expect(manager.officeNum).toEqual("2121");
      })
    });
  describe("class methods", () => {
    it("should return manager's office number", () => {
      expect(manager.getOffNum()).toEqual("2121");
    });
    it("should return manager role", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});