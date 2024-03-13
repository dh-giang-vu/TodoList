import '../style.css'
import {PRIORITY, STATUS} from './global_var.js'

const sidebarNav = document.querySelector(".nav-list");

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




const displayController = (function() {
    let activeIndex = 1;
    const sidebarNavLinks = document.querySelectorAll('.nav-list a');
    const mainContentPgs = document.querySelector(".main-content").children;
    
    const removeActive = () => {
        sidebarNavLinks[activeIndex].classList.remove("active");
        mainContentPgs[activeIndex].classList.remove("active");
    }

    const makeActive = () => {
        sidebarNavLinks[activeIndex].classList.add("active");
        mainContentPgs[activeIndex].classList.add("active");
    }

    const changeActiveTab = (newIndex) => {
        removeActive();
        activeIndex = newIndex;
        makeActive();
    }
    
    // Display page with index === 0 on page load 
    window.onload = makeActive();

    return {changeActiveTab}
})();








sidebarNav.addEventListener("click", function(e) {
    if (e.target.tagName !== 'A') {
        return;
    }
    const newActiveIndex = e.target.getAttribute('index');
    displayController.changeActiveTab(newActiveIndex);
})


