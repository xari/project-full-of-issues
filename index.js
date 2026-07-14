// no-unused-vars
let x = 10;

// no-undef
function exampleUndef() {
    return y;
}

// eqeqeq
let a = 5, b = '5';
if (a == b) {
    console.log('Equal');
}

// no-redeclare
let z = 5

// indent
function misaligned() {
    return true;
}

function misaligned2() {
    return true;
}

// semi
let noSemi = 10;

// no-console
console.log('This should not be in production code.');

// curly
if (a) {
    return false;
}

// no-unreachable
function unreachable() {
    return true;
}

function unreachable2() {
    return true;
}

// quotes
let inconsistent = 'quotes';

// no-multiple-empty-lines

let spaceIssue = true;

// comma-dangle
let arr = [
    'a',
    'b'
];
