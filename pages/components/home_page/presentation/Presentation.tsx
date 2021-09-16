import React, { useContext, useEffect, useState } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Presentation.module.css';

const Presentation = () => 
{
    const {lang, changeLanguage} = useContext(langContext);
    const [on, setOn] = useState(false);

    useEffect(() => 
    {
        setOn(window.scrollY >= document.getElementById("presentation_link").offsetTop);
        window.addEventListener('scroll', e => 
        {
            if(document.readyState === 'complete' && 
                !on && 
                (window.scrollY >= document.getElementById("presentation_link").offsetTop))
            {
                setOn(true);
            }
        });
    }, []);

    return(
        <>
            <div id="presentation_link" className={styles.presentationContainer}>
                    <div className={styles.shape}></div>

                    <div className={styles.arrow}></div>
                    <div className={styles.arrowhite}></div>
                <div className={styles.maincontainer}>
                {
                    on &&
                    <>
                    <div className={styles.box}></div> 
                
                    <div 
                        className={"slide-r2l " + styles.container}

                    >
                        { 
                            typeof(lang.Presentation) != "undefined"
                            ?
                            <>
                                <h1 style={{
                                    paddingTop:"25px"
                                }}>
                                    {lang.Presentation.title}
                                </h1>
                                <div className="separator"></div>
                                <p className={styles.text}>{lang.Presentation.text}</p>
                            </>
                            :
                            <>
                                <h1>Notre présentation</h1>
                                <div className={styles.vide}></div>
                                <p>
                                    Lorem ipsum dolor sit ametconsectetur, 
                                    adipiscing elit sed do eiusmod tempor incididunt 
                                    ut labore et dolore magna aliqua Ut enim ad minim 
                                    veniam quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat Duis aute irure dolor 
                                    in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur Excepteur sint occaecat 
                                    cupidatat non proident sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum
                                </p>
                            </>
                        }
                        
                    </div>  
                    

                    <div 
                        className={"slide-l2r "+styles.imageContainer }
                        
                    >
                        <img className={styles.image_1} src="images/Rectangle.png"/>
                        <img className={styles.imglobal} src="images/woman.png"/>
                        <img className={styles.image_2} src="images/Tracé.png"/>
                
                    </div>
                    </>
                }
            
                </div>
            </div>
            <div className={styles.foot}></div>
        </>
    )
}

export default Presentation;