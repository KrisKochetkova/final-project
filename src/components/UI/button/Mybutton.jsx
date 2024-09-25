import React from "react";
import classes from "../button/Mybutton.module.css";

const Mybutton = ({children, className, ...props}) => {
   

  return (
    <button {...props} className={`${classes.myBtn} ${className}`}>
        {children}
    </button>
);
}


export default Mybutton;
