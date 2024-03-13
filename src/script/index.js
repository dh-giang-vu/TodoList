import '../style.css';
import { PRIORITY, STATUS } from './global_var.js';
import { displayController } from './dom.js';

const sidebarNav = document.querySelector(".nav-list");
const addTaskBtn = document.querySelector("#add-task button");

addTaskBtn.addEventListener("click", function() {
    taskManager.createTask("THis is ANOTHER task name", "due date", PRIORITY.HIGH);
    displayController.renderTaskBoard(taskManager.allTasks);
})

/* Manage all tasks */
const taskManager = (function() {
    const allTasks = [];

    /* Create new task object and add to allTasks array */
    const createTask = (name, dueDate, priority=PRIORITY.UNDEFINED) => {
        let status = STATUS.NOT_STARTED;
        allTasks.push({name, dueDate, priority, status});
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



sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    displayController.changeActiveTab(newActiveIndex);
})




