// operarnumeros (num1,num2,op)
// op=+-*/


function operarnumeros(a, b, c) {
    if (c == '+') {
        return a + b;
    }
    else if (c == '-') {
        return a - b;
    }
    else if (c == '*') {
        return a * b;
    }
    else if (c == '/'){
        return a / b;
    }
        
    else if (c == '/') {
        if (b == 0) {return 0;}
        else {return a / b;}
    }
        
}

console.log(operarnumeros(4, 8, '+'));
console.log(operarnumeros(4, 8, '-'));
console.log(operarnumeros(4, 8, '*'));
console.log(operarnumeros(4, 8, '/'));
console.log(operarnumeros(4, 0, '/'));

