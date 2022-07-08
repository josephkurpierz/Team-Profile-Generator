const Manager = require('../lib/Manager');
const manager = new Manager("Joe","123","josephkurpierz@gmail.com", "867-5309");

test('if constructor parameters are being retrieved', () => {
  expect(manager.name).toBe("Joe");
  expect(manager.id).toBe("123");
  expect(manager.email).toBe("josephkurpierz@gmail.com");
  expect(manager.officeNumber).toBe("867-5309");
});

test('if getOfficeNumber() retrieves manager office number', () => {
  expect(manager.getOfficeNumber()).toBe("867-5309");
});

test('if getRole() retrieves manager role', () => {
  expect(manager.getRole()).toBe("Manager");
});