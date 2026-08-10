// Optional Properties
// An optional property is an object property that might or might not exist. You mark 
// it with a ? right after the property name.

// ? means "this key is allowed to not exist at all." Once it's optional, TypeScript 
// forces you to prove it exists (if, ?., ??) before you use it — turning a common 
// runtime crash into a compile-time reminder.

interface User {
  name: string;
  age: number;
  email?: string; // optional — may or may not be present
}
// email?: string really means: email: string | undefined — either it's a string, or it's
//  completely missing/undefined.

let new_user: User = {name:"Alice",age:22};
console.log("new_user: ",new_user);

let new_user2: User = {name:"Bob",age:30,email:"bob@example.com"};
console.log("new_user2: ",new_user2);

// How it works
// Without ? — property is required

interface New_User {
  name: string;
  email: string; // required
}

// const new_user3: New_User = { name: "Alice" }; // ❌ Error: missing property 'email'
const new_user4: New_User = { name: "Bob", email: "b@x.com" };

// It's shorthand for a union with undefined
interface User {
  email?: string;
}
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

function printEmail(user: User) {
  if (user.email) {
    console.log(user.email.toUpperCase()); // ✅ TS knows it's defined here
  }
}
printEmail(new_user); // ✅ no email, so nothing printed
printEmail(new_user2); // ✅ prints "BOB@EXAMPLE.COM"

// Nullish coalescing ?? — pairs naturally with optional properties

function getEmail(user: User) {
  return user.email ?? "no email provided"; // fallback if undefined/null
}
console.log("getEmail(new_user): ", getEmail(new_user)); // "no email provided"
console.log("getEmail(new_user2): ", getEmail(new_user2)); // "bob@example.com"

// Optional function parameters (same ? symbol, different context)

function greet(name: string, greeting?: string) {
  console.log(`${greeting ?? "Hello"}, ${name}`);
}

greet("Alice");                // "Hello, Alice"
greet("Alice", "Hey there");   // "Hey there, Alice"