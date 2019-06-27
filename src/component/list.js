import React from "react";
import "./list.css";

export const List = (props) => {
    return (
        <ul>
            {props.taskList.map((element, index) => {
                if(element.state === props.state){
                    return (
                        <li key={index} onClick={() => props.toggleTaskState(element)}>{element.title}</li>
                    )
                }
            })}
        </ul>
    );
}