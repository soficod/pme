import React,{ useState, useContext, useEffect } from 'react';
import { langContext } from '../../../services/langContext';
import styles from '../../../../styles/landing_page/ReviewsCard.module.css';
import { motion } from 'framer-motion';
import Carousel from 'react-elastic-carousel';


const reviews = [
    {
        content:"Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        author: "author 1"
    },
    {
        content: "Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        author: "Author 2"
    },
    {
        content: "Contrary to popular belief,Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        author: "Author 3"
    },
];

const ReviewsCard =()=>{
    const [review,setReview] = useState(0);
    const [visible, setVisible] = useState(false);
    const [isHover, setIsHover] = useState(false)
    
    useEffect(() => 
    {
        if(!visible)
            setVisible(true);
    }, [review]);
    return(
        
        <div className={styles.reviewsContainer}>
          
            {
                visible &&
            <motion.div
                className={styles.content}

                initial={{
                       y: -15,
                        opacity: 0
                    }}

                    animate={{
                        y: [-15,0,0,-15],
                        opacity: [0, 1, 1, 0]
                    }}

                    onAnimationComplete={() => {
                        setVisible(false)
                        setReview((review+1)%3)
                    }}

                    transition={{
                        duration:5,
                
                    }}
                    whileHover={{
                        scale:1
                    }}
                    
                    >
                  
                <p className={styles.text}>
                    {reviews[review].content}
                </p>
                <span className={styles.author}>-{reviews[review].author}</span>
             </motion.div>
            }
        </div>
    )
}



export default ReviewsCard;