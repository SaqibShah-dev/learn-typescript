// What are TypeScript Interfaces?
// At its core, an interface in TypeScript is a syntactical contract that defines the 
// expected structure of an object. It provides a way to describe the shape of objects,
//  including their properties and methods, without implementing any functionality. Interfaces
//   solely focus on the structure and type-checking aspects, allowing for better code
//    understanding and validation during development.

// Syntax of TypeScript Interfaces
// The syntax of a TypeScript interface is straightforward:

// interface InterfaceName {
//     property1: type;
//     property2: type;
//     // Additional properties and methods can be defined here
// }
// Here's a breakdown of the syntax elements:

// interface: Keyword used to define an interface.
// InterfaceName: Name of the interface following TypeScript naming conventions.
// property1, property2: Properties of the interface.
// type: TypeScript type annotation defining the type of each property.

// Object
// An object is a way to group related data together using key-value pairs. Instead of having
//  separate loose variables, you bundle them into one thing.
// let user = {
//   name: "Alice",
//   age: 30,
//   email: "alice@example.com"
// };
// Inline object type (works, but gets messy fast)
// let user2: { name: string; age: number } = {
//   name: "Alice",
//   age: 30
// };

// interface User {
//   name: string;
//   age: number;
// }

// let user: User = { name: "Alice", age: 30 };

// function greet(u: User): void {
//   console.log(`Hi ${u.name}`);
// }

// let allUsers: User[] = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 }
// ];

// const bad:User = {name:"Alice"};
// console.log("bad object: ",bad); // Error: Property 'age' is missing in type '{ name: string; }' 
// but required in type 'User'.
// Extra property (on a fresh object literal) → error
// const bad2: User = { name: "Alice", age: 30, email: "a@x.com"}
// ❌ Error: 'email' does not exist in type 'User'
// This is called "excess property checking" — it only triggers on object literals assigned 
// directly, not on variables passed through a function. Good to know so it doesn't confuse 
// you later.

// Optional properties
interface NewUser {
  name: string;
  age: number;
  email?: string; // the `?` means this property is optional
}

const new_user1: NewUser = { name: "Alice", age: 30 };               // ✅ no email, fine
const new_user2: NewUser = { name: "Bob", age: 25, email: "b@x.com" }; // ✅ also fine

console.log("new_user1: ", new_user1);
console.log("new_user2: ", new_user2);

// Readonly properties
interface MyUser {
  readonly id: string; // can be set once, never changed after
  name: string;
}

const test_user: MyUser = { id: "abc123", name: "Alice" };
// test_user.id = "xyz789"; // ❌ Error: cannot assign to 'id' because it's read-only
console.log("test_user: ", test_user);
console.log("test_user.id: ", test_user.id);

// Nested objects
interface Address {
  city: string;
  zip: string;
}

interface UserDetails {
  name: string;
  address: Address; // interface referencing another interface
}

const user1_detail: UserDetails = {
  name: "Alice",
  address: { city: "NYC", zip: "10001" }
};
const user2_detail: UserDetails = {
    name: "Bob",
    address: {city:"LA",zip:"90001"}
};

console.log("user1_detail: ", user1_detail);
console.log("user2_detail: ", user2_detail);

// Methods inside an interface
interface User {
  name: string;
  greet(): void; // this object must have a `greet` method
}

const user: User = {
  name: "Alice",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
console.log("User interface with methods: ",user);
console.log("User interface with methods: ",user.greet());

// Extending interfaces (reuse + build on top)
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "Alice",
  age: 30,
  salary: 90000
};


// Quick mental model
// An interface is a contract: "any object assigned to this type must have exactly these 
// properties, with exactly these types."
// It's the tool you'll reach for constantly — API responses, React props, database models,
//  function parameters. Master this and 80% of everyday TypeScript becomes intuitive.

