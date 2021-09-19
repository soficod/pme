import React from 'react';
import styles from '../../../styles/admin/Confirm.module.css';
import Close from '@material-ui/icons/Close';

const Details = ({user, on, setOn}:any) => 
{
    return(
        <>
        {
            on &&
            <div className={styles.popup}>
                <div className={styles.popupContent}>
                    <div className={styles.popupHeader}>
                        <div></div>
                        <Close
                            style={{
                                cursor:"pointer"
                            }}
                            onClick={e => setOn(false)}
                        />
                    </div>
                    <div className={styles.inf}>
                        {
                            user.image ?
                            <div 
                                className={styles.popupPfp}
                                style={{
                                    backgroundImage: `url(${user.image})`
                                }}
                            ></div>
                            :
                            <div style={{textAlign:"center"}}>
                                <button className={styles.popupPfp} style={{backgroundColor: user.bgColor}}>
                                    {user.name[0].toUpperCase()+" "+user.name[1].toUpperCase() }
                                </button>
                            </div>
                        }
                        <div className={styles.infosContainer}>
                        {
                            Object.keys(user).map((key:any) => 
                            {
                                return(
                                    <>
                                    {
                                        (key !== "image" && key !== "bgColor" && key !== "slug") &&
                                        <div className={styles.userInfo}>
                                            <label><b>{key.toUpperCase()}</b></label>
                                            <input type="text" 
                                                value={user[key]}
                                            />
                                        </div>
                                    }
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Details;