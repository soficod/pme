import React, { useState, useContext } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/Documents.module.css';
import { motion } from 'framer-motion';
import DocumentCard from './DocumentCard';
import Carousel from 'react-elastic-carousel';

const Documents = ()=>{

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
                       <DocumentCard/>
                       <DocumentCard/>
                       <DocumentCard/>
                       <DocumentCard/>
                      </Carousel>
                  </div>
                
                        <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ 
                          scale: 0.9 
                      }}
                
                    className={styles.documents_button}>
                    <span className={styles.button_text}>
                       {lang.Documents.title}
                    </span>
                </motion.button>
                
                
                </div>

        </section>

    )
}

export default Documents;