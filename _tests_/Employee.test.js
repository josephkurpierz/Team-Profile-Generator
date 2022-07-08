const Employee = require('../lib/Employee');
const employee = new Employee("Joe", "123", "josephkurpierz@gmail.com");

test('if employee constructor information is retrieved', () =>{
  expect(employee.name).toBe("Joe");
  expect(employee.id).toBe("123");
  expect(employee.email).toBe("josephkurpierz@gmail.com");
});

test('if getName() retrieves name', () => {
  expect(employee.getName()).toBe("Joe");
});

test('if getId() retrieves the id', () => {
  expect(employee.getId()).toBe("123");
});

test('if getEmail() retrieves the email', () => {
  expect(employee.getEmail()).toBe("josephkurpierz@gmail.com");
});

test('if getRole() retrieves the employee role', () => {
  expect(employee.getRole()).toBe('Employee');
});

