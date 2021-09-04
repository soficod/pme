import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import RegisterForm from './components/register/RegisterForm';

const Login = () => 
{
    const [lang, changeLanguage] = useLanguage();
    const [infos, setInfos] = useState({
        emails:[],
        phones: [],
        fax: [],
        typeInfos:{},
        type:''
    });

    const [error, setError] = useState({});

    const register = () => 
    {
        alert(JSON.stringify(infos));
    }

    return(
        <>
            <Head>
                <title>Register</title>
            </Head>
            <RegisterForm
                lang={lang}
                infos={infos}
                setInfos={setInfos}
                error={error}
                onSubmit={register}
            />
        </>
    );
}

export default Login;