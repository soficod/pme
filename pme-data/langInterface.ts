export interface langInterface {
    fr: {
        Navbar: {
            news_link: string,
            presentation_link: string,
            mission_link: string,
            events_link: string,
            doc_link: string,      
            contact_link: string,
            join_link: string
        },
        Main: {
            join_us: string[]
        },
        Presentation: {
            title: string,
            text: string
        },
        Mission: {
            title: string,
            missions: [{
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            }],
        },
        Rejoindre:{
            title:string,
            text: string
        },
        Events:{
            title: string,
        },
        Numbers: {
            signed: string,
            docs: string,
            events: string,
            sponsors: string
        },
        Sponsors: {
            organizers: string,
            partners: string,
            sponsors: string,
            silver: string,
            gold: string,
            diamond: string
        },
        Footer: {
            input_name: string,
            input_email: string,
            input_content: string,
            input_send: string,
            find_us: string,
            contact: string,
            all_rights: string
        }
    },
    en: {
        Navbar: {
            news_link: string,
            presentation_link: string,
            mission_link: string,
            events_link: string,
            doc_link: string,      
            contact_link: string,
            join_link: string
        },
        Main: {
            join_us: string[]
        },
        Presentation: {
            title: string,
            text: string
        },
        Mission: {
            title: string,
            missions: [{
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            },
            {
                title: string,
                content: string
            }],
        },
        Rejoindre:{
            title:string,
            text: string
        },
        Events:{
            title: string,
        },
        Numbers: {
            signed: string,
            docs: string,
            events: string,
            sponsors: string
        },
        Sponsors: {
            organizers: string,
            partners: string,
            sponsors: string,
            silver: string,
            gold: string,
            diamond: string
        },
        Footer: {
            input_name: string,
            input_email: string,
            input_content: string,
            input_send: string,
            find_us: string,
            contact: string,
            all_rights: string
        }
    }
}