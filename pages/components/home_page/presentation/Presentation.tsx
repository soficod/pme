import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import lang from '../../../services/lang'
import styles from '../../../../styles/landing_page/Presentation.module.css';

const Presentation = ()=>{
    
    const [language,setLanguage] = useState("en");

    useEffect(()=>{
        if(!window.localStorage.getItem("pme-lang"))
            window.localStorage.setItem("pme-lang","fr");
        setLanguage(window.localStorage.getItem("pme-lang")as string);
    },[]);

    return(
        
        <h1>{lang[language].Presentation.title}</h1>
        
    )
}
export default Presentation;