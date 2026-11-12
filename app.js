const inputField = document.getElementById("userInput");
const addButton = document.getElementById("addButton");
const outputList = document.getElementById("TaskList");

addButton.addEventListener("click", function() {
    const text = inputField.value.trim();

    if (text !== "") {
        const newItem = document.createElement("li");
        newItem.className = "d-flex align-items-center mb-2";

        // Create the checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "mr-2";

        // Create a span for the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = text;

        // Toggle strikethrough when checked or unchecked
        checkbox.addEventListener("change", function() {
            taskSpan.classList.toggle("completed", checkbox.checked);
        });

        // Add checkbox and text into the list item
        newItem.appendChild(checkbox);
        newItem.appendChild(taskSpan);
        outputList.appendChild(newItem);

        inputField.value = "";
    }
});