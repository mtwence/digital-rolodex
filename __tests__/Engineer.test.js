const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const engineer = new Engineer(
    "Karl Marx",
    "0011",
    "Kmarxie@gmail.com",
    "Kmarx",
  );
  describe("constructor", () => {
    it("should create name, id, email, and github username", () => {
      expect(engineer.name).toEqual("Karl Marx");
      expect(engineer.id).toEqual("0011");
      expect(engineer.email).toEqual("Kmarxie@gmail.com");
      expect(engineer.engGitHub).toEqual("Kmarx");
      })
    });
  describe("class methods", () => {
    it("should return engineer github username", () => {
      expect(engineer.getGitHub()).toEqual("Kmarx");
    });
    it("should return engineer role", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
