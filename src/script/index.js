import '../style.css';

import { createPrioritySelect, displayController, tasksTable } from './dom.js';
import { taskManager } from './task.js';
import { storageManager } from './persistence.js';

const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");



window.onload = () => {
    // On load show the "All Tasks" Tab
    displayController.changeActiveTab(1);
    const objects = storageManager.getData();

    /**
     * If user had no saved tasks, create a default task,
     * else load tasks that user have previously created into
     * taskManager
     */
    if (objects.length === 0) {
        taskManager.createTask("A default task", "due date");
    }
    else {
        for (const obj of objects) {
            taskManager.loadTask(obj);
        }
    }
    // Update display
    displayController.renderTaskBoard(taskManager.allTasks);
}

sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    displayController.changeActiveTab(newActiveIndex);
});


addTaskBtn.addEventListener("click", function() {
    taskManager.createTask();
    displayController.renderTaskBoard(taskManager.allTasks);

    /* 
     * Creating a new task immediately focus on the new task name's input field 
     * Note: clicking add button add a new task
     *  => guaranteed to always have at least 1 task in table when this happen
     *  => we won't accidentally select the header
    */
    const allTasksDOM = document.querySelectorAll(".task");
    const last = allTasksDOM[allTasksDOM.length-1];
    handleTaskInputClick(last);
});


/* Listen to all click events in task table */
tasksTable.addEventListener("click", (e) => {
    const domElem = e.target;

    /* Case when table header was clicked */
    if (domElem.parentElement.classList.contains("tb-header")) {
        // Do nothing
        return;
    }

    /* Handle case when  delete button was pressed */
    if (domElem.tagName === "BUTTON" || domElem.tagName === "I") {
        handleDeleteBtnClick(domElem);
        return;
    }

    if (domElem.classList.contains("task")) {
        handleTaskInputClick(domElem);
    }

    if (domElem.classList.contains("due-date")) {
        handleTaskInputClick(domElem, "date");
    }

    if (domElem.classList.contains("priority")) {
        handlePriorityInputClick(domElem);
    }

});


/* 
 * Return the position of a task in taskManager given its dom element 
 * or one of its child node
*/
function fetchTaskNum(domElem) {
    const allRows = document.querySelectorAll(".tb-row:not(.tb-header)")

    for (let i = 0; i < allRows.length; i++) {
        if (allRows[i].contains(domElem)) {
            return i;
        }
    }

    return null;
}

/* Delete corresponding task from taskManager & update display */
function handleDeleteBtnClick(domElem) {
    const taskNum = fetchTaskNum(domElem);
    taskManager.deleteTask(taskNum);
    displayController.renderTaskBoard(taskManager.allTasks);
}

/* Allow user to edit task name by clicking on the div with that task name */
function handleTaskInputClick(domElem, type="text") {
    // Create new text input field
    const inputField = document.createElement("input");
    inputField.type = type;
    inputField.value = domElem.textContent;
    
    // Replace div with input field
    const parent = domElem.parentElement;
    parent.replaceChild(inputField, domElem);

    // Immediately focus to allow typing
    inputField.focus();

    // Input field lose focus when enter key pressed
    inputField.addEventListener("keypress", (e) => {
        if (e.code == "Enter") {
            inputField.blur();
        }
    })

    // When input field is not focused -> save its value as the new task name
    inputField.addEventListener("blur", () => 
        saveTask(domElem, inputField, parent, type));
}


/* 
 * Helper function: save value from input field to task manager
 * and swap out DOM element (back to being a div)
*/
function saveTask(domElem, inputField, parent, type) {
    // Swap out DOM element
    const newValue = inputField.value;
    domElem.textContent = newValue;
    parent.replaceChild(domElem, inputField);
    
    // Save new value to taskManager
    const taskNum = fetchTaskNum(domElem);

    if (type == "text") {
        taskManager.setName(taskNum, newValue);
    }
    else if (type == "date") {
        taskManager.setDate(taskNum, newValue);
    }
    else {
        taskManager.setPriority(taskNum, newValue);
    }
}


function handlePriorityInputClick(domElem) {
    const inputField = createPrioritySelect();    
    // Replace div with input field
    const parent = domElem.parentElement;
    parent.replaceChild(inputField, domElem)

    // Focus to allow select to blur when user click outside
    inputField.focus()
    // blur when new value selected
    inputField.addEventListener("change", () => {
        inputField.blur();
    })
    // save task when select is blurred
    inputField.addEventListener("blur", () => {
        saveTask(domElem, inputField, parent, "priority");
    })
}


window.onbeforeunload = () => {
    console.log("reload");
    storageManager.saveData();
}



