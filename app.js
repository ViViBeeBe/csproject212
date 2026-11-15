const inputField = document.getElementById("userInput");
const addButton = document.getElementById("addButton");
const outputList = document.getElementById("TaskList");
const descriptionField = document.getElementById("taskDescription");
const dueDateField = document.getElementById("taskDueDate");
const priorityField = document.getElementById("taskPriority");

addButton.addEventListener("click", function() {
    let text = inputField.value.trim();
    let description = descriptionField.value.trim();
    let dueDate = dueDateField.value;
    let priority = priorityField.value;

    if (text !== "") {
        const newItem = document.createElement("li");
        newItem.className = "task-card";

        // Create the checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "mr-2";

        // Create a span for the task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = text;
        if (description) {
            const descriptionSpan = document.createElement("span");
            descriptionSpan.textContent = ` - ${description}`;
            taskSpan.appendChild(descriptionSpan);
        }
        if (dueDate) {
            const dueDateSpan = document.createElement("span");
            dueDateSpan.textContent = ` - Due: ${dueDate}`;
            taskSpan.appendChild(dueDateSpan);
        }
        if (priority) {
            const prioritySpan = document.createElement("span");
            prioritySpan.textContent = ` - Priority: ${priority}`;
            taskSpan.appendChild(prioritySpan);
        }

        // Toggle strikethrough when checked or unchecked
        checkbox.addEventListener("change", function() {
            taskSpan.classList.toggle("completed", checkbox.checked);
        });
        // Create the edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-primary btn-sm ml-2";

        // Edit the task when the button is clicked
        editButton.addEventListener("click", function() {
        const newTitle = prompt("Edit task title:", text);
        const newDescription = prompt("Edit description:", description);
        const newDueDate = prompt("Edit due date (MM-DD-YYYY):", dueDate);
        const newPriority = prompt("Edit priority (Low, Medium, High):", priority);

        if (newTitle !== null && newTitle.trim() !== "")
        {
            text = newTitle.trim();
            description = newDescription !== null ? newDescription : description;
            dueDate = newDueDate !== null ? newDueDate : dueDate;
            priority = newPriority !== null ? newPriority : priority;
            taskSpan.textContent = newTitle;

            if (description) {
            taskSpan.textContent += " - " + description;
            }

            if (dueDate) {
            taskSpan.textContent += " - Due: " + dueDate;
            }

            if (priority) {
            taskSpan.textContent += " - Priority: " + priority;
            }
        }
        });
        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm ml-2";

        // Delete the task when the button is clicked
        deleteButton.addEventListener("click", function() {
        newItem.remove();
        });
        // Add checkbox and text into the list item
        newItem.appendChild(checkbox);
        newItem.appendChild(taskSpan);
        newItem.appendChild(editButton);
        newItem.appendChild(deleteButton);
        outputList.appendChild(newItem);

        inputField.value = "";
        descriptionField.value = "";
        dueDateField.value = "";
        priorityField.value = "Low";
    }
});