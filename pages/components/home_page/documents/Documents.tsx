import React, { useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Documents.module.css';
import DocumentCard from './DocumentCard';
import Carousel from 'react-elastic-carousel';

const Documents = ({documents}:any)=>{

    const {lang, changeLanguage}:any = useContext(langContext);



    return(
        <section className={styles.documents_section}>
                <div className={styles.container}
                    style={{
                        position:'relative',
                        zIndex: 250
                    }}>
                        <h1 className={styles.documents_title}>
                            {lang.Documents.title}
                        </h1>
                        
                        <div 
                            className="separator"
                            style={{
                                margin: "auto",
                                backgroundColor:"#081744"
                            }}
                        >
                            
                        </div>
                         
                    <div className={styles.carouselContainer}>
                        <Carousel isRTL={true} itemsToShow={1} >
                        {
                            documents.map((doc:any) => 
                            {
                                return(
                                <DocumentCard
                                    title={doc.title}
                                    slug={doc.slug}
                                    content={doc.content}   
                                    images={doc.images}
                                />
                                )
                            })
                        }
                      </Carousel>
                  </div>
                    <a href="/documents">
                    <button 
                        className={"scale-up-hover scale-down-tap "+styles.documents_button}
                    >
                        <span className={styles.button_text}>
                            {lang.Documents.title}
                        </span>
                    </button>
                    </a>
                
                
                </div>

        </section>

    )
}

export default Documents;