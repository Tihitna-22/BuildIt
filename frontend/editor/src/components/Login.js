import React from "react";
import './Login.scss';


function Login() {
    return (
        <div className="Login">
            <div className="header"><h1>Login</h1></div>
            <div className="login-container">
                <div className="container">
                    <form className="form">
                        <label for="email">Email: </label><br></br>
                        <input type="text" id="email" placeholder="Email"></input><br></br>
                        <label for="password">Password: </label><br></br>
                        <input type="text" id="password" placeholder="Password"></input><br></br>
                        <label for="c-password">Password: </label><br></br>
                        <input type="text" id="c-password" placeholder="Confirm Password"></input><br></br>
                        <button name="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login