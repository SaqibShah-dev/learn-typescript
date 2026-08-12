"use strict";
// A generic lets you write a function, interface, or type that works with any type, 
// while still keeping full type safety — instead of locking it to one specific type, 
// or giving up and using any
// function identity<T>(arg: T): T {
//   return arg;
// }
// console.log("identity function : ",identity("hello"));
// <T> is a placeholder for a type — think of it like a parameter, but for types instead 
// of values. Whoever calls the function decides what T actually is, and TypeScript
//  tracks it precisely.
// The problem generics solve
// Imagine you want a function that just returns whatever you give it, for any type:
// Attempt 1 — locked to one type:
// function identity(arg: number): number {
//   return arg;
// }
// identity("hello"); // ❌ Error — only works with numbers
// Too restrictive — you'd need a separate copy of this function for every type.
// Attempt 2 — using any:
// function identity(arg: any): any {
//   return arg;
// }
// const result = identity("hello");
// result.toFixed(2); // ✅ TS allows this... even though it's completely wrong for a string!
// Works with anything, but you've thrown away all safety — TS won't warn you when you 
// misuse the result, since any disables checking entirely (same trap from the any vs 
// unknown topic).
// Attempt 3 — generics (the actual fix):
function identity(arg) {
    return arg;
}
const result1 = identity("hello"); // T becomes string
const result2 = identity(42); // T becomes number
console.log("result 1 : ", result1.toUpperCase); // ✅ TS knows result1 is a string
console.log("result 2: ", result2.toFixed(2)); // ✅ TS knows result2 is a number
// result1.toFixed(2);    // ❌ Error — string doesn't have toFixed
// This is the whole point: one function, works with any type, but TypeScript still knows
//  exactly which type it is on each specific call.
// How it works
// <T> is just a name — call it whatever you want
// function identity<T>(arg: T): T { return arg; }
// function identity<Value>(arg: Value): Value { return arg; } // same thing, different name
// T is just convention (short for "Type") — same idea as naming a regular parameter a vs 
// value. You'll see T, U, K, V a lot in generic code.
// TypeScript usually infers T automatically
// identity("hello"); // you don't write identity<string>("hello") — TS figures it out
// But you can be explicit if you want:
// identity<string>("hello");
// Generics with arrays
function firstElement(arr) {
    return arr[0];
}
console.log("generics function : ", firstElement([1, 2, 3])); // T = number, returns a number
console.log("Generics funciton : ", firstElement(["a", "b", "c"])); // T = string, returns a string
// Multiple type parameters
function pair(first, second) {
    return [first, second];
}
console.log("multitple type parameters : ", pair("age", 30)); // T = [string, number]
const userResponse = {
    data: { name: "Alice", age: 30 },
    status: 200,
    message: "OK"
};
const productsResponse = {
    data: [{ id: 1, price: 20 }],
    status: 200,
    message: "OK"
};
// Same ApiResponse shape, reused for completely different data types
// function fetchData<T>(url: string): Promise<T> {
//   return fetch(url).then(res => res.json());
// }
// const users = await fetchData<User[]>("/api/users"); // you tell it what shape to expect back
// 1. Generic function: wrapInArray<T>
function wrapInArray(item) {
    return [item];
}
// What it does: takes any single value, wraps it in an array containing just that one value.
// How T gets filled in:
const a = wrapInArray(5); // T = number → a: number[] → [5]
const b = wrapInArray("hello"); // T = string → b: string[] → ["hello"]
const c = wrapInArray({ id: 1 }); // T = { id: number } → c: { id: number }[]
console.log(a); // [5]
console.log(b); // ["hello"]
// What it does: describes an object holding two values of potentially different types, 
// held together as a pair.
const nameAge = {
    first: "Alice",
    second: 30
};
const coordinate = {
    first: 10,
    second: 20
};
const flagWithLabel = {
    first: true,
    second: "isActive"
};
// What it does: takes any type T and says "this can either be that type, or null." This 
// connects directly back to your Optional Properties / union types topics — it's just
//  packaging that pattern into a reusable name.
let username = "Alice";
console.log("user name : ", username);
username = null; // ✅ allowed — Nullable<string> = string | null
console.log("user name update : ", username);
// username = 42;   // ❌ Error — number isn't allowed
let userId = 101;
console.log("user id : ", userId);
userId = null; // ✅ allowed
console.log("user id is update : ", userId);
