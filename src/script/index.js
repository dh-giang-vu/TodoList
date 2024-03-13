import '../style.css';

import { displayController, tasksTable } from './dom.js';
import { taskManager } from './task.js';

const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");


window.onload = () => {
    displayController.changeActiveTab(1);
    taskManager.createTask("A default task", "due date");
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
});


/* Listen to all click events in task table */
tasksTable.addEventListener("click", (e) => {
    const domElem = e.target;

    /* Handle case when  delete button was pressed */
    if (domElem.tagName === "BUTTON" || domElem.tagName === "I") {
        handleDeleteBtnClick(domElem);
    }


});



/* Delete corresponding task from taskManager & update display */
function handleDeleteBtnClick (domElem) {
    const elemList = tasksTable.querySelectorAll(domElem.tagName);

    for (let i = 0; i < elemList.length; i++) {
        if (domElem === elemList[i]) {
            taskManager.deleteTask(i);
            displayController.renderTaskBoard(taskManager.allTasks);
        }
    }
}




