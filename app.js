const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const todoLists = document.getElementById("todoLists");

// Creating variables for the svg btns

const uncheckedSVG =
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"></path></svg>';

const checkedSVG =
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"></path><path d="M10.996 12.556 9.7 11.285l-1.4 1.43 2.704 2.647 4.699-4.651-1.406-1.422z"></path></svg>';

const trashSVG =
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>';

function addWillDo() {
	if (userInput.value) {
		let list = document.createElement("li");

		// Create btns
		const uncheckedBtn = document.createElement("button");
		uncheckedBtn.classList.add("listBtns");
		uncheckedBtn.innerHTML = uncheckedSVG;

		const trashBtn = document.createElement("button");
		trashBtn.classList.add("listBtns");
		trashBtn.innerHTML = trashSVG;

		// Group the li and checked btn
		const listSpan = document.createElement("span");
		listSpan.appendChild(uncheckedBtn);

		list.appendChild(listSpan);
		list.appendChild(trashBtn);
		todoLists.appendChild(list);
	}

	userInput.value = "";
}

addBtn.addEventListener("click", addWillDo);
