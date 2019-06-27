const reduser = (state, action)=>{    
    let copy = [...state]
    let index = 0
    switch(action.type){
        case "INIT":
            state = [...action.list]
            break;
            
        case "ARCHIVE":
            index = copy.findIndex(element => element.title === action.taskTitle)
            copy.splice(index,1)
            state = [...copy]
            localStorage.setItem("list", JSON.stringify(state))
            break;

        case "TO_DONE":
            copy.map( element => {if(element.title === action.taskTitle) {element.state = "DONE"}} )
            state = [...copy]
            localStorage.setItem("list", JSON.stringify(state))
            break;

        case "TO_DOING":
            copy.map( element => {if(element.title === action.taskTitle) {element.state = "DOING"}} )
            state = [...copy]
            localStorage.setItem("list", JSON.stringify(state))
            break;
        
        case "ADD_TASK":
            index = copy.findIndex(element => element.title === action.task.title)
            index === -1 ? state = [
                ...state,
                action.task
            ] : alert("this task already exist") 
            localStorage.setItem("list", JSON.stringify(state))
            break;
    }
    return state
};

export default reduser;