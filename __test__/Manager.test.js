const Manager = require("../lib/Manager");

test("creates an Manager object", () => {
  const manager = new Manager("jovial", 7, "gmail", "123");

  expect(manager.name).toBe("jovial");
  expect(manager.officeNumber).toBe("123");
});

test("get manager officeNumber", () => {
  const manager = new Manager("jovial", 7, "gmail", "123");
  expect(manager.getOfficeNumber()).toBe("123");
});

test("get manager role", () => {
  const manager = new Manager("jovial", 7, "gmail", "123");
  expect(manager.getRole()).toBe("Manager");
});
