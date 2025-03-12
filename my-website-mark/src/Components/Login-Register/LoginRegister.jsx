import React from 'react';
import './LoginRegister.css';



const LoginRegister = () => {
    return (
        <div className='form-container'>
            <form className='login-container'>
                <h1 className='web-title-login'>Benis Tester</h1>
                <hr className='hr-style'></hr>
             
                <div className='login-inputs'>

                    <label className='label-username'>Username</label>
                    <input className='username' type='text'></input>
                    
                    <label className='label-password'>Password</label>
                    <input className='password' type='password' ></input>

                    <button className='login-btn'><a>Login</a></button>
                    <button className='register-btn'><a>Register</a></button>


                </div>
            </form>
        </div>
    )
}

export default LoginRegister
