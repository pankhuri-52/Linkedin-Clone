import React, { useState } from 'react';
import '../css/Login.css';
import { auth } from './firebase';

    function Login() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [profilePicture, setProfilePicture] = useState("");

        const LoginToApp = (e) => {
            // auth
            e.preventDefault();
        };

        const register = () => {
            if (!name) {
                return alert("You need to enter Full Name");
            }
        };

        return (
            <div className='login'>
                <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" />
                <form>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Full Name(required if registering)" 
                           type="text" />

                    <input value={profilePicture}
                           onChange={(e) => setProfilePicture(e.target.value)}
                           placeholder="Profile picture(optional)" 
                           type="text" />

                    <input value={email} 
                           onChange={(e) => setEmail(e.target.value)} 
                           placeholder="Email" 
                           type="email" />

                    <input value={password}
                           onChange={(e) => setPassword(e.target.value)} 
                           placeholder="Password" 
                           type="password" />

                    <button type='submit' onClick={LoginToApp}>Sign In</button>
                </form>
                <p>Not a member?{" "}<span className="login__register" onClick={register} >Register Now</span></p>
            </div>
        );
    }
export default Login;