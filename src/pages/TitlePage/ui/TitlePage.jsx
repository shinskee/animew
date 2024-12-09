import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './TitlePage.module.scss'
import { useGetTitleQuery } from "../../../sevices/animeApi";
import { useDispatch, useSelector } from "react-redux";
import useFavorite from "../../../shared/helpers/useFavorite";
import EpisodesList from "./component/Episodes/EpisodesList";
import Loader from "../../../shared/ui/Loader/Loader";
import transition from "../../../app/transition";
import TostFavorite from "../../../shared/ui/TostFavorite/TostFavorite";

function TitlePage() {
    const {id} = useParams()
    const { favorites, isChanging } = useSelector(state => state.favorites)
    const {data, isLoading, isError, isSuccess } = useGetTitleQuery(id)
    const [isFavorite, setIsFavorite] = useState(false)
    const { onClickAddFavorite, onClickDeleteFavorite, isFavoriteSuccess } = useFavorite()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    useEffect(() => {
        if (isSuccess) {
            document.title = data?.name?.main
        }
    }, [isSuccess])
    
    useEffect(() => {        
        favorites.map(e => {
            if (e.id === Number(id)) {
                setIsFavorite(true)
            }
        })

        return () => {
            setIsFavorite(false)
        }
    }, [isChanging])

    if (isLoading) return <Loader />
    if (isError) return <div>Ошибка, попробуйте позже</div>
    
    return ( 
        <main className={`${styles.titlePage} container`}>
            {data ? (
                <div className={styles.main}>
                    {/* {isFavoriteSuccess && <TostFavorite>Добавлено в избранное</TostFavorite>} */}
                    <div className={styles.topBlock}>
                        <div className={styles.poster}>
                            <img src={`https://anilibria.top${data.poster.src}`} alt="" />
                        </div>
                        <div className={styles.info}>
                            <p className={styles.titleEn}>{data.name.english}</p>
                            <h2 className={styles.title}>{data.name.main}</h2>
                            <div className={styles.infoBlock}>
                                <p>Жанры : <span>{data.genres.map(genre => (
                                    <span key={genre.id}> {genre.name}</span>
                                ))}</span></p>
                            </div>
                            <div className={styles.infoBlock}>
                                <p>Год : <span>{data.year}</span></p>
                            </div>
                            <div className={styles.infoBlock}>
                                <p>Сезон : <span>{data.season.description}</span></p>
                            </div>
                            <div className={styles.infoBlock}>
                                <p>Статус : <span>{!data.is_in_production ? "Завершен" : "Выходит"}</span></p>
                            </div>
                            <div className={styles.infoBlock}>
                                <p>Тип : <span>{data.type.description}</span></p>
                            </div>
                            <button 
                                className={isFavorite ? styles.buttonFavorite : styles.buttonUnFavorite }
                                onClick={isFavorite ? () => onClickDeleteFavorite(data.id) : () => onClickAddFavorite(data.id, data)}>
                                    {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                            </button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>{data.description}</p>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
            <section className={`${styles.playerWrapper}`}>
                <EpisodesList />
                {/* <div className={styles.selectWrapper}>
                    <select className={styles.select} name="series" id="series" onChange={(e) => {setVideo(e.target.value)}}>
                        {Object.entries(data?.player.list).map(e => (
                                <option key={e[0]} value={e[0]}>{e[0]}. {e[1].name}</option>
                            ))}
                    </select>
                    <select className={styles.select} name="quality" id="quality" onChange={(e) => {setQuality(e.target.value)}}>
                        {qualityArr.map(e => (
                            <option key={e} value={e}>{e}</option>
                        ))}
                    </select>
                </div> */}
                {/* <ReactPlayer className={styles.player} style={{marginInline: 'auto'}} width={'97%'} height={'100%'} controls url={`https://cache.libria.fun${data.player.list[video].hls[quality]}`} /> */}
            </section>
        </main>
     );
}

export default transition(TitlePage);