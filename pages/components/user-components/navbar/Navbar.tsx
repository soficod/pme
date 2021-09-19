import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../../../styles/header/Navbar.module.css';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = ({setSearchOn, isAdmin, isLogged}:any) => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', e => {
            setIsMobile(window.innerWidth <= 800);
            console.log("done");
        });
    }, []);

    return(
        <>
            {
                !isMobile?
                <DesktopNav styles={styles} isLogged={isLogged} />
                :
                <MobileNav 
                    styles={styles} 
                    setSearchOn={setSearchOn}
                    isAdmin={isAdmin}
                    isLogged={isLogged}
                />
            }
        </>
    )
}

export default Navbar;