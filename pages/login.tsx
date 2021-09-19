import React, { useState } from 'react';
import Head from 'next/head';
import LoginForm from './components/login/LoginForm';
import { useLanguage } from './services/useLanguage';
import axios from 'axios';
import { useRouter } from 'next/router'; 
import Swal from 'sweetalert2';

const Login = () => 
{
    const router = useRouter();
    const [lang, changeLanguage] = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const logIn = () => 
    {
        setErrors({});
        axios.post("/api/auth/signin", {
            email,
            password
        }).then(res => 
        {
            router.push('/news');
        }).catch(err => 
        {
            let errors = {};

            if(typeof(err.response.data.errors) == "undefined")
            {
                Object.keys(err.response.data.data).forEach(errorKey => 
                {
                    errors[errorKey] = err.response.data.data[errorKey];
                });
            }
            else 
            {
                Object.keys(err.response.data.errors).forEach(errorKey => 
                {
                    errors[errorKey] = err.response.data.errors[errorKey][0];
                });
            }

            Swal.fire(
                "ATTENTION",
                "Vérifiez les informations entrée.",
                "error"
            )

            setErrors(errors); 
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
                error={errors}
                onSubmit={logIn}
            />
        </>
    );
}

export default Login;