const Employee = require('../lib/Employee')
const employee = new Employee("Joe", "123", "josephkurpierz@gmail.com");

test('if employee constructor information is retrieved', () =>{
  expect(employee.name).toBe("Joe");
  expect(employee.id).toBe("123");
  expect(employee.email).toBe("josephkurpierz@gmail.com");
});



