const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")

// event lisener
submitBtn.addEventListener("click",addTastToList);

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
    
    // remove tast from input fild
    todoInput.value='';
}
// submitBtn.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("amake click kreche");
// }) 
