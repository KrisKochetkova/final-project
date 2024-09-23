import React from "react";
import Taskitem from "./Taskitem";

const Tasklist = ({task, title}) => {
    return (
        <div>
               <h1 style={{textAlign:'center'}}>{title}</h1>
                {task.map((task, index) => 
                <Taskitem number = {index+1} task={task} key={task.id}/>)}
        </div>
     
    )

}

export default Tasklist;


