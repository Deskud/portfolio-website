import React from 'react';
import './LoginRegister.css';
import iconUser from '../assets/user.png';
import iconPass from '../assets/lock.png';
import bgVideo from '../assets/placeHolder.mp4';

const LoginRegister = () => {
    return (
        <div className='form-container'>
            <div className='bg-cover'></div>
            <video className='bg-vid' autoPlay loop muted>
                <source src={bgVideo}>
                </source>
            </video>
            <form className='login-container'>


                <h1 className='web-title-login'>BroisthisaBLOG?</h1>
                <div className='login-inputs'>
                    <div className='login-username'>
                        <img src={iconUser} className='icon-user'></img>
                        <input className='username' type='email' placeholder='Email' required></input>
                    </div>

                    <div className='login-password'>
                        <img src={iconPass} className='icon-user'></img>
                        <input className='password' type='password' placeholder='Password' required></input>
                    </div>
                </div>
                <p style={{color:"white"}}>No account? <a style={{textDecoration:"underline", color:"#89CFF0"}} href='#'>Sign up now!</a></p>
                <button type='submit' className='login-btn'>Login</button>
            </form>
        </div>

    )
}

export default LoginRegister
