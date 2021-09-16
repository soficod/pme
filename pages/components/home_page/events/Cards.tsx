import React, { useContext } from 'react';
import styles from '../../../../styles/landing_page/Cards.module.css';

const Cards = ({images, name, start, end, slug}:any)=>
{
const getDate = () =>
{
const dates = new Date(start);
const datee = new Date(end);

const dayS = dates.getDay() > 10 ? dates.getDay() : "0"+dates.getDay();
const dayE = datee.getDay() > 10 ? datee.getDay() : "0"+datee.getDay();  
return dayS+ " - " + dayE;
}

const getMonth = () => 
{
    const date = new Date(start);
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novombre", "Décembre"]
    return months[date.getMonth()] + " " + date.getFullYear();
    }

    return(
        <div className={styles.cards_container}>
            <div
                className={styles.card}
            >
                <div className={styles.imageContainer}
                    style={{
                        backgroundImage: `url(${images[0]})`
                    }}
                >
                    <svg
                        className={styles.trace}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" 
                        width="150"
                        height="100" 
                        viewBox="0 0 317.733 144.056">
                        <defs>
                            <filter id="Tracé_11" x="0" y="0" width="317.733" height="144.056" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="3" result="blur"/>
                                <feFlood flood-opacity="0.161"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_11)">
                            <path id="Tracé_11-2" data-name="Tracé 11" d="M0,0H299.733L235.585,62.188l64.149,63.869H0Z" transform="translate(9 6)" fill="#58c4dd"/>
                        </g>

                    </svg>
                    <svg
                        className={styles.rectangle}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="80"
                        height="40"
                        viewBox="0 0 88.406 83.446"
                    >
                        <defs>
                            <filter id="Rectangle_30" x="0" y="0" width="88.406" height="83.446" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"/>
                                <feGaussianBlur stdDeviation="3" result="blur"/>
                                <feFlood flood-opacity="0.161"/>
                                <feComposite operator="in" in2="blur"/>
                                <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_30)">
                            <rect id="Rectangle_30-2" data-name="Rectangle 30" width="62.783" height="34" transform="matrix(0.79, 0.62, -0.62, 0.79, 29.93, 6)" fill="#58c4dd"/>
                        </g>
                    </svg>
                    <p className={styles.cardsDate}>
                        <span className={styles.number}>{getDate()}</span>
                        <br/>
                        <span className={styles.date}>{getMonth()}</span>
                    </p>
                </div>


                <p className={styles.cards_text}>
                    {name}
                </p>
                
                <a href="login">
                    <button 
                        className={"scale-up-hover scale-down-tap "+styles.cards_button}
                    >
                        En savoir plus
                    </button>
                </a>
            </div>
        </div>
    )
}
export default Cards;

