import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';

const DesktopNav = ({styles}:any) => {

    const {lang, changeLanguage} = useContext(langContext);

    return(
        <div className={styles.navbar}>
            <div className={styles.navElements}>
                <a href="/news"><button>Actualité</button></a>
                <a href="/events"><button>Evenements</button></a>
                <a href="/trainings"><button>Formations</button></a>
                <a href="/documents"><button>Documents</button></a>
                <a href="/studies"><button>Etudes</button></a>
            </div>
        </div>
    );
}

export default DesktopNav;