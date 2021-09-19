import React, { useState } from 'react';
import styles from '../../../styles/admin/Menu.module.css';
import { ArrowRight } from '@material-ui/icons';
import { ArrowDropDown } from '@material-ui/icons';
const MenuItem = ({IconLeft, link, title, subMenu, IconRight}:any) => 
{
    const [on, setOn] = useState(false);

    return (
        <>
            <a href={subMenu.length == 0 ? link : "#"} >
                <div 
                    className={"hover-padding-scroll-left " + styles.element}
                    onClick={e => setOn(!on)}
                >
                    <button><IconLeft/></button>
                    <button>{title}</button>
                    {
                        IconRight &&
                        <button>{on ? <ArrowDropDown/>: <ArrowRight/>}</button>
                    }
                </div>
                {
                    (subMenu.length > 0 && on) &&
                    <div className={styles.subnav}>
                    {
                        subMenu.map((submenu:any) => 
                        {
                            return(
                                <a href={submenu.link}>
                                    <div className={styles.element + " hover-padding-scroll-left"}>
                                        <button><div className={styles.circle}></div></button>
                                        <button>{submenu.title}</button>
                                    </div>      
                                </a>
                            )
                        })
                    }
                    </div>
                }
            </a>
        </>
    )
}

export default MenuItem;