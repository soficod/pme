import React, { useState } from 'react';
import Head from 'next/head';
import { useLanguage } from './services/useLanguage';
import Header from './components/user-components/header/Header'
import News from './components/news/News';
import axios from 'axios';
import { session_option } from '../pme-data/cookie-option';
import { withIronSession } from 'next-iron-session';
import UserPage from './components/profil/UserPage';

const Profil = ({udata, isLogged, isAdmin}:any) => 
{
    const [data, setData] = useState(udata); 
    return(
        <>
            <Head>
                <title>Profil - PMEI</title>
            </Head>
            <Header 
                isAdmin={isAdmin}
                isLogged={isLogged}
            />
            <UserPage
                data={data}
            />
        </>
    );
}

export const getServerSideProps = withIronSession(async ({req, res}:any) => {
    const user_token = req.session.get("pmei-user-token");

    const response:any = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/articles').catch(err => 
    {
        console.log("error: ", err);
    });
    
    let isAdmin = false;
    let isLogged = false;
    if(typeof(user_token) != "undefined" && user_token)
    {
        //check if he's admin
        isLogged=true;
    }
    else 
    {
        return{
            redirect: {
                permanent: false,
                destination: "/login"
            }
        }
    }
    
    
    console.log(response);
    return {
        props: {
            udata: {
                name: "Anis ROUANE",
                country: "Algeria",
                image: "/images/men.jpg",
                type: "Association",
                id: "2",
                email: "anisrouane2@gmail.com",
                emails: ["anisrouane@hotmail.fr", "anisrouane6@gmail.com", "anisrouane3@gmail.com"],
                phones: ["0541047274", "0555753264", "0551430512"],
                website: "http://anisrouane.rf.gd",
                description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
            },
            isAdmin: isAdmin,
            isLogged: isLogged
        }
    }

},session_option);

export default Profil;