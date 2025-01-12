const list = document.getElementById("list");
const button = document.getElementById("button");
const item = document.getElementById("item");


const addItemToList = () => {
    let shoppingList = "";
    shoppingList = item.value;
    item.value = "";
    item.focus();

    const listItem = document.createElement("li");
    const anotherButton = document.createElement("button");
    const span = document.createElement("span");

    //This two lines below will give a value for each element everytime it is clicked.
    span.textContent = shoppingList;
    anotherButton.textContent = "Delete";

    // This three lines below will add to the DOM after they have a value everytime it is clicked.
    listItem.appendChild(span);
    listItem.appendChild(anotherButton);
    list.appendChild(listItem);

    // The added list will be deleted everytime the delete button is clicked

    anotherButton.addEventListener("click", () => {

        listItem.remove();

    });

}

// Event whenever it is click
button.addEventListener("click", addItemToList);

// Event whenever "Enter" is press
item.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItemToList();
    }
})



