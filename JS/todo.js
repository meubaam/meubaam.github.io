const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDo (newTodo) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newTodo) {
   const li = document.createElement("li");
   li.id = newTodo.id;
   const span = document.createElement("span");
   span.innerText = newTodo.text;
   const button = document.createElement("button");
   button.innerText = "X";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value //새로운 변수에 input 저장
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    //이런 방식으로 하면 따로 함수 작성하지 않아도 됨.(더 짧게 쓸 수 있음)
    // arrow function.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
//.filter - for each와 비슷 item을 유지하려면 true 값을 가져야
function sexyFilter () {

}