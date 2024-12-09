import { useRef } from "react";
import Slider from "react-slick";
import Title from "../Title/Title";
import PrevButton from "../PrevButton";
import NextButton from "../NextButton";

import styles from './Carousel.module.scss'

function Carousel({ title, children, slides, slidesMobile, slidesTablet }) {
    let sliderRef = useRef()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: slides,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: slidesTablet,
              slidesToScroll: slidesTablet,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: slidesMobile,
              slidesToScroll: slidesMobile,
              initialSlide: slidesMobile
            }
            }
        ]
    };

    return ( 
        <div>
            <div className={styles.header}>
                <Title type={'section'}>{title}</Title>
                <div className={styles.buttons}>
                    <PrevButton onClick={() => sliderRef.slickPrev()} />
                    <NextButton onClick={() => sliderRef.slickNext()} />
                </div>
            </div>
            <Slider 
                    arrows={false}
                    className={styles.swiper}
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}    
            >
                    {children}
            </Slider>
        </div>
     );
}

export default Carousel;