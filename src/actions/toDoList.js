export function initTaskList(list){
    return {
        type:"INIT",
        list
    }
}

export function addTask(taskTitle){
    return {
        type:"ADD_TASK",
        task:{ title: taskTitle, state:"TODO" }
    }
}

export function toDoing(taskTitle){
    return{
        type:"TO_DOING",
        taskTitle
    }
}

export function Archive(taskTitle){
    return{
        type:"ARCHIVE",
        taskTitle
    }
}

export function toDone(taskTitle){
    return{
        type:"TO_DONE",
        taskTitle
    }
}