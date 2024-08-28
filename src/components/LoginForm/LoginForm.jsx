import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login To Nature!</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required></input>
                    <FaUser className={"icon"}/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required></input>
                    <FaLock className={"icon"}/>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember Me</label>
                    <a href="#">Forget password</a>
                </div>
                <button type={"submit"}>Login</button>
                <div className={"register-link"}>
                    <p>Don't have an account?<a href={"#"}> Sign Up</a></p>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;