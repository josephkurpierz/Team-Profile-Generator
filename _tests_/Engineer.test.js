const Engineer = require('../lib/Engineer');
const engineer = new Engineer("Joe","123","josephkurpierz@gmail.com","josephkurpierz");

test('if constructor parameters are being retrieved',() => {
  expect(engineer.name).toBe("Joe");
  expect(engineer.id).toBe("123");
  expect(engineer.email).toBe("josephkurpierz@gmail.com");
  expect(engineer.github).toBe("josephkurpierz");
});

test('if getGithub() retrieves github name', () => {
  expect(engineer.getGithub()).toBe("josephkurpierz");
});

test('if getRole() retrieved engineer role', () => {
  expect(engineer.getRole()).toBe("Engineer");
});