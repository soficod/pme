import { createContext } from 'react';
import { useLanguage } from './useLanguage';

export const langContext = createContext({
    lang: {
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
            "title": "Our mission"
        }
    },
    changeLanguage: ()=>{
        
    }
});