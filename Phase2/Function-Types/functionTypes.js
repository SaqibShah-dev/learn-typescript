"use strict";
// A function type describes the shape of a function as a value — what it accepts, what it 
// returns — so you can store it in a variable, pass it as a parameter, or name it for reuse,
//  the same way interface/type describe the shape of an object.
function add(a, b) {
    return a + b;
}
const res = add(4, 5);
console.log("result : ", res);
