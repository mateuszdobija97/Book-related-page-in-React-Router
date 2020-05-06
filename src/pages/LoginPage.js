import React from 'react';
import '../styles/Login.css'

const LoginPage = () => {
    return (
        <div>
            <form className='login'>
                <label>Podaj login: <input type="text" /></label>
                <label>Podaj hasło: <input type="password" /></label>
                <button>Zaloguj</button>
            </form>
        </div>
    );
}

export default LoginPage;