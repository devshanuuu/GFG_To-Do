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
    <button class="delete-btn">Delete</button>`;  // Adding text to task and delete button

    taskList.appendChild(list);
    taskInput.value = ""  // Reset input

    const deleteBtn = list.querySelector(".delete-btn")  // We are searching inside that specific <li> only
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
});
