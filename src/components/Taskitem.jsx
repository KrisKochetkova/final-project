import React from "react";
import CheckBoxbtn from "./UI/button/CheckBoxbtn";
import CompleteBtn from "./UI/button/CompleteBtn"
import moment from 'moment';

const Taskitem = (props) => {
   

    return (
        <div className="task">
            <div className="task__content">
                <div className="task__title">{props.number}. {props.task.title}</div>
                <div className="time-date">
                    <div className="time-svg">
                        <svg className="svg-item" width="20" height="20" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fillRule="evenodd" clipRule="evenodd" d="M1.38519 2.42324L2.23569 1.57274C2.3464 1.46202 2.52591 1.46202 2.63662 1.57274C2.74733 1.68345 2.74733 1.86295 2.63662 1.97367L1.78612 2.82417C1.67541 2.93488 1.4959 2.93488 1.38519 2.82417C1.27448 2.71345 1.27448 2.53395 1.38519 2.42324ZM6.03862 1.57274L6.88912 2.42324C6.99983 2.53395 6.99983 2.71345 6.88912 2.82417C6.7784 2.93488 6.5989 2.93488 6.48819 2.82417L5.63769 1.97367C5.52697 1.86295 5.52697 1.68345 5.63769 1.57274C5.7484 1.46202 5.9279 1.46202 6.03862 1.57274ZM4.13715 7.1597C5.5463 7.1597 6.68865 6.01736 6.68865 4.6082C6.68865 3.19905 5.5463 2.0567 4.13715 2.0567C2.72799 2.0567 1.58565 3.19905 1.58565 4.6082C1.58565 6.01736 2.72799 7.1597 4.13715 7.1597ZM4.13716 6.5927C3.04115 6.5927 2.15266 5.70421 2.15266 4.6082C2.15266 3.51219 3.04115 2.6237 4.13716 2.6237C5.23317 2.6237 6.12166 3.51219 6.12166 4.6082C6.12166 5.70421 5.23317 6.5927 4.13716 6.5927ZM4.13714 3.1907C4.29372 3.1907 4.42064 3.31763 4.42064 3.4742V4.20727L4.90461 4.69124C5.01532 4.80195 5.01532 4.98145 4.90461 5.09216C4.79389 5.20288 4.61439 5.20288 4.50368 5.09216L3.93668 4.52517C3.88351 4.472 3.85364 4.39989 3.85364 4.3247V3.4742C3.85364 3.31763 3.98057 3.1907 4.13714 3.1907Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="date">
                        {moment(props.task.valueTime).format('ddd MMM D HH:mm')}
                        
                    </div>
                </div>
                
                <div className="task__body">
                    {props.task.body}
                </div>
            </div>
            <div className="bnt-container">
                <CompleteBtn/>
            </div>
            
        </div>
    )
}


export default Taskitem;
