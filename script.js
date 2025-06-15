document.addEventListener("DOMContentLoaded", function(){

const addButton = document.getElementById("add-task-btn");          //store the button retrieved from the button element

const taskInput = document.getElementById("task-input").value;     //store the input retrieved from the input field
const taskList = document.getElementById("task-list").value;            //store the list retrieved from the ul element



function addTask() {                                                    //add task function
    const taskText = taskInput.value.trim();              //trim the text
    if (taskText === "") {
        alert("Please enter a task.");            //if the task is empty, alert the user
    }

    else {
const newListItem = document.createElement("li");         //create a new list item
newListItem.textContent = "taskText";                   //set the text content



const clearButton = document.createElement("button");         //create a new button
clearButton.textContent = "Remove";                     //set the text content of the button
clearButton.className = "remove-btn";
clearButton.addEventListener("click", function(){

    taskList.removeChild(newListItem);          //remove the list item when the button is clicked
});


newListItem.appendChild(clearButton);          //append the button to the list item
taskList.appendChild(newListItem);          //append the list item to the task list
taskInput.value = "";          //clear the input field

addButton.addEventListener("click", addTask);          //add event listener to the button to call the addTask function when clicked



taskInput.addEventListener('keypress', function(event) {
  // Check if the pressed key is 'Enter'
  if (event.key === 'Enter') {
    addTask(); // Call your function to add the task
  }
});







}
}





addTask();          //call the addTask function when the page loads




});
