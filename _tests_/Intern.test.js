const Intern = require('../lib/Intern');
const intern = new Intern("Joe", "123", "josephkurpierz@gmail.com", "UofM");

test('if Intern constructor retrieves parameters', () => {
  expect(intern.name).toBe("Joe");
  expect(intern.id).toBe("123");
  expect(intern.email).toBe("josephkurpierz@gmail.com");
  expect(intern.school).toBe("UofM");
});

test("if getSchool() retrieves Intern's school", () => {
  expect(intern.getSchool()).toBe("UofM");
});

test("if getRole() retrieves Intern's role", () => {
  expect(intern.getRole()).toBe("Intern");
});