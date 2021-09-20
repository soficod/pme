import React from 'react'
import styles from '../styles/document/document.module.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { width } from '@mui/system';

const document=()=>{

    const images = [
        {
          original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        }
      ]

    return(
        <>
        <section className={styles.sectionContainer}>

            <div className={styles.container}>
                <div className={styles.documentContainer}>
                <div className={styles.gallery}>
                    <ImageGallery  
                      items={images}
                      thumbnailPosition="bottom"
                      showBullets={true}
                      swipingTransitionDuration={1000}
                      slideInterval={5000}
                      slideDuration={1000}
                      preventDefaultTouchmoveEvent={true}
                      disableSwipe={true}
                      showNav={false}
                      autoPlay={false}
                      showautoplay={false}
                    
                    />
                 </div>
                    <div className={styles.details}>
                        <ul>
                            <li>posted by : <span>john rythm</span></li>
                            <li>updated :<span>25-01-2021</span></li>
                            <li>created in :<span>25-01-2021</span></li>
                        </ul>
                    </div>
                    <div className={styles.text}>
                       <h1>Titre du document </h1>

                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos 
                            dolores et quas molestias excepturi sint occaecati cupiditate 
                            non provident, similique sunt in culpa qui officia deserunt 
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
                            rerum facilis est et expedita distinctio. Nam libero tempore, cum 
                            soluta nobis est eligendi optio cumque nihil impedit quo minus id 
                            quod maxime placeat facere possimus, omnis voluptas assumenda est, 
                            omnis dolor repellendus. Temporibus autem quibusdam et aut officiis 
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
                            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                            tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores 
                            alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>

                            <button className={styles.button}>
                                
                                <img src="images/icons8-download-30.png" style={{width:20}}/>
                                download</button>
                    </div>
                    
                </div>
                <div className={styles.filterContainer}>
                    <div className={styles.filter}>
                    <input className={styles.searchBar} type="text" placeholder="chercher un document.."></input>
                    <button className={styles.searchButton} ><img src="images/icons8-search-50.png" style={{width:20}}/>Chercher</button>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default document;