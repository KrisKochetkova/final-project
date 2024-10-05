import React from "react";
import classes from "./Myinput.module.css"


const Myinput = (props) => {
    return (
        /* trunk-ignore(git-diff-check/error) */
        <input className={classes.myInput} {...props}/>  
    );
}


export default Myinput;


