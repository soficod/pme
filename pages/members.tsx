import { StylesProvider } from '@material-ui/styles'
import React from 'react'
import styles from '../styles/members/members.module.css';

const members =()=>{

   return(

    <>
    <section className={styles.sectContainer}>

        <div className={styles.container}>

        <div className={styles.filterContainer}>
                <div className={styles.filter}>
                <input className={styles.searchBar} type="text" placeholder="chercher un document.."></input>
                <button className={styles.searchButton} ><img src="images/icons8-search-50.png" style={{width:20}}/>Chercher</button>
                </div>
        </div>
            <div className={styles.membersContainer}>
                
                <div className={styles.member}>

                    <img src="images/men.jpg"/>
                    <h1>john smith</h1>
                    <p>Expert</p>
                </div>
                 <div className={styles.member}>

                    <img src="images/men.jpg"/>
                    <h1>john smith</h1>
                    <p>Expert</p>
                </div>

                <div className={styles.member}>
                    <img src="images/men.jpg"/>
                    <h1>john smith</h1>
                    <p>Expert</p>
                </div>

                <div className={styles.member}>
                    <img src="images/men.jpg"/>
                    <h1>john smith</h1>
                    <p>Expert</p>
                </div>
            </div>    
        </div>

    </section>
</>
   ) 

    
}
export default members;