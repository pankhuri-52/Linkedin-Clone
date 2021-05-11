import React from 'react';
import '../css/Login.css';

    function Login() {

        const register = () => {};

        return (
            <div className='login'>
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
                <form>
                    <input placeholder="Full Name(required if registering)" type="text" />
                    <input placeholder="Profile picture(optional)" type="text" />     
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password" />
                    <button>SignIn</button>
                </form>
                <p>Not a member? <span className="login__register">Register Now</span></p>
            </div>
        );
    }
export default Login;