import React from 'react';
import styles from './Error.module.css'
import Mybutton from '../../components/UI/button/Mybutton';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <div className={styles.container}>
            <h1>4  0  4</h1>
            <h2>oops!</h2>
            <p>The page you are looking for couldn't be found</p>
            <Link to="/tasks">
                <Mybutton>Go home</Mybutton>
            </Link>
        </div>
    );
};

export default Error;