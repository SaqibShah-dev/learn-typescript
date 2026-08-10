// Any vs Unknown 
// Both any and unknown mean "I don't know the type yet" — but they behave completely 
// differently once you try to use the value.
// any says "trust me, don't check anything."
// unknown says "I don't know yet — but you have to prove it before you use it."

let a: any = "hello";
let u: unknown = "hello";
// any → turns OFF type checking completely for that value. You can do anything with it, TS 
// won't stop you.
// unknown → keeps type checking ON. You must prove what it is before you can use it.

// This is the single most important safety distinction to learn early, because any is 
// tempting (it "just works") but quietly destroys the entire point of using TypeScript.
console.log("a: ", a.toUpperCase()); // ✅ works, TS doesn't check
// a = true;
// console.log("a: ", a.toUpperCase());
// console.log("u: ", u.toUpperCase()); // ❌ Error: Object is of type 'unknown'.
console.log(" u : ",u);
u = 45;
console.log("u : ",u);

// How it works
// any — no safety net at all

let value: any = "hello";

value.toUpperCase(); // ✅ allowed

value = 42;           // ✅ allowed, can become anything

// TypeScript just... stops checking. Any of these could crash at runtime, and TS gives 
// you zero warning. It's basically writing plain JavaScript again, just disguised inside
//  a .ts file.

// unknown — safety net stays on
// let value: unknown = "hello";
// value.toUpperCase(); // ❌ Error: Object is of type 'unknown'

let value1: unknown = "hello";

if (typeof value1 === "string") {
  value1.toUpperCase(); // ✅ TS knows it's a string here
}