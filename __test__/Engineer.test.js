const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Jovial", 7, "jovial@gmail", "github");

  expect(engineer.name).toBe("Jovial");

  expect(engineer.github).toBe("github");
});

test("get engineer github", () => {
  const engineer = new Engineer("Jovial", 7, "jovial@gmail", "github");
  expect(engineer.getGithub()).toBe("github");
});

test("get engineer role", () => {
  const engineer = new Engineer("Jovial", 7, "jovial@gmail", "github");
  expect(engineer.getRole()).toBe("Engineer");
});
