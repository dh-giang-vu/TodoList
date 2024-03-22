import { taskManager } from "./task";

const storageManager = (function() {
    const saveData = () => {
        /**
         * localStorage can't translate this into JSON immediately
         */
        localStorage.setItem("allTasks", JSON.stringify(taskManager.allTasks));
    }

    const getData = () => {
        const tasks = JSON.parse(localStorage.getItem("allTasks")); 
        return tasks;
    }

    return {saveData, getData}
})();

export {storageManager}