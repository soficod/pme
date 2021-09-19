import { withIronSession } from "next-iron-session";
import { session_option } from '../../../pme-data/cookie-option';
import axios from 'axios';

async function signIn (
    req: any,
    res: any
) 
{
    if(req.method === "POST")
    {
        console.log("Processing the request...");
        console.log("data", req.body);
        const user = await axios.post(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/login', req.body).catch(err => 
        {
            console.log("Error in the request");
            res.status(err.response.status).json({data: err.response.data});
        });

        await req.session.set("pmei-user-token", user.data.token);
        await req.session.save();
        console.log(req.session.get("pmei-user-token"));
        //console.log(user);
        return res.status(201).send("");
    }
    else 
    {
        return res.status(403).json("Access forbidden");
    }
}

export default withIronSession(signIn, session_option);