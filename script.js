// Create list
let input = document.getElementById("newtodo");
let list = document.getElementById("todo");
let add = document.querySelector("#add");
// relocate completed task to done section
let doneList = document.getElementById("done");


// Create list
const inputLength = () => input.value.length;


const createListToToDo = () => {
	let newItem = document.createElement("li");
	newItem.setAttribute("class", "list-container");
	newItem.innerHTML = 
	   `<label for="todo">${input.value}</label>
	   	<button class="delete">delete</button>`
	list.appendChild(newItem); //add
	input.value = "";
}

const addListAfterKeydown = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListToToDo();
	} 
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListToToDo();
	} 
}

input.addEventListener("keypress", addListAfterKeydown);
add.addEventListener("click", addListAfterClick);

// relocate completed task to done section
moveToDone = (event) => {
	let finishedTask = event.target;
	if (finishedTask && finishedTask.tagName === "LABEL") { //nodeName or tagName = "MUST BE UPPERCASE". They only return UPPERCASE
	let doneItem = document.createElement("Li"); //will be converted to lowercase
	doneItem.setAttribute("class", "list-container");
	doneItem.innerHTML =
		`<label class="done-toggle" for="done">${ finishedTask.innerText }</label>
		 <button class="delete">delete</button>`;/*(1) or .textContent (2) using event.target only return type name*/
    doneList.appendChild(doneItem); //relocation

    finishedTask.parentElement.remove(); //deletion
	}	
}

list.addEventListener("click", moveToDone);

//resume list from done to todo section
resumeToToDo = (event) => {
	let doneTask = event.target
	if (doneTask && doneTask.tagName === "LABEL") { 
		
	let newItem = document.createElement("li"); 
	newItem.innerHTML = 
	   `<label for="todo">${doneTask.innerText}</label>
	    <button class="delete">delete</button>`
	list.appendChild(newItem); //relocation

    doneTask.parentElement.remove(); //deletion
	}	
}

doneList.addEventListener("click", resumeToToDo)


//delete items (without if, this function can also delete relocated lists)
const deleteAfterClick = (event) => {
	let deleteBtn = event.target;
	if (deleteBtn && deleteBtn.nodeName === "BUTTON") {
		deleteBtn.parentElement.remove();
	}
}

list.addEventListener("click", deleteAfterClick);
doneList.addEventListener("click", deleteAfterClick);





