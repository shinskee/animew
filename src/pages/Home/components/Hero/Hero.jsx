import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.scss'
import { useEffect, useState } from 'react';
import Play from './../../../../shared/images/play.svg?react'

function Hero({ data, isLoading, isError }) {
    const navigate = useNavigate()
    // const [date, setDate] = useState()
    // console.log(data[1]);    
    
    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>Ошибка попробуйте позже</div>
    return ( 
        <section className={`${styles.heroWrapper} container`}>
            <div className={styles.hero}>
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
                    <div className={styles.lastEpisode}>
                        <p>Вышла:</p>
                        <div className={styles.lastEpisodePreview}>
                            <img src={`https://anilibria.top${data[1].latest_episode.preview.src}`} alt="" />
                        </div>
                        <div className={styles.lastEpisodeInfo}>
                            <p className={styles.episode}><span>{data[1].latest_episode.ordinal}</span> серия.</p>
                            <p>{data[1].latest_episode.name}</p>
                        </div>
                    </div>
                    <button>
                        <Play />
                        <p>Смотреть</p>
                    </button>
                </div>
            </div>
        </section>
     );
}

export default Hero;