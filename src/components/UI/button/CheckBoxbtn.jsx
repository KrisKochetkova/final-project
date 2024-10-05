import React from 'react';
import classes from "../button/CheckBoxbtn.module.css";

const CheckBoxbtn = ({ ...props}) => {
    return (
        <label className={classes.task__btn}>
            <div className={classes.container__task__btn} >
                <input {...props}/>
                <span className={classes.checkmark}></span>
            </div>
        </label>
    );
};

export default CheckBoxbtn;

