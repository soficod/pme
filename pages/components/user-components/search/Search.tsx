import React, { useState } from 'react';
import styles from '../../../../styles/search/Search.module.css';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import { motion } from 'framer-motion';

const Search = ({searchOn, setSearchOn}:any) => 
{
    return(
        <>
        {
            searchOn &&
            <motion.div 
                className={styles.searchContainer}
                initial={{
                    scale: 0
                }}

                animate={{
                    scale:1
                }}
            >
                <CancelIcon
                    onClick={e => setSearchOn(false)}
                    className={styles.cancelIco}
                />

                <div className={styles.inputContainer}>
                    <button className={styles.icoContainer}>
                        <SearchIcon 
                            className={styles.searchIco} 
                        />
                    </button>
                    <input type="search" placeholder="Search..."/>
                    <button className={styles.searchBtn}>
                        Search
                    </button>
                </div>
            </motion.div>
        
        }
        </>
    )
}

export default Search;