import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styles from './Player.module.scss'
import { useNavigate, useParams } from "react-router-dom";
import EpisodesList from "../Episodes/EpisodesList";
import { useEffect, useRef, useState } from "react";
import useOutClick from "../../../../../widgets/Search/useOutClick";
import { useGetEpisodeQuery, useGetTitleQuery } from "../../../../../sevices/animeApi";
import LoaderSvg from './../../../../../shared/images/loader.svg?react'
import PrevButton from "../../../../../shared/ui/PrevButton/ui/PrevButton";
import NextButton from "../../../../../shared/ui/NextButton/ui/NextButton";
import Play from '../../../../../shared/images/play.svg?react'
import Pause from '../../../../../shared/images/pause.svg?react'
import { setPause, setPlay, setPlayed, setPlayPause } from "../../../../../features/player/playerSlice";
import Loader from "../../../../../shared/ui/Loader/Loader";

function Player() {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const episodes = useSelector(state => state.title.episodes)
    const [ isShowEpisodes, setIsShowEpisodes ] = useState(false)
    useGetTitleQuery(params.id)
    const episode = useGetEpisodeQuery(params.episode)
    const { playing, played, duration, url } = useSelector(state => state.player)
    const playerRef = useRef()
    
    const ref = useOutClick(() => setIsShowEpisodes(false))

    useEffect(() => {
        return () => {
            setIsShowEpisodes(false)
        }
    }, [])
    
    const nextEpisode = () => {
        const nextEpisode = episodes.find(e => e.ordinal === episode.data.ordinal + 1)
        navigate(`/player/${params.id}/${nextEpisode.id}`)
    }

    const prevEpisode = () => {
        const prevEpisode = episodes.find(e => e.ordinal === episode.data.ordinal - 1)
        navigate(`/player/${params.id}/${prevEpisode.id}`)
    }

    const showEpisodes = () => {
        setIsShowEpisodes(true)
    }

    const onSeek = () => {
        playerRef.current.seekTo(parseFloat(episode.data.opening.stop))
    }

    if (episode.isLoading) return <Loader />

    return ( 
        <div className={styles.player}>
            <div className={styles.controls}>
                <button onClick={() => navigate(`/title/${params.id}`)}>Назад</button>
                {episode.data?.ordinal}. {episode.data?.name ? episode.data?.name : 'Серия'}
                <PrevButton onClick={prevEpisode} disabled={episode.data?.ordinal === 1} /> 
                {!playing ? (
                    <Play className={styles.playPauseButton} onClick={() => dispatch(setPlayPause())} />
                ) : (
                    <Pause className={styles.playPauseButton} onClick={() => dispatch(setPlayPause())} />
                )}
                <NextButton onClick={nextEpisode} disabled={episodes.length === episode.data?.ordinal} />
                <button onClick={showEpisodes}>Эпизоды</button>
                {
                    duration * played >= parseFloat(episode.data?.opening.start) && 
                    duration * played < parseFloat(episode.data?.opening.stop) && 
                    <button onClick={onSeek}>Пропустить оппенинг</button>
                }
            </div>
            {isShowEpisodes && (
                <div ref={ref} className={styles.episodes}>
                    <EpisodesList currentEpisode={episode?.data} isShowEpisodes={isShowEpisodes} />
                </div>
            )}
            {!episode.isFetching ? (
                <ReactPlayer onPause={() => dispatch(setPause())} onProgress={(e) => dispatch(setPlayed(e.played))}
                    onPlay={() => dispatch(setPlay())}
                    ref={playerRef} playing={playing} width={'90%'} height={'90%'} controls url={url} />
            ) : (
                <div className={styles.loader}>
                    <LoaderSvg />
                </div>
            )}
        </div>
     );
}

export default Player;