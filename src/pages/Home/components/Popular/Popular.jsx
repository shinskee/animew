import { useNavigate } from 'react-router-dom';
import styles from './Popular.module.scss'
import { useEffect, useRef, useState } from 'react';
import Play from './../../../../shared/images/play.svg?react'
import NextButton from '../../../../shared/ui/NextButton';
import PrevButton from '../../../../shared/ui/PrevButton';
import Favorite from './../../../../shared/images/favorite.svg?react'
import Slider from 'react-slick';

function Popular({ data, isLoading, isError }) {
    const navigate = useNavigate()
    const [ translate, setTranslate ] = useState(0)
    let sliderRef = useRef()

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
            }
        ]
    };

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            if (translate < 8) {
                setTranslate(prev => prev + 2)
            } else {
                setTranslate(0)
            }
        }, 8000);

        return () => {
            clearTimeout(setTimeoutId)
        }
    }, [translate])
    
    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>Ошибка попробуйте позже</div>
    return ( 
        <section className={`${styles.popularWrapper} container`}>
            {/* <div className={styles.popular}>
                <div className={styles.heroImg}>
                    <img src={`https://anilibria.top${data[1].poster.src}`} alt="" onClick={() => navigate(`/title/${data[1].id}`)} />       
                </div>
                <div className={styles.info}>
                    <h1>{data[1].name.main}</h1>
                    <ul className={styles.infoList}>
                        <li>{data[1].season.description}</li>
                        <li>{data[1].year}</li>
                        <li>{data[1].age_rating.label}</li>
                    </ul>
                    <ul className={styles.infoList}>
                        {data[1].genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <p className={styles.description}>{data[1].description}</p>
                    <button>
                        <Play />
                        <p>Смотреть</p>
                    </button>
                </div>
            </div> */}
            <div className={styles.title}>
                <h2>
                    ТОП 10
                </h2>
                <div className={styles.buttons}>
                    <PrevButton onClick={() => sliderRef.slickPrev()} />
                    <NextButton onClick={() => sliderRef.slickNext()} />
                </div>
            </div>
            <div className={styles.swiperWrapper}>
                <Slider 
                    arrows={false}
                    className={styles.swiper}
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}    
                >
                    {data.map(e => (
                        <li key={e.id} className={styles.swiperCard} style={{transform: `translateX(-${translate}00%)`}} >
                            <div className={styles.img}>
                                <img src={`https://anilibria.top${e.poster.src}`} alt="" onClick={() => navigate(`/title/${e.id}`)} loading='lazy' />       
                            </div>
                            <div className={styles.info}>
                                <h1>
                                    {e.name.main}
                                </h1>
                                <ul className={styles.infoList}>
                                    <li>{e.season.description}</li>
                                    <li>{e.year}</li>
                                    <li>{e.age_rating.label}</li>
                                </ul>
                                <ul className={styles.infoList}>
                                    {e.genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                                <p className={styles.description}>{e.description}</p>
                                <div className={styles.favorite}>
                                    <Favorite />
                                    {e.added_in_users_favorites}
                                </div>
                                <button onClick={() => navigate(`/title/${e.id}`)}>
                                    <Play />
                                    <p>Смотреть</p>
                                </button>
                            </div>
                        </li>
                    ))}
                </Slider>
            </div>
        </section>
     );
}

export default Popular;