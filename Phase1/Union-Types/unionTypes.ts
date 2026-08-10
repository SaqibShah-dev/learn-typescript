// Union 
// A union type says: "this value is definitely one of these specific options — nothing else."
// A union type lets a variable, parameter, or property be one of several specific
//  types — using the pipe symbol | (read as "or").

let my_status: "active" | "inactive";
my_status = "active";   // ✅
console.log("my_status:", my_status);
my_status = "inactive"; // ✅
console.log("my_status:", my_status);
// my_status = "banned";   // ❌ Error: not one of the allowed values

// How it works
// Union of literal strings (most common use case)

type User_Status = "pending" | "active" | "completed";

let user1: User_Status = "pending";
console.log("user status:", user1);
user1 = "active";
console.log("user status:", user1);
// user1 = "done"; // ❌ Error — must be exactly one of the 3 allowed strings

// Union of different types
let id: string | number;

id = 101;       // ✅
console.log("id:", id);
id = "abc123";  // ✅
console.log("id:", id);
// id = true;      // ❌ Error: boolean not allowed


// Union in function parameters
// function printId(id: string | number) {
//   console.log(id);
// }

// printId(101);      // ✅
// printId("abc123"); // ✅
// printId(true);     // ❌ Error

// Union with null / undefined (extremely common in real apps)
// let user: User | null = null; // user might not exist yet

// function findUser(id: string): User | undefined {
//   // returns undefined if not found
// }

// Union of object shapes
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Shape = Circle | Square;

let myShape1: Shape = {kind:"circle",radius:10}
console.log("myShape:", myShape1);

let myShape2: Shape = {kind:"square",side:5};
console.log("myShape2:", myShape2);


// Type Narrowing — how you actually use a union safely
// function printId(id: string | number) {
//   console.log(id.toUpperCase()); // ❌ Error: number doesn't have toUpperCase()
// }

// You fix this with a check — this is called narrowing:
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ✅ TS knows it's a string here
  } else {
    console.log(id.toFixed(2));    // ✅ TS knows it's a number here
  }
}

printId(101);
printId("abc123");
// printId(true);

// Inside each if block, TypeScript automatically narrows the type based on your check. 
// This connects directly to Type Narrowing

// Narrowing objects with in

function getArea(shape: Circle | Square) {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2; // TS knows it's a Circle here
  }
  return shape.side ** 2; // TS knows it's a Square here
}

console.log("Area of myShape1:", getArea(myShape1));
console.log("area of shape2 ",getArea({kind:"circle",radius:10}))