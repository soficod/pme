import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../../../styles/landing_page/Navbar.module.css';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        setIsMobile(window.innerWidth <= 1000);
        window.addEventListener('resize', e => {
            setIsMobile(window.innerWidth <= 1000);
            console.log("done");
        });
    }, []);

    return(
        <>
            {
                !isMobile?
                <DesktopNav styles={styles} />
                :
                <MobileNav styles={styles} />
            }
        </>
    )
}

export default Navbar;