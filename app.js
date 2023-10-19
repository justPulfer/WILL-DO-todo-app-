const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const todoLists = document.getElementById("todoLists");

function addWillDo() {
    if (userInput.value) {
        let list = document.createElement("li");
        list.innerHTML = userInput.value;
        todoLists.appendChild(list);
        userInput.value = '';
        
    }
}

addBtn.addEventListener("click", addWillDo);