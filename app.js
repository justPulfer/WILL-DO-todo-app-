const inputTag = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const uncompletedList = document.getElementById("todoLists");
const completedList = document.getElementById("completedList");
const completedTag = document.getElementById("completedTag");

// Creating variables for the svg btns

const trashSVG =
	'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #f01515;transform: ;msFilter:;"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>';

// Function to create a new list item with a checkbox and trash button
function createListItem(text) {
	const listItem = document.createElement("li");
	const listSpan = document.createElement("span");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	const label = document.createElement("label");
	label.textContent = text;

	const trashButton = document.createElement("button");
	trashButton.innerHTML = trashSVG;
	trashButton.classList.add("listItemBtn", "trashBtn");

	// event listener to delete listItem when the trashBtn is clicked
	trashButton.addEventListener("click", (evt) => {
		listItem.remove();
	});

	listSpan.appendChild(checkbox);
	listSpan.appendChild(label);
	listItem.appendChild(listSpan);
	listItem.appendChild(trashButton);

	// Event to add listItem to completed section when checked
	checkbox.addEventListener("change", (evt) => {
		if (checkbox.checked == true) {
			uncompletedList.removeChild(listItem);
			completedList.appendChild(listItem);

			// Function to display <p> when ul has li
			if (completedList.childNodes.length > 0) {
				completedTag.style.display = "block";
			} else {
				completedTag.style.display = "none";
			}
		} else {
			completedList.removeChild(listItem);
			uncompletedList.appendChild(listItem);
		}
	});

	return listItem;
}

// Function to add list item to unordered list
function addItem() {
	if (inputTag.value) {
		const listItem = createListItem(inputTag.value);
		uncompletedList.appendChild(listItem);
	}
	// clear the input field
	inputTag.value = "";
}

addBtn.addEventListener("click", addItem);
