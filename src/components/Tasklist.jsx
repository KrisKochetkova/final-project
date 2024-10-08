/* trunk-ignore-all(prettier) */
import React from "react";
import Taskitem from "./Taskitem";


const Tasklist = ({ tasks, title, complete, remove, isDoneList}) => {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            {tasks.length > 0 ? (
                
                tasks.map((task, index) => 
                    <Taskitem remove={remove} complete={complete}  isDoneList={isDoneList} number={index + 1} task={task} key={task.id} />
                )
            ) : (
                <p style={{ textAlign: 'center' }}>No tasks available.</p>
            )}
        </div>
    );
}

export default Tasklist;


