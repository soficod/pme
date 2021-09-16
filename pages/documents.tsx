import Head from 'next/head';
import React from 'react'
import DocsPage from './components/documents/DocsPage';
import Header from './components/user-components/header/Header';

const Documents =({documents}:any)=>
{

    return(
        <>
            <Head>
                <title>Documents - PMEI</title>
            </Head>

            <Header
                isAdmin={true}
            />
            
            <DocsPage
                documents={documents}
            />
        </>
    )
}

export default Documents;

Documents.getInitialProps = async () =>
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