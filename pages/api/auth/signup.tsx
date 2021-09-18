import { withIronSession } from "next-iron-session";
import { session_option } from '../../../pme-data/cookie-option';
import axios from 'axios';

async function signUp (
    req: any,
    res: any
) 
{
    if(req.method === "POST")
    {
        const user = await axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/register', req.body).catch(err => 
        {
            console.log(err);
            return res.status(err.response.status).json({data: err.response.data});
        });

        console.log(user.data)
        await req.session.set("pmei-user-token", user.data.token);
        return res.status(201).send("");
    }
    else 
    {
        return res.status(403).json("Access forbidden");
    }
}

export default withIronSession(signUp, session_option);