"use strict";
// Optional Properties
// An optional property is an object property that might or might not exist. You mark 
// it with a ? right after the property name.
// email?: string really means: email: string | undefined — either it's a string, or it's
//  completely missing/undefined.
let new_user = { name: "Alice", age: 22 };
console.log("new_user: ", new_user);
let new_user2 = { name: "Bob", age: 30, email: "bob@example.com" };
console.log("new_user2: ", new_user2);
// const new_user3: New_User = { name: "Alice" }; // ❌ Error: missing property 'email'
const new_user4 = { name: "Bob", email: "b@x.com" };
// is basically the same as:
// interface User {
//   email: string | undefined;
// }
// You must check before using it
// function printEmail(user: User) {
//   console.log(user.email.toUpperCase());
//   // ❌ Error: 'email' is possibly 'undefined'
// }
// TypeScript won't let you assume the optional property exists. You have to narrow it first,
//  same idea as union narrowing:
function printEmail(user) {
    if (user.email) {
        console.log(user.email.toUpperCase()); // ✅ TS knows it's defined here
    }
}
printEmail(new_user); // ✅ no email, so nothing printed
printEmail(new_user2); // ✅ prints "BOB@EXAMPLE.COM"
// Nullish coalescing ?? — pairs naturally with optional properties
function getEmail(user) {
    return user.email ?? "no email provided"; // fallback if undefined/null
}
console.log("getEmail(new_user): ", getEmail(new_user)); // "no email provided"
console.log("getEmail(new_user2): ", getEmail(new_user2)); // "bob@example.com"
