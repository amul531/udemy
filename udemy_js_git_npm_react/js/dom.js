var button = document.getElementById("addItem");
var item = document.getElementById("newItem");
var itemList = document.getElementById("itemsList"); //document.querySelector("ul") -->selects the first ul it comes across

function inputLength(input) {
	if (input.value.length > 0)
		return true;
	return false;
}

function addListElement(item) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(item.value));
	itemList.appendChild(li);
	item.value = "";
}

function addOnClick(){
	if (inputLength(item)) {
		addListElement(item);
	}
}

function addOnEnter(event){
	if (inputLength(item) && event.keyCode === 13) {
		addListElement(item);
	}
}

button.addEventListener("click", addOnClick);

item.addEventListener("keypress", addOnEnter);