import React, { useContext } from 'react';

import styles from '../../../../styles/landing_page/Footer.module.css';
import { langContext } from '../../../services/langContext';

import SendIcon from '@material-ui/icons/Send';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => 
{
    const {lang, changeLanguage}:any = useContext(langContext);
    return(
        <div className={styles.footerContainer}>
            <div className={styles.firstHalf}>

                <div className={styles.contactContainer}>

                    <img src="/images/pmei-logo.png" alt="Logo PME INTERCONNECT" />

                    <h3 style={{textAlign: "center", color: "#58C4DD", marginBottom: "15px"}}>
                        {lang.Footer.find_us}
                    </h3>

                    <div className={styles.contacts}>
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

                        <div className={styles.socials}>
                            <a href="#" style={{display: "flex", color:"white"}}>
                                <FacebookIcon />
                                <div style={{paddingLeft: "15px"}}>Facebook</div>
                            </a>

                            <a href="#" style={{marginTop: "15px", display: "flex", color:"white"}}>
                                <TwitterIcon />
                                <div style={{paddingLeft: "15px"}}>Twitter</div>
                            </a>

                            <a href="#" style={{marginTop: "15px", display: "flex", color:"white"}}>
                                <LinkedInIcon />
                                <div style={{paddingLeft: "15px"}}>LinkedIn</div>
                            </a>

                            <a href="#" style={{marginTop: "15px", display: "flex", color:"white"}}>
                                <InstagramIcon />
                                <div style={{paddingLeft: "15px"}}>Instagram</div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.form}>
                    <h3 style={{color: "#58C4DD", marginBottom: "15px"}}>{lang.Footer.contact}</h3>
                    <div className={styles.formContainer}>
                        <div className={styles.nameAndEmail}>
                            <input type="text" placeholder={lang.Footer.input_name}/>
                            <input type="email" placeholder={lang.Footer.input_email}/>
                        </div>
                        <textarea placeholder={lang.Footer.input_content}></textarea>
                    </div>
                    <button className={styles.send}>
                        <SendIcon />
                    </button>
                </div>
                   
                
            </div>
            
            <div className={styles.secondHalf}>
                <div className={styles.footerSeparator}></div>
                <p>&copy; {new Date().getFullYear()} PME INTERCONNECT - {lang.Footer.all_rights}</p>
                <br/>
            </div>
        </div>
    );
}

export default Footer;