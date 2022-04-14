const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("jovial", 7, "jovial@gmail", "ucb");

  expect(intern.name).toBe("jovial");

  expect(intern.school).toBe("uc");
});

test("get intern school", () => {
  const intern = new Intern("jovial", 7, "jovial@gmail", "ucb");
  expect(intern.getSchool()).toBe("uc");
});

test("get intern role", () => {
  const intern = new Intern("jovial", 7, "jovial@gmail", "ucb");
  expect(intern.getRole()).toBe("Intern");
});
