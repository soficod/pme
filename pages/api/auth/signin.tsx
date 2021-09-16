import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

const signIn = async (
    req: NextApiRequest,
    res: NextApiResponse
) => 
{
    if(req.method === "POST")
    {
        console.log(req.body);
        res.json({type: "sucess"});
    }
}