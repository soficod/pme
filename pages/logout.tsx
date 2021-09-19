import React from 'react';
import { withIronSession } from "next-iron-session";
import { session_option } from '../pme-data/cookie-option';

const Register = () => 
{

    return(
        <>
        </>
    );
}

export const getServerSideProps = withIronSession(async ({req, res}:any) => {
    req.session.destroy();
    return {
        redirect: {
            permanent: false,
            destination: "/login"
        }
    }
},session_option);

export default Register;