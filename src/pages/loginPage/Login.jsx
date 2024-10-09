import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from "./Login.module.css";
import MyModal from '../../components/my modal/MyModal';
import Mybutton from '../../components/UI/button/Mybutton';
import leftCircle from "./icons/leftCircle.svg";
import leftSemiCircle from "./icons/leftSemicircle.svg";
import rightCircle from "./icons/rightCircle.svg";
import rightSemiCircle from "./icons/rightSemiCircle.svg";
import googleIcon from "./icons/google.svg";
import { auth, provider } from "../../app/auth/firebase";
import { addUser, getUserByUsername } from '../../app/db/firestoreOperations';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../context/userContext';
import LoginForm from './LoginForm';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isRegistered, setIsRegistered] = useState(true);
    const [modal, setModal] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { setCurrentUser } = useContext(UserContext);

    const googleHandleClick = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            handleRememberMe(response.user);
            navigate('/greeting');
        } catch (error) {
            console.error(error);
        }
    };

    const handleRememberMe = (user) => {
        rememberMe 
            ? localStorage.setItem('currentUser', JSON.stringify(user)) 
            : sessionStorage.setItem('currentUser', JSON.stringify(user));
    };

    const loginUser = async (username, password) => {
        try {
            const userData = await getUserByUsername(username);
            const email = userData.email;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Пользователь вошел:', userCredential.user);
            handleRememberMe(userCredential.user);
            navigate('/greeting');
            return userCredential.user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const registerWithEmail = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userReg = userCredential.user; 
            await addUser(userReg.uid, { username, email, items: [{title:"", valueTime: new Date(), body:""}], createdAt: new Date(), });
            console.log('user', userReg);
            handleRememberMe(userCredential.user);
            setUser(userReg);
            navigate('/greeting');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isRegistered) {
                const userCredential = await loginUser(username, password);
                handleRememberMe(userCredential);
                console.log('User log in:', userCredential);
            } else {
                const userCredential = await registerWithEmail(email, password);
                handleRememberMe(userCredential);
                console.log('User register');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleForm = () => {
        setIsRegistered((prev) => !prev);
    };

    return (
        <div className={classes.container}>
            <div className={classes.loginImage}>
                <div className={classes.topGroup}>
                    <div className={classes.leftCircle}>
                        <img src={leftCircle} alt="Left Circle" />
                    </div>
                    <div className="right__semi-circle">
                        <img src={leftSemiCircle} alt="Left Semi Circle" />
                    </div>
                </div>
                <div className={classes.bottomGroup}>
                    <div className="left__semi-circle">
                        <img src={rightSemiCircle} alt="Right Semi Circle" />
                    </div>
                    <div className="right__circle">
                        <img src={rightCircle} alt="Right Circle" />
                    </div>
                </div>
            </div>
            <div className={classes.text}>
                <p className={`${classes.titleText} ${classes.position}`}>
                    Do your task <br /> Don’t just list them
                </p>
            </div>
            <div className={`${classes.logIn} ${classes.position}`}>
                <button className={classes.logInBtn} onClick={() => setModal(true)}>
                    Dive In
                </button>
                <MyModal visible={modal} setVisible={setModal}>
                    <div className={classes.authContainer}>
                        <h3 className={classes.authHeader}>{isRegistered ? 'Login' : 'Register'}</h3>

                        <LoginForm
                            email={email}
                            setEmail={setEmail}
                            username={username}
                            setUsername={setUsername}
                            password={password}
                            setPassword={setPassword}
                            rememberMe={rememberMe}
                            setRememberMe={setRememberMe}
                            handleSubmit={handleSubmit}
                            error={error}
                            isRegistered={isRegistered}
                        />
                        <Mybutton className={classes.logInGoogleBtn} onClick={googleHandleClick}>
                            <div className={classes.logInGoogleContent}>
                                <img src={googleIcon} alt="Google icon" />
                                <p className={classes.logInGoogleBtnP}>Login with Google</p>
                            </div>
                        </Mybutton>
                        <label htmlFor="">
                            {user?.displayName}
                        </label>
                        <p>
                            {isRegistered ? "Don't have an account? " : "Already have an account? "}
                            <Link to="#" onClick={toggleForm}>
                                {isRegistered ? "Sign up!" : "Log in!"}
                            </Link>
                        </p>
                    </div>
                </MyModal>
            </div>
        </div>
    );
};

export default Login;

