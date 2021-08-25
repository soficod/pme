import React from 'react';
import styles from '../../../../styles/landing_page/Sponsors.module.css';
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';

interface SponsorCardProps {
    color: string,
    images: {
        img: string,
        alt: string
    }[],
    type: string
};

const SponsorCard = ({color, images, type}:SponsorCardProps) => 
{
    const carouselRef = useRef(null);

    return(
        <div className={styles.sponsorCard}>
            <button 
                className={styles.sponsorHeader}
                style={{
                    backgroundColor: color
                }}
            >
                {type}
            </button>
            
            <Carousel 
                ref={carouselRef}
                isRTL={true} 
                itemsToShow={2}
                itemsToScroll={2}
                showArrows={false}
                enableAutoPlay={true}
                pagination={false}
                onNextEnd={({ index }) => {
                    if (index + 1 === images.length-1) 
                    {
                        setTimeout(() => 
                        {
                            carouselRef.current.goTo(0)
                        }, 2000);
                    }
                }}
                className={styles.sponsorCarousel}
            >
                {
                    images.map(elem => {
                        return(
                            <button>
                                <img className={styles.sponsorsElement} src={elem.img} alt={elem.alt} />
                            </button>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default SponsorCard;