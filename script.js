const taskInput = document.getElementById("inputtext");
const addButton = document.getElementById("Taskbutton");
const taskList = document.getElementById("tasklist");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const list = document.createElement("li");
    list.innerHTML = `<span>${taskText}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>`;  // Adding text to task and delete button

    taskList.appendChild(list);
    taskInput.value = ""  // Reset input
    
    // Delete functionality
    const deleteBtn = list.querySelector(".delete-btn");  // We are searching inside that specific <li> only
    deleteBtn.addEventListener("click", () => {
        list.remove();
    });
    
    // Edit functionality
    const editBtn = list.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
    const taskSpan = list.querySelector("span");
    const updatedText = prompt("Edit your task" , taskSpan.textContent);

    if(updatedText !== null && updatedText.trim() !== ""){  // Checks if text not changed or empty.
      taskSpan.textContent = updatedText;
    }

    });
});
