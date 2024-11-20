import styles from './../../Catalog.module.scss'
import favoriteIcon from './../../../../../shared/images/favorite.svg'
import favoriteOffIcon from './../../../../../shared/images/favorite-off.svg'
import useFavorite from '../../../../../shared/helpers/useFavorite';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function CatalogCard({ e, isLoading, dataFavorites }) {
    const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite()
    const navigate = useNavigate()
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    return ( 
    <div className={styles.cardWrapper} >
                                    <div ref={ref} className={styles.card} onClick={() => navigate(`/title/${e.id}`)} >
                                        {
                                            !isLoading ? (
                                                <div className={inView && !isLoading ? styles.cardImg : `${styles.cardImg} ${styles.blur}`}>
                                                    <img onClick={() => navigate(`/title/${e.id}`)} key={e.id} className={styles.cardImg} src={ e.poster?.src ? `https://anilibria.top${e.poster?.src}` : `https://anilibria.top${e.posters?.small.url}`} alt="" />
                                                </div>
                                                ) : (
                                                    <div className={styles.cardSceleton}></div>
                                                )
                                        }
                                        <div className={styles.cardDescription}>
                                            <h5 className={styles.title}>{e.name.main}</h5>
                                            <div className={styles.descriptionBlock}>
                                                <p className={styles.subtitle}>{e.name.english}</p>
                                                <div className={styles.genresList}>
                                                    {e.genres
                                                        .map(e => (
                                                            <li key={e.id} className={styles.genres}>{e.name}</li>
                                                        ))}
                                                </div>
                                                <ul className={styles.type}>
                                                    <li>{e.year}</li>
                                                    <li>{e.season.description}</li>
                                                    <li>{e.type.description}</li>
                                                    <li>{e.age_rating.label}</li>
                                                </ul>
                                            </div>
                                            <p className={styles.description}>{e.description}</p>
                                        </div>
                                    </div>
                                    { !isLoading &&
                                        (
                                            dataFavorites?.filter(v => v.id === e.id).length === 1 ? (
                                                <button onClick={() => onClickDeleteFavorite(e.id, e)}>
                                                    <img src={favoriteIcon} alt="" />
                                                </button>
                                            ) : (
                                                <button onClick={() => onClickAddFavorite(e.id, e)}>
                                                    <img src={favoriteOffIcon} alt="" />
                                                </button>
                                            )
                                        )
                                    }
                                </div>        
     );
}

export default CatalogCard;