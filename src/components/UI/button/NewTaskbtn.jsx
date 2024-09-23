import React from 'react';
import classes from "./NewTaskbtn.module.css"

const NewTaskbtn = ({...props} ) => {
    
    
    return (

        <div className={classes.container}>
             <div className={classes.markBtn}>New Task</div>
             <button {...props} className= {classes.addBtn} >
            
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.07023 1.71753V11.4463" stroke="black" stroke-width="2.28913" stroke-linecap="round"/>
            <path d="M11.1292 6.3877L1.40038 6.38769" stroke="black" stroke-width="2.28913" stroke-linecap="round"/>
            </svg>
             </button>
        </div>
        
        
    );
};

export default NewTaskbtn;

