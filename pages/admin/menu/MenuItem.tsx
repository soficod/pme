import React, { useState } from 'react';
import styles from '../../../styles/admin/Menu.module.css';

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
                        <button><IconRight/></button>
                    }
                </div>
                {
                    on &&
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