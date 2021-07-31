const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")

// event lisener
submitBtn.addEventListener("click",addTastToList);
todoList.addEventListener("click",checkOrDelete);

// function
function addTastToList(event){

    event.preventDefault();
    // captureUserInput
    const todo = todoInput.value;
    //console.log(todo);

    //create a div
    const todoDiv = document.createElement("div");

    // Assign to do div
    todoDiv.classList.add("todo");

    // create the list element
    const todoItem = document.createElement("li");

    // add todo-item class to the list
    todoItem.classList.add("todo-item");

    // add to do to the list
    todoItem.innerText = todo;

    // atach list ot the div
    todoDiv.appendChild(todoItem);

    // add div to the ul list 
    todoList.appendChild(todoDiv);

    // add check button to the list
    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(checkBtn);

    // add trash button to the list
    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashBtn);
    
    // remove tast from input fild
    todoInput.value='';

}

function checkOrDelete(event){
    const item = event.target;
    //User want ot delete todo
    if( item.classList[0] == "trash" ){
        const todo = item.parentElement; 
        todo.remove();
    }
    else if( item.classList[0] == "check" ){
        const todo = item.parentElement;
        todo.classList.add("completed");
        item.remove();
    }
}
// submitBtn.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("amake click kreche");
// }) 
