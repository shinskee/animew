import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import styles from './TitlePage.module.scss'
import { useGetTitleQuery } from "../../../sevices/animeApi";
import { useSelector } from "react-redux";
import useFavorite from "../../../shared/helpers/useFavorite";

function TitlePage() {
    const {id} = useParams()
    const { favorites, isChanging } = useSelector(state => state.favorites)
    const {data, isLoading, isError } = useGetTitleQuery(id)
    const [video, setVideo] = useState(1)
    const [quality, setQuality] = useState('hd')
    const [isFavorite, setIsFavorite] = useState(false)
    const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite()
    const qualityArr = ['hd', 'fhd', 'sd']
    
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

    if (isLoading) return <div>...Загрузка</div>
    if (isError) return <div>Ошибка, попробуйте позже</div>
    
    return ( 
        <main className={`${styles.titlePage} container`}>
            {data ? (
                <div className={styles.titleBlock}>
                    <div className={styles.leftBlock}>
                        <img src={`https://anilibria.top${data.posters.small.url}`} alt="" />
                        <button 
                            className={isFavorite ? styles.buttonFavorite : styles.buttonUnFavorite }
                            onClick={isFavorite ? () => onClickDeleteFavorite(data.id) : () => onClickAddFavorite(data.id, data)}>
                                {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
                        </button>
                    </div>
                    <div className={styles.rightBlock}>
                        <p className={styles.titleEn}>{data.names.en}</p>
                        <h2 className={styles.title}>{data.names.ru}</h2>
                        <div className={styles.descrBlock}>
                            <h5>Описание : <span>{data.description}</span></h5>
                        </div>
                        <div className={styles.descrBlock}>
                            <h5>Жанры : <span>{data.genres.join(', ')}</span></h5>
                        </div>
                        <div className={styles.descrBlock}>
                            <h5>Год : <span>{data.season.year}</span></h5>
                        </div>
                        <div className={styles.descrBlock}>
                            <h5>Сезон : <span>{data.season.string}</span></h5>
                        </div>
                        <div className={styles.descrBlock}>
                            <h5>Статус : <span>{data.status.string}</span></h5>
                        </div>
                        <div className={styles.descrBlock}>
                            <h5>Тип : <span>{data.type.full_string}</span></h5>
                        </div>
                    </div>
                </div>
            ) : (
                <div>...Загрузка</div>
            )}
            <section className={`${styles.playerWrapper}`}>
                <div className={styles.selectWrapper}>
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
                </div>
                <ReactPlayer className={styles.player} style={{marginInline: 'auto'}} width={'97%'} height={'100%'} controls url={`https://cache.libria.fun${data.player.list[video].hls[quality]}`} />
            </section>
        </main>
     );
}

export default TitlePage;