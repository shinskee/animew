import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFavorites, getTitle } from "../../../shared/api/api";
import ReactPlayer from "react-player";
import { AuthContext } from "../../../shared/auth/AuthContext";

import styles from './TitlePage.module.scss'
import { useGetTitleQuery } from "../../../sevices/animeApi";
import { useSelector } from "react-redux";
import useFavorite from "../../../shared/helpers/useFavorite";

function TitlePage() {
    const {id} = useParams()
    const { favorites, isChanging } = useSelector(state => state.favorites)
    const {data, isLoading, isFetching, isSuccess } = useGetTitleQuery(id)
    const [video, setVideo] = useState('')
    const [isFavorite, setIsFavorite] = useState(false)
    const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite()
    
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

    if (isFetching) return <div>...Загрузка</div>
    
    return ( 
        <main className={`${styles.titlePage} container`}>
            {data ? (
                <div className={styles.titleBlock}>
                    <img src={`https://anilibria.top${data.posters.small.url}`} alt="" />
                    <div>
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
            <button 
                className={isFavorite ? styles.buttonFavorite : styles.buttonUnFavorite }
                onClick={isFavorite ? () => onClickDeleteFavorite(data.id) : () => onClickAddFavorite(data.id, data)}>
                    {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>
            <div>
                <select name="" id="" onChange={(e) => {setVideo(e.target.value)}}>
                    {Object.entries(data?.player.list).map(e => (
                            <option key={e[0]} value={e[1].hls.hd}>{e[0]}. {e[1].name}</option>
                        ))}
                </select>
            </div>
            <ReactPlayer width={'100%'} controls url={`https://cache.libria.fun${video ? video : data.player.list[1].hls.hd}`} />
        </main>
     );
}

export default TitlePage;