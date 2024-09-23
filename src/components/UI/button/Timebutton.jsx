import React from "react";
import classes from "../button/Timebuuton.module.css";

const Timebutton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.timeBtn}>
            <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.630931 2.06959L2.04843 0.652087C2.23295 0.467564 2.53212 0.467564 2.71665 0.652087C2.90117 0.83661 2.90117 1.13578 2.71665 1.3203L1.29915 2.7378C1.11462 2.92233 0.815453 2.92233 0.630931 2.7378C0.446408 2.55328 0.446408 2.25411 0.630931 2.06959ZM8.38665 0.652087L9.80415 2.06959C9.98867 2.25411 9.98867 2.55328 9.80415 2.7378C9.61963 2.92233 9.32046 2.92233 9.13593 2.7378L7.71843 1.3203C7.53391 1.13578 7.53391 0.83661 7.71843 0.652087C7.90296 0.467564 8.20213 0.467564 8.38665 0.652087ZM5.21755 9.9637C7.56614 9.9637 9.47005 8.05979 9.47005 5.7112C9.47005 3.36261 7.56614 1.4587 5.21755 1.4587C2.86895 1.4587 0.965046 3.36261 0.965046 5.7112C0.965046 8.05979 2.86895 9.9637 5.21755 9.9637ZM5.21755 9.01869C3.39086 9.01869 1.91005 7.53788 1.91005 5.7112C1.91005 3.88451 3.39086 2.40369 5.21755 2.40369C7.04423 2.40369 8.52505 3.88451 8.52505 5.7112C8.52505 7.53788 7.04423 9.01869 5.21755 9.01869ZM5.21754 3.3487C5.4785 3.3487 5.69004 3.56024 5.69004 3.8212V5.04298L6.49665 5.84959C6.68117 6.03411 6.68117 6.33328 6.49665 6.5178C6.31213 6.70233 6.01296 6.70233 5.82843 6.5178L4.88343 5.5728C4.79482 5.48419 4.74504 5.36401 4.74504 5.2387V3.8212C4.74504 3.56024 4.95659 3.3487 5.21754 3.3487Z" fill="white"/>
            </svg>
            {children}
        </button>
    )
}


export default Timebutton;