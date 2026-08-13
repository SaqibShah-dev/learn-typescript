// An intersection type combines multiple types into one, using &. The result is a new 
// type that has all the properties from every type combined — not "either/or" like a 
// union, but "all of them, together."

type Person = { name: string; age: number };
type Employee = { salary: number };

type StaffMember = Person & Employee;

const staff: StaffMember = {
  name: "Alice",
  age: 30,
  salary: 90000
};

// Union vs Intersection — the key mental difference
type A = { a: string };
type B = { b: number };

type Union = A | B;         // "either A OR B" — has a OR b (at least one)
type Intersection = A & B;  // "A AND B combined" — has BOTH a AND b


// Combining object shapes
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type Post = {
  title: string;
  body: string;
};

type PublishedPost = Post & Timestamped;

const post: PublishedPost = {
  title: "Learning TS",
  body: "Intersection types are useful...",
  createdAt: new Date(),
  updatedAt: new Date()
};


// Intersection is the type equivalent of interface extends
interface person { name: string; age: number; }
interface employee extends person { salary: number; }

// The type version does the exact same thing, just with & instead of extends:
// type Person = { name: string; age: number; };
// type Employee = Person & { salary: number; };


// Combining more than two types
type HasId = { id: number };
type HasName = { name: string };
type HasEmail = { email: string };

type FullUser = HasId & HasName & HasEmail;

const user: FullUser = {
  id: 1,
  name: "Alice",
  email: "alice@x.com"
};