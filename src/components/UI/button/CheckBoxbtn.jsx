import React from 'react';
import classes from "../button/CheckBoxbtn.module.css";

const CheckBoxbtn = () => {
    return (
        <div className={classes.task__btn}>
            <label className={classes.container__task__btn} >
                <input type="checkbox"></input>
                <span className={classes.checkmark}></span>
            </label>
        </div>
    );
};

export default CheckBoxbtn;

