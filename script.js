let tasks = [];      // Array to store tasks
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskInput = document.getElementById("inputtext");
const addButton = document.getElementById("Taskbutton");
const taskList = document.getElementById("tasklist");


// Common function for adding, deleting and update logic
const createTask = (taskText) => {
     
    const list = document.createElement("li");
    list.innerHTML = `<span>${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>`;  // Adding text to task, delete and edit button
      taskList.appendChild(list);

// Delete functionality
    const deleteBtn = list.querySelector(".delete-btn");
      // We are searching inside that specific <li> only
    deleteBtn.addEventListener("click", () => {
        list.remove();
        
        tasks = tasks.filter(t => t !== taskText)  // Deleting the task from storage also
        saveTasks();   
    });  

// Edit functionality
    const editBtn = list.querySelector(".edit-btn");

    editBtn.addEventListener("click", () => {
    const taskSpan = list.querySelector("span");
    const updatedText = prompt("Edit your task" , taskSpan.textContent);

    if(updatedText !== null && updatedText.trim() !== ""){  // Checks if text not changed or empty.
      taskSpan.textContent = updatedText;
      
      const index = tasks.indexOf(taskText);  // Updating the task in storage also
      if(index !== -1){ // condition if text is not found in array
        tasks[index] = updatedText;
    }
    saveTasks();

    }
 });

}

addButton.addEventListener("click", () => {
    const taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    
    createTask(taskText);

    tasks.push(taskText); // Add the task to array
    saveTasks();
    taskInput.value = ""  // Reset input
    
});

// Function for loading data on refresh
const loadTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));  // Converting string data to array 

    if(storedTasks){
        tasks = storedTasks;

        tasks.forEach(task => {
            createTask(task);
        });
    }
};

loadTasks();