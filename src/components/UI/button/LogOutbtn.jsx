import React from 'react';
import cl from "./LogOutBtn.module.css"
import logOutIcon from "./logout-svgrepo-com.svg"

const LogOutbtn = ({...props}) => {
    return (
        <div className={cl.btnContainer}>
            <button {...props} className={cl.btnLogOut}>
                <div className={cl.btnLogOutContent}>
                    <img src={logOutIcon} alt="logOutIcon" />
                    <p className={cl.btnLogOutText}>Log Out</p>
                </div>
            </button>
        </div>
    );
};

export default LogOutbtn;