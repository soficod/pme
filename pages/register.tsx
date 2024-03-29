import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import RegisterForm from './components/register/RegisterForm';
import axios from 'axios'; 
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { withIronSession } from "next-iron-session";
import { session_option } from '../pme-data/cookie-option';

interface activityArrayType {
    value: number
    name: string
}

interface wilaya {
    value: number
    name: string
    code: string
}

interface registerPropsType {
    zones: activityArrayType[]
    activities: activityArrayType[]
    wilayas: wilaya[] 
    user_token: string
}

const Register = ({zones, activities, wilayas}:registerPropsType) => 
{
    const router = useRouter();
    const [lang, changeLanguage] = useLanguage();
    const [infos, setInfos] = useState({
        emails:[],
        phones: [],
        fax: [],
        typeInfos:{},
        type:'',
        country: ''
    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState({});

    const register = () => 
    {
        setError({});
        let postData = {};
        Object.keys(infos).forEach(key => 
        {
            if(key !== "typeInfos")
            {
                postData[key] = infos[key];
            }
            else 
            {
                Object.keys(infos.typeInfos).forEach(key2 => 
                {
                    postData[key2] = infos.typeInfos[key2];    
                })
            }
        }); 

        axios.post("/api/auth/signup", postData).then(res => 
        {
            Swal.fire(
                "C'est fait !",
                "Votre compte a été créé, vous allez être redirigé dans quelque instants",
                "success"
            )
            router.push('/news');
        }).catch(err => 
        {
            let errors = {};
            Object.keys(err.response.data.data.errors).forEach(errorKey => 
            {
                errors[errorKey] = err.response.data.data.errors[errorKey][0];
            });

            Swal.fire(
                "ATTENTION",
                "Vérifiez les informations entrée.",
                "error"
            )

            console.log(err);

            setError(errors);
        });
    }

    return(
        <>
            <Head>
                <title>Register</title>
            </Head>
            {
                <RegisterForm
                    lang={lang}
                    infos={infos}
                    setInfos={setInfos}
                    error={error}
                    onSubmit={register}
                    activities={activities}
                    zones={zones}
                    wilayas={wilayas}
                />
            }
        </>
    );
}

export const getServerSideProps = withIronSession(async ({req, res}:any) => {
    const user_token = req.session.get("pmei-user-token");
    if(typeof(user_token) != "undefined" && user_token)
    {
        return {
            redirect: {
                permanent: false,
                destination: "/news"
            }
        }
    }
    
    /*const activities:any = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/data/activity-areas').catch(err => 
    {
      console.log("error: ", err);
    });

    const zones:any = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/areas/parents').catch(err => 
    {
        console.log("error: ", err);
    });

    const wilayas:any = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/data/wilayas').catch(err => 
    {
        console.log("error: ", err);
    });*/

    return {
        props:{
            zones: [],//zones.data.data,
            activities: [],//activities.data,
            wilayas: []//wilayas.data
        }
    }
    
},session_option);

export default Register;