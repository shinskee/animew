import { useNavigate } from 'react-router-dom';
import Play from './../../../../shared/images/play.svg?react'
import Favorite from './../../../../shared/images/favorite.svg?react'
import Carousel from '../../../../shared/ui/Carousel/Carousel';

import styles from './Popular.module.scss'

function Popular({ data, isError }) {
    const navigate = useNavigate()

    if (isError) return <div>Ошибка попробуйте позже</div>
    return ( 
        <section className={`${styles.popularWrapper} container`}>
            <Carousel 
                title={'ТОП 10'}
                slides={2}
                slidesTablet={2}
                slidesMobile={1}
            >
                {data.map((e, i) => (
                        <li key={e.id} className={styles.swiperCard} >
                            <div className={styles.img} onClick={() => navigate(`/title/${e.id}`)}>
                                <span>{i + 1}</span>
                                <img src={`https://anilibria.top${e.poster.src}`} alt="" loading='lazy' />       
                            </div>
                            <div className={styles.info}>
                                <h2>
                                    {e.name.main}
                                </h2>
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
            </Carousel>
        </section>
     );
}

export default Popular;