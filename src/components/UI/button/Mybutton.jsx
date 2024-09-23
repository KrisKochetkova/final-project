import React from "react";
import classes from "../button/Mybutton.module.css";

const Mybutton = ({children, ...props}) => {
   

    return (
        <button {...props} className={classes.myBtn}>
          {children}
        </button>
    )
}


export default Mybutton;
