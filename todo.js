import readlineSync from "readline-sync";
import { save, load } from "./HandleFiles.js";

const options = ["ADD", "LIST", "CHECK", "REMOVE"];
const choice = readlineSync.keyInSelect(options);
const list = load();

switch (options[choice]) {
    case "ADD":
        const newToDo = readlineSync.question("What do you want to do? ");
        list.todos.push(`🔴 ${newToDo}`);
        save(list);
        break;
    case "LIST":
        console.log("==================");
        list.todos.forEach(item => {
            console.log(item);
        });
        console.log("==================");
        break;
    case "CHECK":
        const todoChoosed = readlineSync.keyInSelect(list.todos);
        list.todos[todoChoosed].includes("🔴") ?
            list.todos[todoChoosed] = list.todos[todoChoosed].replace("🔴", "🟢") :
            list.todos[todoChoosed] = list.todos[todoChoosed].replace("🟢", "🔴");
        save(list);
        break;
    case "REMOVE":
        const removeTodo = readlineSync.keyInSelect(list.todos);
        list.todos.splice(removeTodo, 1);
        save(list);
        break;
    default:
        break;
}