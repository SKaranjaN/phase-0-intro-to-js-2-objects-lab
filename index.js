// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue() {
    const employee = {
        name:"Sam",
        streetAddress:"11 Broadway",
    };
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey() {
    const employee = {
        name:"Sam",
        streetAddress:"11 Broadway",
    };
    delete employee.name;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
  }
  const newEmployee4 = deleteFromEmployeeByKey(employee ,"streetAddress");