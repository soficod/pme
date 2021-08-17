import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLanguage } from '../../../services/useLanguage';
import styles from '../../../../styles/landing_page/Presentation.module.css';

const Presentation = ()=>{
    
    const [lang, changeLanguage] = useLanguage();
    return(
        
        <h1>{lang.Navbar.news_link}</h1>
    )
}
export default Presentation;