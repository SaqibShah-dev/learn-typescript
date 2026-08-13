// A generic constraint restricts what types are allowed to be used for T — instead
//  of "any type at all," you say "any type, as long as it has certain properties." 
// You do this with the extends keyword.

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
// T extends { length: number } means: "T can be anything, but it must at least have 
// a .length property that's a number."

console.log("get length function : ",getLength("Hello"));

// The problem this solves
// Without a constraint, a fully open generic can't safely use any properties inside the
//  function — because TypeScript has no idea what T will actually be.
// function getLength<T>(item: T): number {
//   return item.length; // ❌ Error: Property 'length' does not exist on type 'T'
// }

// TypeScript is right to complain — if someone calls getLength(42), there's no .length on 
// a number. The function body can't assume anything about T unless you tell TypeScript 
// what to expect.

// console.log("get length function for number parameter : ",getLength(45));

// Adding the constraint fixes it:
// function getLength<T extends { length: number }>(item: T): number {
//   return item.length; // ✅ TS now knows every possible T has .length
// }

console.log("get length function pass string : ",getLength("hello"));     // ✅ strings have .length → 5
console.log("get length function pass array : ",getLength([1, 2, 3]));   // ✅ arrays have .length → 3
console.log("get length function pass object : ",getLength({ length: 10 })); // ✅ any object with a length property works
// getLength(42);           // ❌ Error — numbers don't have .length

// constraint via inline object shape
function logLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}


// constraint via interface
interface HasId {
  id: number;
}

function findById<T extends HasId>(list: T[], id: number): T | undefined {
  return list.find(item => item.id === id);
}
// Now T can be any type — Todo, User, Product — as long as it has an id: number field. 
// This is the exact findById example from the Generics topic, now with the constraint 
// explained properly:

// findById(TodoList, 3);   // ✅ Todo has id: number
// findById(userList, 3);   // ✅ User has id: number (if it does)
// findById(["a", "b"], 3); // ❌ Error — plain strings don't have .id

// constraint via keyof

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Alice", age: 30 };

console.log("get property function pass name : ",getProperty(user, "name")); // ✅ "name" is a valid key of user → returns string
console.log("get property function pass age : ",getProperty(user, "age"));  // ✅ "age" is valid → returns number
// getProperty(user, "email"); // ❌ Error — "email" isn't a key on user

// K extends keyof T means: "K must be one of the actual property names that exist on T." 
// This prevents you from ever asking for a property that doesn't exist — TypeScript checks
//  it at compile time, not at runtime.

// constraint via union
function double<T extends number | string>(value: T): T {
  if (typeof value === "number") return (value * 2) as T;
  return (value+" "+value) as T;
}
// Restricts T to only number or string — not literally "anything," but not one fixed
//  type either.

console.log("double function pass number : ",double(21));
console.log("double function pass string ",double("hello"));


// multiple constraints combined

interface HasId { id: number; }
interface HasName { name: string; }

function printInfo<T extends HasId & HasName>(item: T) {
  console.log(`${item.id}: ${item.name}`);
}
console.log("printInfo function pass multiple constraints : ");
printInfo({id:1,name:"ali",age:22});


// Quick mental model
// T extends X doesn't mean "T is a subtype of X" the way you might expect from other 
// languages' inheritance — it means "T must be a type that at least has everything X 
// requires." T can have more than X, just not less.
