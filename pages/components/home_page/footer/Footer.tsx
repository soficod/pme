import React, { useContext } from 'react';

import styles from '../../../../styles/landing_page/Footer.module.css';
import { langContext } from '../../../services/langContext';

import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () => 
{
    const {lang, changeLanguage} = useContext(langContext);
    return(
        <div className={styles.footerContainer}>
            <div className={styles.firstHalf}>
                <div className={styles.formContainer}>
                    <h1 style={{color: "#58C4DD", marginBottom: "15px"}}>{lang.Footer.contact}</h1>
                    <div className={styles.formControl}>
                        <label for="name">{lang.Footer.input_name}</label>
                        <br/>
                        <input type="text" id="name"/>
                    </div>

                    <div className={styles.formControl}>
                        <label for="email">{lang.Footer.input_email}</label>
                        <br/>
                        <input type="email" id="email"/>
                    </div>

                    <div className={styles.formControl}>
                        <label for="object">{lang.Footer.input_object}</label>
                        <br/>
                        <input type="text" id="object"/>
                    </div>

                    <div className={styles.formControl}>
                        <label for="message">{lang.Footer.input_content}</label>
                        <br/>
                        <textarea id="message"></textarea>
                    </div>

                    <button>
                        <SendIcon />
                        <span style={{
                            marginLeft: "5px"
                        }}>{lang.Footer.input_send}</span>
                    </button>
                </div>
                        
                <button className={styles.imgHolder}>
                    <img src="/images/pmei-logo.png" alt="Logo PME INTERCONNECT" />
                </button>
                
                <div className={styles.contactContainer}>
                    <h1 style={{color: "#58C4DD", marginBottom: "15px"}}>{lang.Footer.find_us}</h1>
                    <div className={styles.contactInfos}>
                        <div style={{display: "flex", color:"white"}}>
                            <PhoneIcon />
                            <div style={{paddingLeft: "15px"}}>+213 55 55 55 55 5</div>
                        </div>

                        <div style={{marginTop: "15px", display: "flex", color:"white"}}>
                            <PrintIcon />
                            <div style={{paddingLeft: "15px"}}>123-456-789</div>
                        </div>

                        <div style={{marginTop: "15px", display: "flex", color:"white"}}>
                            <AlternateEmailIcon />
                            <div style={{paddingLeft: "15px"}}>example@mail.com</div>
                        </div>

                        <div style={{marginTop: "15px", display: "flex", color:"white"}}>
                            <LocationOnIcon />
                            <div style={{paddingLeft: "15px"}}>Alger rue test 123</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Footer;