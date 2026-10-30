function addBtnClick(){
    const newTask = document.getElementById("newTask");

    if(newTask.value.length === 0){
        console.log("Nothing in the text box to add");
        newTask.style.borderColor = "red";
    } else {
        addTask(newTask.value);
        newTask.value = "";
        newTask.focus();
        
    }
}
let doneButtons;
function addTask(task){
    const newTaskBox = document.querySelector("ol#currentTask");
    console.log(newTaskBox);
    if (!newTaskBox){
        console.log("box not found");
    }
    let newListElement = document.createElement("li");
    newListElement.innerHTML = '<span class="task-text">'+ task + ' </span><button class="done-btn">&#10006;</button>';
    newTaskBox.appendChild(newListElement);
    doneButtons = document.querySelectorAll(".done-btn");
    doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);

    
}

function removeTask(event){
    let nodeToRemove = event.target.parentNode;
    nodeToRemove.parentNode.removeChild(nodeToRemove);
}

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector("#addButton");
    const newTask = document.getElementById("newTask");
    if (!addButton) {
        console.error("Button with ID 'addButton' not found.");
        return;
    }
    newTask.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            event.preventDefault();
            addButton.click();
        }
    })
    addButton.addEventListener("click", addBtnClick);
    
});


