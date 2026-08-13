// An enum (enumeration) in TypeScript is a special feature that allows you to define a 
// set of named constants.


// syntax :
// enum enum_name {

// }

// enum Status {
//   Active,
//   Inactive,
//   Completed
// }
// console.log(Status.Active);    // 0
// console.log(Status.Inactive);  // 1
// console.log(Status.Completed); // 2


// String enums
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Completed = "COMPLETED"
}

let taskStatus: Status = Status.Active;
console.log(taskStatus); // "ACTIVE"
taskStatus = Status.Completed;
console.log("status updated : ",taskStatus);

// Using an enum in an interface
// enum Status {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Completed = "COMPLETED"
// }

interface Todo {
  id: number;
  title: string;
  status: Status; // instead of: status: "active" | "inactive" | "completed"
}

const todo: Todo = {
  id: 1,
  title: "Learn enums",
  status: Status.Active
};


// string enum (most common choice when you do use enums)
enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH"
}

function setPriority(p: Priority) {
  console.log(`Priority set to ${p}`);
}

setPriority(Priority.High); // ✅
// setPriority("HIGH");         // ❌ Error — must use Priority.High, not the raw string


// Quick mental model
// An enum is a named, real object grouping related constants together, checked at compile 
// time and available at runtime.
// A union type is a purely compile-time restriction on allowed values, with zero runtime 
// footprint.