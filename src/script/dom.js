/**
 * Script dedicated to functions for creating/manipulating DOM elements
 */

import { PRIORITY } from "./task";


const tasksTable = document.querySelector(".table");


function getPriorityString(value) {
    if (value == PRIORITY.HIGH) {
        return "High";
    }
    else if (value == PRIORITY.MED) {
        return "Medium";
    }
    else if (value == PRIORITY.LOW) {
        return "Low";
    }
    else {
        return "";
    }
}


const createTaskDOM = (task) => {
    const taskItem = document.createElement('li');
    taskItem.className = "tb-row";

    const cbContainer = document.createElement('div');
    cbContainer.classList.add("tb-row-item");
    cbContainer.classList.add("cb-container");

    const cb = document.createElement('input');
    cb.type = "checkbox";
    cbContainer.appendChild(cb);

    const taskName = document.createElement('div');
    taskName.classList.add("tb-row-item");
    taskName.classList.add("task");
    taskName.textContent = task.name;

    const dueDate = document.createElement('div');
    dueDate.classList.add("tb-row-item");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;

    const priority = document.createElement('div');
    priority.classList.add("tb-row-item");
    priority.classList.add("priority");
    priority.textContent = getPriorityString(task.priority);

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add("tb-row-item");
    deleteBtn.classList.add("delete-btn");

    const btn = document.createElement('button');
    

    const icon = document.createElement('i');
    icon.className = "material-icons";
    icon.textContent = "delete";
    btn.appendChild(icon);
    deleteBtn.appendChild(btn);

    taskItem.appendChild(cbContainer);
    taskItem.appendChild(taskName);
    taskItem.appendChild(dueDate);
    taskItem.appendChild(priority);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}


const createPrioritySelect = () => {
    const select = document.createElement("select");

    const op0 = document.createElement("option")
    op0.value = PRIORITY.UNDEFINED;
    op0.innerHTML = "--";

    const op1 = document.createElement("option")
    op1.value = PRIORITY.LOW;
    op1.innerHTML = "Low";

    const op2 = document.createElement("option")
    op2.value = PRIORITY.MED;
    op2.innerHTML = "Medium";

    const op3 = document.createElement("option")
    op3.value = PRIORITY.HIGH;
    op3.innerHTML = "High";

    select.appendChild(op0)
    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);

    return select;
}


const displayController = (function() {

    /* =============== Sidebar Tab Switching functions =============== */
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

    /* Render Task Board Page */
    const renderTaskBoard = (allTasks) => {
        tasksTable.replaceChildren(tasksTable.firstElementChild);
        for (let i = 0; i < allTasks.length; i++) {
            tasksTable.appendChild(createTaskDOM(allTasks[i]));
        }
    }

    return {changeActiveTab, renderTaskBoard}
})();





export {displayController, tasksTable, createPrioritySelect};