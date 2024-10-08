import React from 'react';
import classes from "../button/CompleteBtn.module.css"

const CompleteBtn = ({children, ...props }) => {
    return (
      <button {...props} className= {classes.completeBtn}>
        {children}
      </button>
    );
};

export default CompleteBtn;