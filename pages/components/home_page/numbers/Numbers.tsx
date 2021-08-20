import React, { useContext } from 'react';
import styles from '../../../../styles/landing_page/Numbers.module.css';
import { langContext } from '../../../services/langContext';
import Counter from './Counter';
const Numbers = () => 
{
    const {lang, changeLanguage} = useContext(langContext);
    return (
        <>
            <div className={styles.numContainer}>
                <div className={styles.part1}>
                    <button>
                        <Counter speed={1} maxCount={200} />
                        <br />
                        {lang.Numbers.signed}
                    </button>

                    <button>
                        <Counter speed={1} maxCount={500} />
                        <br />
                        {lang.Numbers.docs}
                    </button>
                </div>

                <div className={styles.part1}>
                    <button>
                        +<Counter speed={1} maxCount={1000} />
                        <br />
                        {lang.Numbers.events}
                    </button>

                    <button>
                        <Counter speed={1} maxCount={40} />
                        <br />
                        {lang.Numbers.sponsors}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Numbers;