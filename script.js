// Selectors
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('addBtn')
const todoList = document.getElementById('todo-list')
const filterOption = document.querySelector(".filter-todo");

//Event listners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTOdo)

// Functions
function addTodo(event){
// prevent form from submitting
event.preventDefault();
// create Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
todoList.appendChild(todoDiv);
// check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fa fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.append(completedButton);
// check trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class ="fa fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.append(trashButton);
// clear todo input value
todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    if( item.classList.contains("trash-btn")){
        item.parentElement.remove();
    }

    if(item.classList.contains("complete-btn")){
        const todo = item.parentElement;
        todo.classList.add("completed");
    }
}


function filterTOdo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                    }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}
