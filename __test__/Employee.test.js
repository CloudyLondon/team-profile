const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Jovial", 7, "jovial@gmail.com");

  expect(employee.name).toBe("Jovial");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("jovial@gmail.com");
});

test("get employee name", () => {
  const employee = new Employee("Jovial", 7, "jovial@gmail.com");
  expect(employee.getName()).toBe("Jovial");
});

test("get employee id", () => {
  const employee = new Employee("Jovial", 7, "jovial@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee email", () => {
  const employee = new Employee("Jovial", 7, "jovial@gmail.com");
  expect(employee.getEmail()).toBe("jovial@gmail.com");
});
