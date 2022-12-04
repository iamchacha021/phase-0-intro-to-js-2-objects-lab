// Write your solution in this file!
const employee = {
    name:'ghost',
    streetAddress:'Madison Ave'
}



function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee
}
updateEmployeeWithKeyAndValue(employee, 'Sam', '11 Broadway' )


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'sam', '12 Broadway')


// *********
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = { ...employee };
    newEmployee[key]
    // let newEmployee = deleteFromEmployeeByKey(employee, 'name')
    delete newEmployee.name
    return newEmployee
}
deleteFromEmployeeByKey(employee, key, value)



function destructivelyDeleteFromEmployeeByKey(employee, key){
    let newEmployee = employee
    newEmployee[key]
    delete newEmployee.name
    return newEmployee
}