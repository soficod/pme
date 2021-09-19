import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { session_option } from '../../../pme-data/cookie-option';
import { withIronSession } from 'next-iron-session';
import Header from '../../components/user-components/header/Header';
import UserPage from '../../components/profil/UserPage';

const User = ({udata, isLogged, isAdmin}:any) => 
{
    const [data, setData] = useState(udata); 
    return(
        <>
            <Head>
                <title>{udata.name} - PMEI</title>
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

export default User;

export const getServerSideProps = withIronSession(async ({req, res, query}:any) => {
    const user_token = req.session.get("pmei-user-token");
    console.log(user_token);
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
    
    const user_info = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/members/${query.type}/${query.slug}`,{
        headers: {
            Authorization: "Bearer "+user_token
        }
    }).catch(err => 
    {
        console.log("error: ", err);
    });

    console.log(user_info)
    
    const user_data:any = {}
    Object.keys(user_info.data.data.user).forEach(key => 
    {
        user_data[key] = user_info.data.data.user[key]; 
    });

    Object.keys(user_info.data.data.authenticable).forEach(key => 
    {
        user_data[key] = user_info.data.data.authenticable[key]; 
    });

    //console.log(user_data);

    return {
        props: {
            udata: user_data,
            isAdmin: isAdmin,
            isLogged: isLogged
        }
    }

},session_option);