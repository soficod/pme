import Head from 'next/head';
import React from 'react'
import EtudePage from './components/etudes/EtudePage';
import Header from './components/user-components/header/Header';

const Studies =({documents}:any)=>
{

    return(
        <>
            <Head>
                <title>Etudes - PMEI</title>
            </Head>

            <Header
                isAdmin={true}
            />
            
            <EtudePage
                documents={documents}
            />
        </>
    )
}

export default Studies;

Studies.getInitialProps = async () =>
{
    /*const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_HOST+'/api/events').catch(err => 
    {
        console.log("error: ", err);
    });*/

    const response = {
        data: {
            data: [
                {
                    title: "Nom de l'etude",
                    description: "KMzlkjmlzkjflzkjefmlzkejfmksqjefùojqzlekfjqekjfùlqkjef",
                    format: "PDF",
                    visibility: "public",
                    image: "/images/images.png",
                    slug: "#",
                    pages: "50",
                    author: "Anis ROUANE",
                    date: "23-18-2021"
                },
                {
                    title: "Nom de l'etude",
                    description: "KMzlkjmlzkjflzkjefmlzkejfmksqjefùojqzlekfjqekjfùlqkjef",
                    format: "PDF",
                    visibility: "public",
                    image: "/images/images.png",
                    slug: "#",
                    pages: "50",
                    author: "Anis ROUANE",
                    date: "23-18-2021"
                },
                {
                    title: "Nom de l'etude",
                    description: "KMzlkjmlzkjflzkjefmlzkejfmksqjefùojqzlekfjqekjfùlqkjef",
                    format: "PDF",
                    visibility: "public",
                    image: "/images/images.png",
                    slug: "#",
                    pages: "50",
                    author: "Anis ROUANE",
                    date: "23-18-2021"
                },
                {
                    title: "Nom de l'etude",
                    description: "KMzlkjmlzkjflzkjefmlzkejfmksqjefùojqzlekfjqekjfùlqkjef",
                    format: "PDF",
                    visibility: "public",
                    image: "/images/images.png",
                    slug: "#",
                    pages: "50",
                    author: "Anis ROUANE",
                    date: "23-18-2021"
                },
                {
                    title: "Nom de l'etude",
                    description: "KMzlkjmlzkjflzkjefmlzkejfmksqjefùojqzlekfjqekjfùlqkjef",
                    format: "PDF",
                    visibility: "public",
                    image: "/images/images.png",
                    slug: "#",
                    pages: "50",
                    author: "Anis ROUANE",
                    date: "23-18-2021"
                }
            ]
        }
    }

    return {
        documents: response.data.data
    }
}