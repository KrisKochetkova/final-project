import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
     <div className={classes.navbar}>
        <div className={classes.navbarLinks}>
            <Link className={classes.navbarLink} to="/about">About</Link>
            <Link className={classes.navbarLink} to="/tasks">Tasks</Link>
            <Link className={classes.navbarLink} to="/greeting">Greeting</Link>
        </div>
      </div>
    );
};

export default Navbar;