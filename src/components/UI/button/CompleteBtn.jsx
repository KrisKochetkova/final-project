import React from 'react';
import classes from "../button/CompleteBtn.module.css"

const CompleteBtn = ({...props}) => {
    return (
      <button {...props} className= {classes.completeBtn}>
        Complete
      </button>
    );
};

export default CompleteBtn;