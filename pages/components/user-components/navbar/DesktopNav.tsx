import React, { useState, useContext, useEffect } from 'react';
import { langContext } from '../../../services/langContext';
import LanguageIcon from '@material-ui/icons/Language';
import { motion } from 'framer-motion';

const DesktopNav = ({styles}:any) => {

    const {lang, changeLanguage} = useContext(langContext);

    return(
        <div className={styles.navbar}>
            <div className={styles.navElements}>
                <a href="#"><button>Actualité</button></a>
                <a href="#"><button>Evenements</button></a>
                <a href="#"><button>Formations</button></a>
                <a href="#"><button>Documents</button></a>
                <a href="#"><button>Etudes</button></a>
                <a href="#"><button>Produits</button></a>
            </div>
        </div>
    );
}

export default DesktopNav;