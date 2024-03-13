import '../style.css';
import { PRIORITY, STATUS } from './global_var.js';
import { displayController, tasksTable } from './dom.js';

const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");



/* Manage all tasks */
const taskManager = (function() {
    const allTasks = [];

    /* For testing if we're deleting/modifying correct task */
    let count = 0;

    /* Create new task object and add to allTasks array */
    const createTask = (name=count, dueDate=count, priority=PRIORITY.UNDEFINED) => {
        let status = STATUS.NOT_STARTED;
        allTasks.push({name, dueDate, priority, status});
        
        /* For testing */
        count += 1;
    }

    /* Delete task object from allTasks array */
    const deleteTask = (taskNum) => {
        allTasks.splice(taskNum, 1);
    }

    /* Set priority of task object */
    const setPriority = (task, priority) => {
        task.priority = priority;
    }

    /* Set status of task object - (Not Started, In Progress, Done) */
    const setStatus = (task, status) => {
        task.status = status;
    }

    return {createTask, deleteTask, setPriority, setStatus, allTasks};

})();


/* Manage all projects */
const projectManager = (function() {
    const allProjects = [];

    const createProject = (name) => {
        const tasksArray = [];
        allProjects.push({name, tasksArray});
    }

    return {createProject, allProjects};

})();


window.onload = () => {
    displayController.changeActiveTab(1);
    taskManager.createTask("A default task", "due date", PRIORITY.MED);
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


tasksTable.addEventListener("click", (e) => {
    const domElem = e.target;
    if (domElem.tagName === "BUTTON" || domElem.tagName === "I") {
        console.log(domElem);

        const elemList = tasksTable.querySelectorAll(domElem.tagName);
        console.log(elemList);

        for (let i = 0; i < elemList.length; i++) {
            if (domElem === elemList[i]) {
                taskManager.deleteTask(i);
                displayController.renderTaskBoard(taskManager.allTasks);
            }
        }
    }
});




