import React, { useContext, useState, useEffect } from 'react';
import styles from '../../../../styles/landing_page/Sponsors.module.css';
import { langContext } from '../../../services/langContext';
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';
import SponsorCard from './SponsorCard';
import { silverSponsors, goldSponsors, diamondSponsors, organizers, partners } from '../../../../pme-data/sponsors';

const Sponsors = () => 
{
    const {lang, changeLanguage}:any = useContext(langContext);
    const [on, setOn] = useState(false);
    const carouselRef = useRef(null);
    const carouselRef2 = useRef(null);
    useEffect(() => 
    {
        setOn(true);
    });

    return(
        <section className={styles.sponsorSection}>
        {
            on &&
            <>
                <div className={styles.fstHalf}>
                    <div className={styles.organizer}>
                        <h1>{lang.Sponsors.organizers}</h1>
                        <br/>
                        <Carousel 
                            ref={carouselRef}
                            isRTL={true} 
                            itemsToShow={3}
                            showArrows={false}
                            enableAutoPlay={true}
                            pagination={false}
                            onNextEnd={({ index }) => {
                                if (index + 1 === organizers.length-2) 
                                {
                                    setTimeout(() => 
                                    {
                                        carouselRef.current.goTo(0)
                                    }, 2000);
                                }
                            }}
                        >
                            {
                                organizers.map(org => {
                                    return(
                                        <button>
                                            <img className={styles.logoCarousel} src={org.img} alt={org.alt} />
                                        </button>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                        
                    <div className={styles.sponsorSeparator}></div>

                    <div className={styles.organizer}>
                        <h1>{lang.Sponsors.partners}</h1>
                        <br/>
                        <Carousel 
                            ref={carouselRef2}
                            isRTL={true} 
                            itemsToShow={3}
                            showArrows={false}
                            enableAutoPlay={true}
                            pagination={false}
                            onNextEnd={({ index }) => {
                                if (index + 1 === partners.length-2) 
                                {
                                    setTimeout(() => 
                                    {
                                        carouselRef2.current.goTo(0)
                                    }, 2000);
                                }
                            }}
                        >
                            {
                                partners.map(partner => {
                                    return(
                                        <button>
                                            <img className={styles.logoCarousel} src={partner.img} alt={partner.alt} />
                                        </button>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                
                <h1>{lang.Sponsors.sponsors}</h1>
                
                <div className={styles.sndHalf}>
                    <SponsorCard
                        images={silverSponsors}
                        color="#C0C0C0"
                        type={lang.Sponsors.silver}
                    />

                    <SponsorCard
                        images={goldSponsors}
                        color="#FFD700"
                        type={lang.Sponsors.gold}
                    />

                    <SponsorCard
                        images={diamondSponsors}
                        color="#CEE4E6"
                        type={lang.Sponsors.diamond}
                    />
                </div>
            
            </>
        }
        </section>
    );
}

export default Sponsors;