import React from 'react';
import classes from "./NewTaskbtn.module.css"
import addButton from "./add-button.svg"
const NewTaskbtn = ({...props} ) => {
    
    
    return (

        <div className={classes.container}>
             <div className={classes.markBtn}>New Task</div>
             <button {...props} className= {classes.addBtn} >
                <img src={addButton} />
             </button>
        </div>
        
        
    );
};

export default NewTaskbtn;

