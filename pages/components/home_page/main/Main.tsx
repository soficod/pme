import React, { useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Main.module.css';
import Particles from "react-tsparticles";

const Main = () => {

    const {lang, changeLanguage} = useContext(langContext);
    return(
        <>
            <div className={"fade-in "+styles.mainContainer}>
                

                <div className={styles.mainContent}>
                    <div className={styles.mainVerticalCenter}>
                        <img 
                            src="/images/pmei-logo.png" alt="Logo PME INTERCONNECT"
                            className={styles.mainLogo}
                            
                        />
                        <br/>
                        <div 
                            className={styles.joinBtnContainer}
                            
                        >
                            <a href="register">
                                <button 
                                    className={"scroll-up scale-up-hover scale-down-tap " + styles.joinUsBtn}
                                >
                                    {lang.Main.join_us.map((txt:string, index:number) => {
                                        return (
                                            <>
                                                {
                                                    (index > 0 &&
                                                    <br/>) 
                                                }
                                                {txt}
                                            </>
                                        );
                                    })}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;