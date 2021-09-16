import React, { useContext, useState, useEffect } from 'react';
import styles from '../../../../styles/landing_page/Numbers.module.css';
import { langContext } from '../../../services/langContext';
import Counter from './Counter';

interface PropsType {
    events: number
    articles: number,
    documents: number,
    users: number
}

const Numbers = ({events, documents, articles, users}: PropsType) => 
{
    const {lang, changeLanguage}:any = useContext(langContext);
    const [on, setOn] = useState(false);

    useEffect(() => 
    {
        setOn(window.scrollY >= document.getElementById("numbers").offsetTop);
        window.addEventListener('scroll', e => 
        {
            if(document.readyState === 'complete' && 
                !on && 
                (window.scrollY >= document.getElementById("numbers").offsetTop))
            {
                setOn(true);
            }
        });
    }, []);

    return (
        <>
            <div id="numbers" className={styles.numContainer}>
                <div className={styles.darkBg}>
                    <div className={styles.part1}>
                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={users} iter={1} /></span>
                            <br />
                            {lang.Numbers.signed}
                        </button>

                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={documents} iter={1} /></span>
                            <br />
                            {lang.Numbers.docs}
                        </button>
                    </div>

                    <div className={styles.part1}>
                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={events} iter={1} /></span>
                            <br />
                            {lang.Numbers.events}
                        </button>

                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={articles} iter={1}/></span>
                            <br />
                            {lang.Numbers.articles}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Numbers;