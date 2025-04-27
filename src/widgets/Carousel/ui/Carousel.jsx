import styles from "./Carousel.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo, useCallback, useMemo, useRef } from "react";
import CarouselHeader from "./CarouselHeader";
import Slider from "react-slick";

const Carousel = memo(
  ({ cls, title, children, slides, slidesTablet, slidesMobile }) => {
    
    const sliderRef = useRef();

    const settings = useMemo(() => {
      return {
        infinite: true,
        cssEase: "ease-in-out",
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
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: slidesMobile,
              slidesToScroll: slidesMobile,
              initialSlide: slidesMobile,
            },
          },
        ],
      };
    }, [slides, slidesMobile, slidesTablet]);

    const onClickPrev = useCallback(() => {
      sliderRef.current.slickPrev();
    }, []);

    const onClickNext = useCallback(() => {
      sliderRef.current.slickNext();
    }, []);

    return (
      <section
        className={classNames(styles.carousel, {}, [
          styles[cls],
          "container",
        ])}
      >
        <CarouselHeader onClickPrev={onClickPrev} onClickNext={onClickNext} title={title} sliderRef={sliderRef} />
        <Slider
          arrows={false}
          className={styles.swiper}
          ref={sliderRef}
          {...settings}
        >
          {children}
        </Slider>
      </section>
    );
  }
);

export default Carousel;
