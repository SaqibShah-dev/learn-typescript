"use strict";
// Any vs Unknown 
// Both any and unknown mean "I don't know the type yet" — but they behave completely 
// differently once you try to use the value.
let a = "hello";
let u = "hello";
// any → turns OFF type checking completely for that value. You can do anything with it, TS 
// won't stop you.
// unknown → keeps type checking ON. You must prove what it is before you can use it.
// This is the single most important safety distinction to learn early, because any is 
// tempting (it "just works") but quietly destroys the entire point of using TypeScript.
console.log("a: ", a.toUpperCase()); // ✅ works, TS doesn't check
// a = true;
// console.log("a: ", a.toUpperCase());
// console.log("u: ", u.toUpperCase()); // ❌ Error: Object is of type 'unknown'.
console.log(" u : ", u);
u = 45;
console.log("u : ", u);
// How it works
// any — no safety net at all
let value = "hello";
value.toUpperCase(); // ✅ allowed
value = 42; // ✅ allowed, can become anything
