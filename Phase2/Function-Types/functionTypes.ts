// A function type describes the shape of a function as a value — what it accepts, what it 
// returns — so you can store it in a variable, pass it as a parameter, or name it for reuse,
//  the same way interface/type describe the shape of an object.

function addNumber(a: number, b: number): number {
  return a + b;
}

const res = addNumber(4,5);
console.log("result : ",res);

const sub : (a:number , b:number)=>number = (a,b) => a-b;

// sub is a variable whose type is "a function that takes two numbers, returns a number."
//  The right side ((a,b) => a-b) doesn't need its own annotations — TS matches it against
//  the type already declared on the left.

function processInput(callback: (input: string) => void) {
  callback("hello");
}

processInput((text) => console.log(text.toUpperCase())); // ✅ matches the shape
// processInput((num: number) => {}); // ❌ Error: doesn't match — expects a string param

type MathOp = (a: number, b: number) => number;

const add: MathOp = (a, b) => a + b;
const subtract: MathOp = (a, b) => a - b;
const multiply: MathOp = (a, b) => a * b;


type Callback = (result: string) => void;

function fetchData(url: string, onComplete: Callback) {
  // pretend this fetches something
  onComplete("done!");
}

fetchData("/api/data", (result) => {
  console.log(result); // TS knows `result` is a string automatically
});

type Greet = (name: string, greeting?: string) => string;
const greet: Greet = (name, greeting = "Hello") => `${greeting}, ${name}`;

type MultiplierFactory = (factor: number) => (n: number) => number;

const makeMultiplier: MultiplierFactory = (factor) => (n) => n * factor;

const double = makeMultiplier(2);
console.log(double(5)); // 10


// inline function type as a parameter
function onClick(handler: () => void) { handler(); }

// named function type
type Validator = (value: string) => boolean;
const isNotEmpty: Validator = (value) => value.length > 0;

// function type with optional param
type Logger = (msg: string, level?: "info" | "error") => void;

// function returning a function
type Factory = (id: number) => () => string;