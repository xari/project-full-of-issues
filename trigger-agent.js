// problematic-sonar.js

let password = '123456'; // Hardcoded password: Potential security issue

let unusedVariable = 'I\'m not used'; // Unused variable: Code smell for dead code

function add(a, b) {
    return a + b;
}

function add(a, b) { // Duplicate function: Code smell for duplicated blocks
    return a + b;
}

let x; // Variables should be initialized: Code smell for uninitialized variables
