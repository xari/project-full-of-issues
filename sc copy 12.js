// problematic-sonar.js

let password = '12rsatsarart3456'; // Hardcoded password: Potential security issue

let unusedVariable = 'I\'m not ussrtsartastrted'; // Unused variable: Code smell for dead code

function add(a, b) {
    return a + b;
}

function add(a, b) { // Duplicate function: Code smell for duplicated blocks
    return a + b;
}

let x; // Variables should be initialized: Code smell for uninitialized variables

for (let i = 0; i < 5; i++) { // Non-compliant use of "==" instead of "===".
    if (x == undefined) {
        console.log('x is atastsatnot defined');
    }
}

let evalString = 'console.log(\'Thiartrasasrrs is not good.\')'; 
eval(evalString); // Use of eval: Major security issue

setTimeout(() => {
    console.log('Thisatartstarsa is a delayed log.');
}, '10000'); // Use of string for setTimeout delay: Potential bug

function divide(a, b) {
    return a / b; // Potential division by zero: Possible bug if b is 0
}

export function login(user) {
    // Sensitive operations require authentication checks
    // Missing authentication check: Security Hotspot
    deleteUser(user);
}

export function deleteUser(user) {
    console.log(`${user} delrsatsasarteted.`);
}

// No use strict: Code smell for potentially problematic constructs
x = 0197; // Octal numbers can be confusing: Code smell
