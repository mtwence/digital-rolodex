const Intern = require("../lib/Intern")

describe("Intern", () => {
  const intern = new Intern (
    "Karl Marx",
    "0011",
    "Kmarxie@gmail.com",
    "Harvard",
  );
  describe("constructor", () => {
    it("should create name, id, email, and school", () => {
      expect(intern.name).toEqual("Karl Marx");
      expect(intern.id).toEqual("0011");
      expect(intern.email).toEqual("Kmarxie@gmail.com");
      expect(intern.intSchool).toEqual("Harvard");
      })
    });
  describe("class methods", () => {
    it("should return intern's school", () => {
      expect(intern.getSchool()).toEqual("Harvard");
    });
    it("should return intern role", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});