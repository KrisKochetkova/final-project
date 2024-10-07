import React, {useState, useEffect, useContext} from 'react';
import classes from "./Login.module.css";
import MyModal from '../../components/my modal/MyModal';
import Myinput from '../../components/UI/input/Myinput';
import CheckBoxbtn from '../../components/UI/button/CheckBoxbtn';
import Mybutton from '../../components/UI/button/Mybutton';
import { json, Link } from 'react-router-dom';
import leftCircle from "./icons/leftCircle.svg"
import leftSemiCircle from "./icons/leftSemicircle.svg"
import rightCircle from "./icons/rightCircle.svg"
import rightSemiCircle from "./icons/rightSemiCircle.svg"
import {auth, provider} from "../../app/auth/firebase";
import db from '../../app/db/firestore';
import { collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { addUser, getUserByUsername } from '../../app/db/firestoreOperations';
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../../context/userContext';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isRegistered, setIsRegistered] = useState(true);
    const [modal, setModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            navigate('/greeting');
        }
    }, [navigate]);

    function handleClick(e) {
        e.preventDefault();
        setIsVisible(!isVisible);
    }
    const googleHandleClick = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            console.log('user',response.user)
            setUser(response.user)
            navigate('/greeting')
        }
        catch(error){console.error(error)}
    }
    const handleRememberMe = (user) => {
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
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
            
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    const registerWithEmail = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userReg = userCredential.user; 
            await addUser(userReg.uid, {username, email});
            console.log('user',userReg);
            handleRememberMe(userCredential.user);
            setUser(userReg);
            navigate('/greeting');
        }
        catch(error){
            console.error(error);
        };  
    }

    const logoutUser = () => {
        localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        signOut(auth)
            .then(() => {
                setUser(null);
                navigate('/login');
        })
        .catch((error) => {
            console.error('error sign out', error);
        });
    };

    const {setCurrentUser} = useContext(UserContext);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setCurrentUser(currentUser);
        } )
        return () => unsubscribe();
    },[setCurrentUser]);

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
        }
        catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setEmail(user.email);
            setPassword(user.password);
        };

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const toggleForm = () => {
        setIsRegistered((prev)=> !prev);
    }
    return (
        <div className={classes.container}>
             <div className={classes.loginImage}>
          <div className={classes.topGroup}>
                <div className={classes.leftCircle}>
                 <img src={leftCircle} /> 
                </div>
                <div className="right__semi-circle">
                <img src={leftSemiCircle} /> 
                </div>
          </div>
          <div className={classes.bottomGroup}>
                <div className="left__semi-circle">
                <img src={rightSemiCircle} /> 
                </div>
                <div className="right__circle">
                <img src={rightCircle} /> 
                </div>
          </div>
        </div>
        <div className={classes.text}>
            <p className={`${classes.titleText} ${classes.position}`}>
                Do your task <br />Don’t just list them
            </p>
        </div>
            <div className={`${classes.logIn} ${classes.position}`}>
                <button className={classes.logInBtn} onClick={()=> setModal(true)}>
                Dive In
                </button>
                <MyModal visible={modal} setVisible={setModal}>
                    <div className={classes.authContainer}>
                        <h3 className={classes.authHeader}>{isRegistered ? 'Login' : 'Register'}</h3>
                        <form onSubmit={handleSubmit}>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {!isRegistered && (
                                <div>
                                <label className={classes.authLabel}>Email:</label>
                                <Myinput
                                type="email"
                                value = {email}
                                placeholder="email@email.com"
                                onChange={(e)=> setEmail(e.target.value)}
                                required
                                />
                                </div>
                            )}
                            <div>
                                <label className={classes.authLabel}>Username:</label>
                                <Myinput
                                    type="text"
                                    value = {username}
                                    placeholder="Username"
                                    onChange={(e)=> setUsername(e.target.value)}
                                    required={!isRegistered}
                                />
                            </div>
                            <div>
                                <label className={classes.authLabel}>Password:</label>
                                <Myinput
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e)=> setPassword(e.target.value)}
                                    required
                                />
                            </div>
                             {isRegistered && (
                                <div>
                                    <label htmlFor='rememberMe'>
                                        <CheckBoxbtn 
                                        className={classes.authCheckBox}
                                        id="rememberMe" 
                                        type="checkbox" 
                                        name="notificationTime" 
                                        checked={rememberMe}
                                        onChange={(e)=> setRememberMe(e.target.checked)}
                                        />
                                        <p className={classes.checkBoxText}>Remember me</p>
                                    </label>
                                </div>
                             )}
                             
                             <Mybutton type="submit">{isRegistered ? "Login" : "Register"}</Mybutton>
                        </form>

                        <Mybutton onClick={googleHandleClick}>login google</Mybutton>
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
    )
};

export default Login;