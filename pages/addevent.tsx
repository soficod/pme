
import React from 'react'
import styles from '../styles/addevent/addevent.module.css';



const addevent=()=>{

    return(

        <>
       
          <section className={styles.sectionContainer} >
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>

                </div>
                    <div className={styles.formContainer}>
                      <button className={styles.styledTitle} >      
                        <img src="images/icons8-add-30.png"/>
                        <h1 className={styles.title}> 

                         Add event </h1></button>
                
                        <form  className={styles.form}> 
                            <label htmlFor="nom d'événment" >name</label>
                            <input type="text"  name="name" placeholder="nom d'événement.."/><br/>
                            <label htmlFor="startdate">Start event</label>
                            <input type="date"  name="statdate" placeholder="date début d'événement.."/><br/>
                            <label htmlFor="endDate">End event</label>
                            <input type="date"  name="endDate"placeholder="date fin d'événement.."/><br/>
                            
                            <label htmlFor="organizer">Organisateur</label>
                            <input type="text"  name="organizer"  placeholder="nom d'organisateur.."/><br/>
                          
                            
                            <label htmlFor="wilaya" >Wilaya</label>
                            <select name="wilaya" >   

                            <option className={styles.opt} disabled selected> Boumerdes</option>
                            </select><br/>
                            
                         
                            
                            <label htmlFor="town" >Ville</label>
                            <select name="town">
                            <option disabled selected> Boumerdes</option>
                            </select>
                            <label htmlFor="daira" >Daira</label>
                            <select name="daira" placeholder="Daira..">
                            <option disabled selected> Boumerdes</option>
                            </select>
                              
                              <br/>
                            <label className={styles.description}htmlFor="w3review">Description</label>
                            <textarea  name="description" >
                            At w3schools.com you will learn how to make a website. 
                            They offer free tutorials 
                            in all web development technologies.
                            </textarea>
                            <button className={styles.button}> <span> +</span> Add</button>
                            
                            

                        </form>
                        
                    </div>
      
            </div>
              



            
              
          
          
          
          </section>      

        </>
    )
}

export default addevent;