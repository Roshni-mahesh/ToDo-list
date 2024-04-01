import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your todo?"
        },
        {
            name: "addmore",
            type: "confrim",
            message: "do you want to add more?",
            default: "true"
        }
    ]);
    todo.push(addTask.todo);
    condition = addTask.addmore;
    console.log(todo);
}
;
