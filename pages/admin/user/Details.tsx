import React from 'react';
import styles from '../../../styles/admin/Confirm.module.css';
import Close from '@material-ui/icons/Close';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
                            typeof(user.image) != "undefined" &&
                            <>
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
                            </>
                        }
                        {
                            (typeof(user.images) != "undefined" && user.images.length > 0) &&
                            <ImageGallery  
                                items={user.images}
                                thumbnailPosition="bottom"
                                showBullets={true}
                                swipingTransitionDuration={1000}
                                slideInterval={5000}
                                slideDuration={1000}
                                preventDefaultTouchmoveEvent={true}
                                disableSwipe={true}
                                showNav={false}
                                autoPlay={true}          
                            />
                            
                        }
                        <div className={styles.infosContainer}>
                        {
                            Object.keys(user).map((key:any) => 
                            {
                                return(
                                    <>
                                    {
                                        (key !== "image"  && key !== "images" && key !== "bgColor" && key !== "slug") &&
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