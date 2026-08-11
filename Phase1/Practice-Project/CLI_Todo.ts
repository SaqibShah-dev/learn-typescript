// npm i --save-dev @types/node
// install it

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

type status = "active" | "inactive" | "completed";
interface todo  {
    id: number,
    title: string,
    status: status
}

const TodoList: todo[] = [];

while(true){
    console.log("1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Update Todo");
    console.log("4. Delete Todo");
    console.log("5. Exit");
    const choice = await askQuestion("Enter you choice ");
        switch(choice) {
            case "1":
                const title = await askQuestion("Enter todo title: ");
                addTodo(title);
                break;
            case "2": 
                viewTodos();
                break;
            case "3":
                const as
                rl.question("Enter todo ID to Update : ",(id)=>{
                   updateTodo(parseInt(id));
                })
                break;
            case "4":
                rl.question("Enter todo id: ",(id) =>{
                    deleteTodo(parseInt(id));
                })
                break;
            case "5":
                console.log("Exiting...");
                rl.close();
                break;
        }
}

function askQuestion(msg: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(msg, (answer) => {
      resolve(answer);
    });
  });
}

function addTodo(title: string):void {
    const newTodo: todo = {
        id: TodoList.length + 1,
        title: title,
        status: "active"
    };
    TodoList.push(newTodo);
    console.log("Todo added successfully!");
}

function viewTodos(): void{
    for(let todo of TodoList){
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Status: ${todo.status}`);
    }
}
function updateTodo(id: number):void{
    const todo = TodoList.find(todo => todo.id === id);
    if(todo){
        rl.question("Enter new title: ",(newTitle) =>{
            todo.title = newTitle;
            console.log("Todo updated successfully!");
        });
    }
    else
    {
        console.log("Todo not found!");
    }
}

function deleteTodo(id: number):void{
    const index = TodoList.findIndex(todo => todo.id === id);
    if(index !== -1){
        TodoList.splice(index,1);
        console.log("Todo deleted successfully!");
    }
    else{
        console.log("Todo not found!");
    }
}