// variable are type of containers that save the data It can be created by using VAR, LET and CONST

var varDeclared = "yvar"
console.log(varDeclared)
let letDeclared = 12.0
console.log(letDeclared)
const constDeclared = 24

// variable declared using var can be re-declared and upadte it and scope of VAR is global scope
// variable declared using let can't be re-declared but can bu updated and scope of LET is block scope
// variable declared using const can't be re-declared or updated and scope is block scope


var varDeclared = "Avar" //re-declared
console.log(varDeclared)
varDeclared = "Svar" //updated
console.log(varDeclared)

// let letDeclared = "A" //shows error
letDeclared = "S"
console.log(letDeclared)


// const constDeclared = "A" //shows erroe
constDeclared = "S" //shows error 
console.log(constDeclared)