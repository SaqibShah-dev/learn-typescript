"use strict";
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
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Completed"] = "COMPLETED";
})(Status || (Status = {}));
let taskStatus = Status.Active;
console.log(taskStatus); // "ACTIVE"
taskStatus = Status.Completed;
console.log("status updated : ", taskStatus);
