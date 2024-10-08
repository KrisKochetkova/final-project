import React from 'react';
import Myinput from '../../components/UI/input/Myinput';
import CheckBoxbtn from '../../components/UI/button/CheckBoxbtn';
import Mybutton from '../../components/UI/button/Mybutton';
import classes from './LoginForm.module.css'

const LoginForm = ({ email, setEmail, username, setUsername, password, setPassword, rememberMe, setRememberMe, handleSubmit, error, isRegistered }) => {
    return (
        <div>
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
                <div className={classes.logInSubmit}>
                    <Mybutton type="submit">{isRegistered ? "Login" : "Register"}</Mybutton>
                </div>            
            </form>
        </div>
    );
};

export default LoginForm;