import React, { useContext } from 'react';
import styles from '../../../../styles/landing_page/Numbers.module.css';
import { langContext } from '../../../services/langContext';
import Counter from './Counter';
const Numbers = () => 
{
    const {lang, changeLanguage}:any = useContext(langContext);
    return (
        <>
            <div className={styles.numContainer}>
                <div className={styles.darkBg}>
                    <div className={styles.part1}>
                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={200} /></span>
                            <br />
                            {lang.Numbers.signed}
                        </button>

                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={500} /></span>
                            <br />
                            {lang.Numbers.docs}
                        </button>
                    </div>

                    <div className={styles.part1}>
                        <button>
                            <span className={styles.num}>+<Counter speed={1} maxCount={1000} /></span>
                            <br />
                            {lang.Numbers.events}
                        </button>

                        <button>
                            <span className={styles.num}><Counter speed={1} maxCount={40} /></span>
                            <br />
                            {lang.Numbers.sponsors}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Numbers;