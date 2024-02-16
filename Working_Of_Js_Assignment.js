//Q1)
// Call the function before declaration to demonstrate hoisting
console.log("hoisting of addFn of",addNumber(5, 7)); // Should print 12

// Function declaration
function addNumber(num1, num2) {
    return num1 + num2;
}

//Q2)
// Call the function before declaration to demonstrate hoisting
console.log("hoisting of multiplyFn,multiplyNumber(3, 4)); // Should print 12

// Function expression
const multiplyNumber = function(num1, num2) {
    return num1 * num2;
};

// Now the function is defined and can be called normally
console.log(multiplyNumber(5, 7)); // Should print 35

//Q3)
function sumNumbers(num1, num2) {
    console.log(result); // Logs undefined due to hoisting
    var result = num1 + num2;
    return result;
}

console.log(sumNumbers(3, 4)); // Should print 7

//Q4)
{
    console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    console.log(varVariable); // undefined
    console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization

    let letVariable = "Let Variable";
    var varVariable = "Var Variable";
    const constVariable = "Const Variable";

    console.log(letVariable); // Let Variable
    console.log(varVariable); // Var Variable
    console.log(constVariable); // Const Variable
}

//Q5)
{
    console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization

    let letVariable = "Let Variable";
    console.log(letVariable); // Let Variable
}


