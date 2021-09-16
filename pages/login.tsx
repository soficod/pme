import React, { useState } from 'react';
import Head from 'next/head';
import LoginForm from './components/login/LoginForm';
import { useLanguage } from './services/useLanguage';
import axios from 'axios';

const Login = () => 
{
    const [lang, changeLanguage] = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');

    const logIn = () => 
    {
        axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+"/api/login", {
            email,
            password
        }).then(res => 
        {
            window.localStorage.setItem('pmei-user-token', res.data.token);
            window.location.href="/news";
        })
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