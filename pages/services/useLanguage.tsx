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
        "Presentation": {
            "title": "Notre Présentation",
            "text":"Lorem ipsum dolor sit ametconsectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
            
        },
        "Mission": {
            "title": "Notre mission",
            "missions": [{
                title: "Mission 1",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            },
            {
                title: "Mission 2",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            },
            {
                title: "Mission 3",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            }],
        },
        "Rejoindre":{
            "title":"POURQUOI NOUS REJOINDRE",
            "text":"Lorem ipsum dolor sit ametconsectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
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
        "Presentation": {
            "title": "Our Presentation",
            "text":"Lorem ipsum dolor sit ametconsectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
            
        },
        "Mission": {
            "title": "Our mission",
            "missions": [{
                title: "Mission 1",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            },
            {
                title: "Mission 2",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            },
            {
                title: "Mission 3",
                content: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                `
            }],
           

        },
        "Rejoindre":{
            "title":"WHY JOIN US",
            "text":"Lorem ipsum dolor sit ametconsectetur, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
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