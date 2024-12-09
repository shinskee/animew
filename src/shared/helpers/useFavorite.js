import { useDispatch } from "react-redux";
import { setAddFavorite, setDeleteFavorite } from "../../features/favorites/favoriteSlice";
import { useLazyAddFavoriteQuery, useLazyDeleteFavoriteQuery } from "../../sevices/animeApi";
import { useCallback, useState } from "react";

function useFavorite() {
    const [ addFavorite ] = useLazyAddFavoriteQuery() 
    const [ deleteFavorite ] = useLazyDeleteFavoriteQuery()
    // const [ isFavoriteSuccess, setIsFavoriteSuccess ] = useState(false)
    const dispatch = useDispatch()


    const onClickAddFavorite = useCallback(async (id, item) => {
        const response = await addFavorite(id)
        if (response.isSuccess) {
            // setIsFavoriteSuccess(true)
            // setTimeout(() => {
            //         setIsFavoriteSuccess(false)
            // }, 2000);
            if (item.poster) {
                dispatch(setAddFavorite(item))
            } else {
                dispatch(setAddFavorite({id: item.id, poster: {src: item.posters.small.url} }))
            }
        }
    }, [])

    const onClickDeleteFavorite = useCallback(async (id) => {
        const response = await deleteFavorite(id)
        if (response.isSuccess) {
            // setIsFavoriteSuccess(false)
            dispatch(setDeleteFavorite(id))
        }
    }, [])
    
    return {
        onClickAddFavorite,
        onClickDeleteFavorite,
        // isFavoriteSuccess
    }
}

export default useFavorite;