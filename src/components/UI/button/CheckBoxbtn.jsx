import React from 'react';
import classes from "../button/CheckBoxbtn.module.css";

const CheckBoxbtn = ({children, ...props}) => {
    return (
        <div className={classes.task__btn}>
            <label className={classes.container__task__btn} >
                <input {...props} type="checkbox"></input>
                <span className={classes.checkmark}></span>
                {children}
            </label>
        </div>
    );
};

export default CheckBoxbtn;

