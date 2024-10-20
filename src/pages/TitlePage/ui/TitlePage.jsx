import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, deleteFavorite, getFavorites, getTitle } from "../../../shared/api/api";
import ReactPlayer from "react-player";

function TitlePage() {
    const {id} = useParams()
    const [data, setData] = useState()
    const [video, setVideo] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        getData()
        getFavorite()
    }, [])

    const getData = async () => {
        setIsLoading(true)
        const response = await getTitle(id)
        setData(response.data)
        setVideo(response.data.player.list[1].hls.hd)
        setIsLoading(false)
    }
    
    const getFavorite = async () => {
        const response = await getFavorites()
        response.data.data.map(e => {
            if (e.id === Number(id)) {
                setIsFavorite(true)
            }
        })
    }
    const onClickAddFavorite = async (id) => {
        const response = await addFavorite(id)
        if (response.status === 200) {
            setIsFavorite(true)
        }
    }

    const onClickDeleteFavorite = async (id) => {
        const response = await deleteFavorite(id)
        if (response.status === 200) {
            setIsFavorite(false)
        }
    }

    if (isLoading) return <div>...Загрузка</div>
    return ( 
        <main className="container">
            {data ? (
                <div>
                    <img src={`https://anilibria.top${data.posters.small.url}`} alt="" />
                    {data.names.ru}
                </div>
            ) : (
                <div>...Загрузка</div>
            )}
            <button onClick={isFavorite ? () => onClickDeleteFavorite(id) : () => onClickAddFavorite(id)}>{isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}</button>
            <div>
                <select name="" id="" onChange={(e) => setVideo(e.target.value)}>
                    {Object.entries(data?.player.list).map(e => (
                            <option key={e[0]} value={e[1].hls.hd}>{e[0]}. {e[1].name}</option>
                        ))}
                </select>
            </div>
            <ReactPlayer controls url={`https://cache.libria.fun${video}`} />
        </main>
     );
}

export default TitlePage;