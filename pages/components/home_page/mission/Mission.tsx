import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Mission.module.css';

const Mission = () => 
{
    const {lang, changeLanguage} = useContext(langContext);

    return(
        <>
            <div className={styles.mission_section}>
                <h1 className={styles.mission_title}>
                    {lang.Mission.title}
                </h1>
            </div>
        </>
    )
}

export default Mission;