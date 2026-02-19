const itemList = document.querySelector("ul");
const inputField = document.querySelector("input");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const inputItem = inputField.value;
    inputField.textContent = ""

    const listItem = document.createElement("li");
    const spanItem = document.createElement("span");
    const deleteButton = document.createElement("button");

    listItem.appendChild(spanItem);
    listItem.appendChild(deleteButton);

    deleteButton.textContent = "Delete";

    console.log(inputItem);

    spanItem.textContent = inputItem;

    itemList.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove();
    })
    inputField.focus();
});