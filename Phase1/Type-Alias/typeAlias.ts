// Type Alias
// A type alias lets you give a custom name to any type — not just objects. You create 
// it with the type keyword, and it can represent primitives, unions, objects, functions,
//  tuples, basically anything.

// type ID = string;
// type User = { name: string; age: number };

// Think of it like a nickname for a type — instead of writing the full type everywhere, 
// you write the short name.

// const userId: ID = "12345";
// const user: User = { name: "Alice", age: 30 };

// How it works
// Aliasing a primitive
type ID = string;
let userId: ID = "abc123"; // same as `let userId: string = "abc123"`


// Aliasing an object (same as interface, different syntax)
// type User = {
//   name: string;
//   age: number;
// };

// const user: User = { name: "Alice", age: 30 };

// Aliasing a union (this is where type really shines — interface can't do this)
type Status = "pending" | "active" | "completed";
let taskStatus: Status = "pending"; // ✅
console.log("task status:", taskStatus);
// taskStatus = "done"; // ❌ Error: not one of the allowed values
taskStatus = "active"; // ✅
console.log("task status:", taskStatus);

// Aliasing a function signature
type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;
console.log("Add function:", add(2, 3)); // ✅

// Aliasing a tuple
type Point = [number, number];

const p: Point = [10, 20];
console.log("Point:", p); // ✅

// type vs interface — the key decision point

// Use interface when:
// Defining the shape of an object (especially reusable ones like React props, API models)
// You might need to extend it later, or a library/consumer might need to add to it 
// (declaration merging)

// Use type when:
// You need a union ("a" | "b" | "c")
// You're aliasing a primitive, function, or tuple
// You're combining multiple types with intersections (&)

// This is ONLY possible with `type`, not `interface`
type Status2 = "loading" | "success" | "error";
type ID2 = string | number;

// interface CAN'T do a union directly like this:
// interface Status = "loading" | "success" | "error"; // ❌ Invalid syntax

// One more difference — declaration merging (interface-only feature)
interface User {
  name: string;
}
interface User {
  age: number; // this MERGES with the User above automatically
}
// Now User = { name: string; age: number }
const user2: User = { name: "Alice", age: 30 };
console.log("User:", user2);

type User3 = { name: string };
type User4 = { age: number }; // ❌ Error: Duplicate identifier 'User4'