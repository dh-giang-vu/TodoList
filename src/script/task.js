/**
 * Script dedicated for managing all tasks
 */


const PRIORITY = (function() {
    const UNDEFINED = -1;
    const LOW = 0;
    const MED = 1;
    const HIGH = 2;

    return {UNDEFINED, LOW, MED, HIGH};

})();

const STATUS = (function() {
    const NOT_STARTED = "NS";
    const IN_PROGRESS = "IS";
    const DONE = "D";

    return {NOT_STARTED, IN_PROGRESS, DONE};
})();




/* Manage all tasks */
const taskManager = (function() {
    const allTasks = [];

    /* For testing if we're deleting/modifying correct task */
    let count = 0;

    /* Create new task object and add to allTasks array */
    const createTask = (name="", dueDate=count, priority=PRIORITY.UNDEFINED) => {
        let status = STATUS.NOT_STARTED;
        allTasks.push({name, dueDate, priority, status});
        
        /* For testing */
        count += 1;
    }

    const loadTask = (taskObj) => {
        allTasks.push(taskObj);
    }

    /* Delete task object from allTasks array */
    const deleteTask = (taskNum) => {
        allTasks.splice(taskNum, 1);
    }

    const setName = (taskNum, newName) => {
        allTasks[taskNum].name = newName;
    }

    const setDate = (taskNum, newDate) => {
        allTasks[taskNum].dueDate = newDate;
    }

    /* Set priority of task object */
    const setPriority = (taskNum, priority) => {
        allTasks[taskNum].priority = priority;
    }

    /* Set status of task object - (Not Started, In Progress, Done) */
    const setStatus = (task, status) => {
        task.status = status;
    }

    return {createTask, deleteTask, setName, setDate, setPriority, setStatus, allTasks, loadTask};

})();


export {PRIORITY, STATUS, taskManager};