let lang:any;
lang = {
    "fr":{
        "Navbar": {
            "news_link": "Actualité ",
            "presentation_link": "Notre présentation",
            "mission_link": "Notre mission",
            "events_link": "Nos événements",
            "doc_link": "Nos documents",
            "contact_link": "Nous contacter",
            "join_link": "Nous rejoindre"
        },
        "Main": {
            "join_us": ["Rejoignez nous!"]
        },
        "Mission": {
            "title": "Notre mission"
        }
    },
    "en":{
        "Navbar": {
            "news_link": "News ",
            "presentation_link": "Our presentation",
            "mission_link": "Our mission",
            "events_link": "Our events",
            "doc_link": "Our documents",
            "contact_link": "Contact us",
            "join_link": "Join us"
        },
        "Main": {
            "join_us": ["Join us now!"]
        },
        "Mission": {
            "title": "Our mission"
        }
    }
    
}

import { useState, useEffect } from "react";

export const useLanguage = () => {
    const [language, setLanguage] = useState("en");

    const changeLanguage = (lang:string) => {
        window.localStorage.setItem("pme-lang", lang);
        setLanguage(lang);
    }

    useEffect(()=>{
        if(!window.localStorage.getItem("pme-lang"))
            window.localStorage.setItem("pme-lang","fr");
        setLanguage(window.localStorage.getItem("pme-lang")as string);
    },[]);
    
    return [lang[language], changeLanguage];
}