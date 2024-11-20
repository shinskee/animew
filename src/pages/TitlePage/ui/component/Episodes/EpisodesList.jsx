import { useInView } from 'react-intersection-observer';
import styles from './Episodes.module.scss'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisodeUrl, setSortDownEpisodes } from '../../../../../features/title/titleSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './../../../../../shared/images/loader.svg?react'
import SortUp from './../../../../../shared/images/sort-up.svg?react'
import SortDown from './../../../../../shared/images/sort-down.svg?react'

function EpisodesList({ currentEpisode, isShowEpisodes }) {
    const { episodes, isSort } = useSelector(state => state.title)
    const [ episodesFiltered, setEpisodesFiltered ] = useState(episodes)
    const params = useParams()
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
    let refEpisodes = useRef()
    const refTopList = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const a = Math.ceil(episodes?.length - currentEpisode?.ordinal)
    const [ chunk, setChunk ] = useState(isShowEpisodes ? [0, a + 5] : [0, 10])
    const [ currentEp, setCurrentEp ] = useState(currentEpisode?.ordinal)
    const [ inputValue, setInputValue ] = useState('')

    useEffect(() => {
        if (inView && chunk[1] <= episodes?.length) {
            setChunk([chunk[0], chunk[1] + 10])
        }
    }, [inView])

    useEffect(() => {
        refEpisodes.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        })
    }, [currentEp])

    useEffect(() => {
        const Debounce = setTimeout(() => {
            setEpisodesFiltered(filterData(inputValue, episodes))
        }, 300);

        return () => clearTimeout(Debounce)
    }, [inputValue])

    function filterData(searchText, data) {
        if (!searchText) {
            return data
        }
    
        return data.filter(v => v.ordinal.toString().includes(searchText))
    }

    const onClickTitle = (episode) => {
        dispatch(setEpisodeUrl(episode.hls_720))
        navigate(`/player/${params.id}/${episode.id}`)
        setCurrentEp(episode.ordinal)
    }

    const onClickSortDown = () => {
        dispatch(setSortDownEpisodes())
    }

    const onChangeInput = (e) => {
        if (e.target.value < episodes.length && e.target.value >= 0) {
            setInputValue(e.target.value)
        }
    }

    const onClickUp = () => {
        refTopList.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return ( 
        <div ref={refTopList} className={styles.episodesList} >
            <div className={styles.header} >
                {isSort ? <SortUp className={styles.sortButton} onClick={onClickSortDown} /> : <SortDown onClick={onClickSortDown} className={styles.sortButton}/>}
                <div className={styles.search}>
                    <input type="number" onChange={(e) => onChangeInput(e)} value={inputValue} />
                </div>
                <button onClick={onClickUp}>В начало</button>
            </div>
            {episodesFiltered?.slice(chunk[0], chunk[1]).map((e, i) =>
            (
                <div ref={currentEp === e.ordinal ? refEpisodes : null } className={currentEpisode?.ordinal === e.ordinal ? styles.episodeActive : styles.episode} key={e.id} onClick={() => onClickTitle(e)} >
                            <div className={styles.previewWrapper}>
                                <span>{new Date(e.duration * 1000).toISOString().substr(14, 5)}</span>
                            </div>
                            <div className={styles.title}>
                                <p className={styles.number}>{e.ordinal}. Эпизод</p>
                                <p className={styles.name}>{e.name}</p>
                            </div>  
                </div>
            ))}
            <div className={styles.loader}>{!inView && <Loader />}</div>
            <div ref={ref}></div>
        </div>
     );
}

export default EpisodesList;