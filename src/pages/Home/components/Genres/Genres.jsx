import { useNavigate } from 'react-router-dom';
import styles from './Genres.module.scss'
import { useEffect, useRef, useState } from 'react';
import Play from './../../../../shared/images/play.svg?react'
import NextButton from '../../../../shared/ui/NextButton';
import PrevButton from '../../../../shared/ui/PrevButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { setGenres } from '../../../../features/catalog/catalogSlice';

function Genres({ data, isLoading, isError }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let sliderRef = useRef()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };
    
    const onClickGenre = (genre) => {
        console.log(genre);
        dispatch(setGenres(genre))
        navigate('/catalog')
    }

    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>Ошибка попробуйте позже</div>

    return ( 
        <section className={`${styles.genresWrapper} container`}>
            <div className={styles.title}>
                <h2>
                    Жанры
                </h2>
                <div className={styles.buttons}>
                    <PrevButton onClick={() => sliderRef.slickPrev()} />
                    <NextButton onClick={() => sliderRef.slickNext()} />
                </div>
            </div>
            <div className={styles.genresCarousel}>
                <Slider 
                    className={styles.genres}
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                    >
                    {data.map(genre => (
                        <li key={genre.id} className={styles.genre} onClick={() => onClickGenre(genre)} >
                            <div className={styles.image}>
                                <img src={`https://anilibria.top${genre.image.preview}`} alt="" loading='lazy' />
                            </div>
                            <div className={styles.name}>
                                {genre.name}
                                <p>{genre.total_releases} релизов</p>
                            </div>
                        </li>
                    ))}
                </Slider>
            </div>
        </section>
     );
}

export default Genres;