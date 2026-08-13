// TypeScript's literal types allow developers to specify exact values for variables,
//  function parameters, or properties, enhancing type safety by ensuring variables can
//  only hold predefined values.
// Allow variables to have specific, exact values.
// Enhance code reliability by restricting permissible values.

let direction: "up" = "up"; // this variable can ONLY ever be the exact string "up"

// How it works
// The difference between a general type and a literal type
let a: string = "hello"; // "string" — could be ANY string
a = "anything at all";   // ✅ fine — general type allows any string value

// single literal
let b: "hello" = "hello"; // "hello" — the literal type itself
// b = "anything at all";    // ❌ Error — only the exact string "hello" is allowed

// string is a general type — a whole category. "hello" as a type is a literal type — one 
// single, exact value within that category.

// Literal types on their own are rarely useful — they shine in unions
// union of string literals (the common pattern — what you already use)
type Direction = "up" | "down" | "left" | "right";

let move: Direction = "up";    // ✅
console.log("direction : ",move);
move = "left";                  // ✅
console.log("direction update : ",move);
// move = "diagonal";              // ❌ Error — not one of the 4 exact allowed values

let myDir:Direction = "left";
console.log("my direction : ",myDir);

type status = "active" | "inactive" | "completed";


// union of numeric literals
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let diceChange:DiceRoll = 1;
console.log("dice change : ",diceChange);
diceChange = 6;
console.log("dice change : ",diceChange);

// Why let and const infer literal types differently

function setStatus(s: status) {
  console.log(s);
}

let status1 = "active";
// setStatus(status1); // ❌ TypeScript ERROR here — this happens at compile time, in your editor/tsc, before running

const status2 = "active";
setStatus(status2); // ✅ No error — compiles fine

// Literal types in object properties
interface Circle {
  kind: "circle"; // literal type — always exactly the string "circle"
  radius: number;
}

interface Square {
  kind: "square"; // literal type — always exactly the string "square"
  side: number;
}
