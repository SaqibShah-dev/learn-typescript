// Type narrowing is the process of moving a variable from a broader, less precise type
//  (like a union) to a more specific type within a conditional block of code. TypeScript
//  analyzes your standard JavaScript runtime checks—called type guards—to automatically 
// infer the narrower type inside that specific execution path.

// Type narrowing means helping TypeScript understand the exact type of a variable when 
// there are multiple possibilities.

// The Problem: Too Many Possibilities
// Imagine a function where an input can be either  a string or a number:

// function printId(id: string | number) {
//   // TypeScript is worried here!
//   // If 'id' is a number, we cannot use '.toUpperCase()'
//   // If 'id' is a string, we cannot use '.toFixed()'
  
// //   console.log(id.toUpperCase()); // ❌ Error!
// }

// The Solution: Type NarrowingYou use a standard JavaScript if statement to check the 
// type at runtime. TypeScript is smart. It watches your if statement and changes the
//  type inside that block.

function printId(id: string | number) {
  if (typeof id === "string") {
    // 1. Inside this block, TypeScript knows 'id' is definitely a string
    console.log(id.toUpperCase()); //  Works!
  } else {
    // 2. Since it wasn't a string, it MUST be a number here
    console.log(id.toFixed());     //  Works!
  }
}
printId("123");
printId("Myid");


// 3 Common Ways to Narrow Types1. Checking Primitives (typeof)Use typeof for basic 
// things like string, number, or boolean.

// if (typeof value === "string") { /* value is a string */ }

// exp:
function printModel(model: number | string){
    if(typeof model === "string"){
        console.log("model type is string : ",model);
    }
    else{
        console.log("model type is number : ",model);
    }
}

printModel("BRR-78");
printModel(485);


// 2. Checking Objects (in) If you have different objects, check for a property that only 
// exists in one of them using in.

type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); //  TypeScript knows it is a Bird
  }
}
const myBird:Bird = {
    fly(){
        console.log("Bird is flying ...");
    },
}
move(myBird);

// interface Circle { kind: "circle"; radius: number; }
// interface Square { kind: "square"; side: number; }

// function getArea(shape: Circle | Square) {
//   if ("radius" in shape) {
//     return Math.PI * shape.radius ** 2; // TS knows: Circle here
//   }
//   return shape.side ** 2; // TS knows: Square here
// }

// 3. Checking Classes (instanceof) Use instanceof for built-in objects or classes 
// like Date.
// if (value instanceof Date) {
//   console.log(value.toUTCString()); //  TypeScript knows it is a Date object
// }


class Dog { bark() { console.log("Woof"); } }
class Cat { meow() { console.log("Meow"); } }

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TS knows: Dog here
  } else {
    animal.meow(); // TS knows: Cat here
  }
}

const dog1 = new Dog();
makeSound(dog1);

const cat = new Cat();
makeSound(cat);

// 4. Discriminated UnionsThis pattern relies on a common, literal property (often called
//  a kind, type, or status) shared across multiple object types to uniquely identify them

interface Circle {
  kind: "circle"; // Discriminant
  radius: number;
}

interface Square {
  kind: "square"; // Discriminant
  sideLength: number;
}

type Shape = Circle | Square;

function getAreaLoc(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      // shape is narrowed to 'Circle'
      return Math.PI * shape.radius ** 2;
    case "square":
      // shape is narrowed to 'Square'
      return shape.sideLength ** 2;
  }
}

const shape1: Square = {kind:"square",sideLength:12};
console.log(getAreaLoc(shape1)); // 144 (12 * 12)

const shape2: Circle = { kind: "circle", radius: 5 };
console.log(getAreaLoc(shape2)); // ~78.54 (π * 5²)

// 5.Custom type guards — writing your own narrowing function
interface User { name: string; role: string }

// The predicate 'input is User' enforces the type narrowing on success
function isUser(input: any): input is User {
  return input && typeof input.name === "string" && typeof input.role === "string";
}

function processData(data: unknown) {
  if (isUser(data)) {
    // data is now narrowed to 'User'
    console.log(`Welcome, ${data.name}`);
  }
}
