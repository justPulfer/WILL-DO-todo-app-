const inputTag = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const unorderedList = document.getElementById("todoLists");
const completedList = document.getElementById("completedList");

// Function to create a new list item with a checkbox and trash button
function createListItem(text) {
	const listItem = document.createElement("li");
	const listSpan = document.createElement("span");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	const label = document.createElement("label");
	label.textContent = text;

	// Trash btn
	const trashButton = document.createElement("button");
	const trashSVG = document.createElement("I");
	trashSVG.classList.add("bx", "bx-trash");
	trashSVG.style.color = "#ff0000";
	trashButton.appendChild(trashSVG);
	trashButton.classList.add("listItemBtn", "trashBtn");

	// event listener to delete listItem when the trashBtn is clicked
	trashButton.addEventListener("click", (evt) => {
		listItem.remove();
	});

	listSpan.appendChild(checkbox);
	listSpan.appendChild(label);
	listItem.appendChild(listSpan);
	listItem.appendChild(trashButton);

	// add listItem to completed section when checked
	checkbox.addEventListener("change", () => {
		if (checkbox.checked == true) {
			completedList.appendChild(listItem);
		} else {
			completedList.removeChild(listItem);
			todoLists.appendChild(listItem);
		}
	});

	return listItem;
}

// Function to add list item to unordered list
function addItem() {
	if (inputTag.value) {
		const listItem = createListItem(inputTag.value);
		unorderedList.appendChild(listItem);
	}
	// clear the input field
	inputTag.value = "";
}

addBtn.addEventListener("click", addItem);
inputTag.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		addItem();
	}
});
