import React, { useState } from 'react';
import styles from '../../../styles/user-profil/UserProfil.module.css';
import ProfileInput from '../user-components/ProfileInput';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';

const UserPage = ({data}:any) => 
{
    return(
        <div className={styles.profilContainer}>
            <div className={styles.profilPictureContainer}>
                {
                    data.image ?
                    <div className={styles.pfp}
                        style={{
                            backgroundImage: `url(${data.image})`
                        }}
                    >
                    </div>
                    :
                    <button className={styles.pfp}
                        style={{
                            fontSize: "2.5em",
                            fontWeight:"bold"
                        }}
                    >
                        {data.name[0].toUpperCase()+" "+data.name[1].toUpperCase()}
                    </button>
                }
                <div>
                    <ProfileInput 
                        placeholder="Saisissez un nom"
                        value={data.name}
                        disabledClassName={styles.nameInput+" "+styles.disabledInput}
                        className={styles.editNameInput}
                        editable
                    />

                    <ProfileInput 
                        placeholder="Saisissez un type"
                        value={data.type}
                        disabledClassName={styles.typeInput+" "+styles.disabledInput}
                        className={styles.editCountryInput}
                        editable
                    />
                </div>
                <a href={"/messages/"+data.id}>
                    <div className={styles.contactContainer}>
                        <button>
                            <MessageIcon />
                        </button>
                        <button className={styles.contactBtn}>
                            Contacter
                        </button>
                    </div>
                </a>

                <div className={styles.basicInfos}>
                    <table>
                        <tr>
                            <td><AlternateEmailIcon/></td>  
                            <td>
                                <ProfileInput 
                                    placeholder="Saisissez un email"
                                    value={data.email}
                                    disabledClassName={styles.emailInput+" "+styles.disabledInput}
                                    className={styles.editCountryInput}
                                    editable
                                />
                            </td>
                        </tr>
                        {
                            data.phones.length > 0 &&
                            <tr>
                                <td><PhoneIphoneIcon/></td>  
                                <td>
                                    <ProfileInput 
                                        placeholder="Saisissez un email"
                                        value={data.phones[0]}
                                        disabledClassName={styles.emailInput+" "+styles.disabledInput}
                                        className={styles.editCountryInput}
                                        editable
                                    />
                                </td>
                            </tr>
                        }

                        {
                            typeof(data.website) != "undefined"  &&
                            <tr>
                                <td><PublicIcon/></td>  
                                <td>
                                    <ProfileInput 
                                        placeholder="Saisissez un site web"
                                        value={data.website}
                                        disabledClassName={styles.websiteInput+" "+styles.disabledInput}
                                        className={styles.editCountryInput}
                                        editable
                                    />
                                </td>
                            </tr>
                        }       
                        {
                            typeof(data.ceo) != "undefined"  &&
                            <tr>
                                <td>CEO</td>  
                                <td>
                                    <ProfileInput 
                                        placeholder="Saisissez un site web"
                                        value={data.ceo}
                                        disabledClassName={styles.websiteInput+" "+styles.disabledInput}
                                        className={styles.editCountryInput}
                                        editable
                                    />
                                </td>
                            </tr>
                        }       
                    </table>
                </div>
            </div>
                
            <div className={styles.sndHalfContainer}>
                <div className={styles.description}>
                    <h1>Description</h1>
                    <p>{data.description}</p>
                    <div>
                        <h1>Plus d'informations : </h1>
                        <div className={styles.additionalInfos}>
                        {
                            data.phones.length > 1 && 
                            <ul>
                                <b>Autres téléphones</b> :
                                {
                                    data.phones.map((phone:string, index:number) => 
                                    {
                                        return(
                                            <>
                                            {
                                                index >= 1 &&
                                                <li>
                                                    {phone}
                                                </li>
                                            } 
                                            </>      
                                        )
                                    })
                                }
                            </ul>
                        }

                        {
                            data.emails.length > 0 && 
                            <ul>
                                <b>Autres emails</b> :
                                {
                                    data.emails.map((email:string, index:number) => 
                                    {
                                        return(
                                            <>
                                            {
                                                <li>
                                                    {email}
                                                </li>
                                            } 
                                            </>      
                                        )
                                    })
                                }
                            </ul>
                        }

                        {
                            typeof(data.areas) != "undefined" && 
                            <ul>
                                <b>Zones d'activité</b> :
                                {
                                    data.areas.map((area:string, index:number) => 
                                    {
                                        return(
                                            <>
                                            {
                                                <li>
                                                    {area.name}
                                                </li>
                                            } 
                                            </>      
                                        )
                                    })
                                }
                            </ul>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;