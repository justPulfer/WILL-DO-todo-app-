const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const todoLists = document.getElementById("todoLists");

addBtn.addEventListener("click", (e) => {
    const list = document.createElement("li");
    list.appendChild(userInput.value);
    todoLists.appendChild(list);
    console.log(list);
})

