import React from "react";
import classes from "./Myinput.module.css"

const Myinput = (className, props) => {
    return (
        <input className={`${classes.myInput} ${className}`} {...props} />
    );
}


export default Myinput;