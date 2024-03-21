import { taskManager } from "./task";

const storageManager = (function() {
    const saveData = () => {
        /**
         * localStorage can't translate this into JSON immediately
         */
        localStorage.setItem("allTasks", JSON.stringify(taskManager.allTasks))
    }

    return {saveData}
})();

export {storageManager}