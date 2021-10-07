import React from 'react'
import { Link } from 'react-router-dom';
import ico from 'media/ico1.png';
import 'styles/loggin.css';
const Login = () => {
    return (
        <div src="login">
        <form id="loginform" action="#">
        <h1>LOG IN</h1>
        <p><a href="#" target="_blank"> www.parse.com</a></p>

        <div class="input-info">
         <input type="text" placeholder="User-Name"/>
         <input type="email" placeholder="E-mail" required autocomplete="off" validate/>
         <input type="password" placeholder="Password"/>
         <input type="checkbox"/>
        <span>Remember Me</span>
        </div>
        
        <div class="log-sign">
            <button class="login" form="loginform">Log In</button>
            <a href="#" target="_blank">
            <button class="signup" form="signupform">Sign Up</button>
            </a>
        </div>
        
        <div class="social-media">
        <button class="btn1">
            <img class="icon" src={ico}/>
        </button>
        </div>
        <p class="forget-password">If you forget your password please <a href="#">click here</a></p>
    </form>



        </div>
    )
}

export default Login;
