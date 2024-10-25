import { useDispatch } from "react-redux";
import { setAddFavorite, setDeleteFavorite } from "../../features/favorites/favoriteSlice";
import { useLazyAddFavoriteQuery, useLazyDeleteFavoriteQuery } from "../../sevices/animeApi";
import { useCallback } from "react";

function useFavorite() {
    const [ addFavorite ] = useLazyAddFavoriteQuery() 
    const [ deleteFavorite ] = useLazyDeleteFavoriteQuery()
    const dispatch = useDispatch()


    const onClickAddFavorite = useCallback(async (id, item) => {
        const response = await addFavorite(id)
        if (response.isSuccess) {
            if (item.poster) {
                dispatch(setAddFavorite(item))
            } else {
                dispatch(setAddFavorite({id: item.id, poster: {src: item.posters.small.url} }))
            }
        }
    })

    const onClickDeleteFavorite = useCallback(async (id) => {
        const response = await deleteFavorite(id)
        if (response.isSuccess) {
            dispatch(setDeleteFavorite(id))
        }
    })
    
    return {
        onClickAddFavorite,
        onClickDeleteFavorite
    }
}

export default useFavorite;