import React, { useState } from 'react';
import Head from 'next/head';
import LoginForm from './components/login/LoginForm';
import { useLanguage } from './services/useLanguage';

const Login = () => 
{
    const [lang, changeLanguage] = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');

    const logIn = () => 
    {
        alert("Email: "+email+"\nPassword: "+password);
    }

    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginForm
                lang={lang}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                error={{
                    email: errorEmail,
                    password: errorPass
                }}
                onSubmit={logIn}
            />
        </>
    );
}

export default Login;