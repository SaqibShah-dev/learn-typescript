"use strict";
// What are TypeScript Interfaces?
// At its core, an interface in TypeScript is a syntactical contract that defines the 
// expected structure of an object. It provides a way to describe the shape of objects,
//  including their properties and methods, without implementing any functionality. Interfaces
//   solely focus on the structure and type-checking aspects, allowing for better code
//    understanding and validation during development.
const new_user1 = { name: "Alice", age: 30 }; // ✅ no email, fine
const new_user2 = { name: "Bob", age: 25, email: "b@x.com" }; // ✅ also fine
console.log("new_user1: ", new_user1);
console.log("new_user2: ", new_user2);
const test_user = { id: "abc123", name: "Alice" };
// test_user.id = "xyz789"; // ❌ Error: cannot assign to 'id' because it's read-only
console.log("test_user: ", test_user);
console.log("test_user.id: ", test_user.id);
const user1_detail = {
    name: "Alice",
    address: { city: "NYC", zip: "10001" }
};
const user2_detail = {
    name: "Bob",
    address: { city: "LA", zip: "90001" }
};
console.log("user1_detail: ", user1_detail);
console.log("user2_detail: ", user2_detail);
const user = {
    name: "Alice",
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
console.log("User interface with methods: ", user);
console.log("User interface with methods: ", user.greet());
