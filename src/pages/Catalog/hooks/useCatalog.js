import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { resetCatalog, setAges, setGenres, setPage, setSeasons, setSort, setSounds, setStatus, setType } from "../../../features/catalog/catalogSlice"
import { useGetAgesQuery, useGetCatalogSortQuery, useGetGenresQuery, useGetSeasonsQuery, useGetSoundsQuery, useGetStatusQuery, useGetTypesQuery } from "../../../sevices/animeApi"

export const useCatalog = () => {
    const dispatch = useDispatch()

    const sort = useGetCatalogSortQuery()
    const genres = useGetGenresQuery()
    const types = useGetTypesQuery()
    const statuses = useGetStatusQuery()
    const seasons = useGetSeasonsQuery()
    const ages = useGetAgesQuery()
    const soundes = useGetSoundsQuery()

    const onClickSort = (value, label) => {
        window.scrollTo(0, 0)
        dispatch(setSort({text: label, value: value}))
        dispatch(setPage(1))
    }

    const onClickGenre = (genre) => {
        window.scrollTo(0, 0)
        dispatch(setGenres(genre))
        dispatch(setPage(1))
    }
    const onClickType = (type) => {
        window.scrollTo(0, 0)
        dispatch(setType(type))
        dispatch(setPage(1))
    }
    const onClickStatus = (status) => {
        window.scrollTo(0, 0)
        dispatch(setStatus(status))
        dispatch(setPage(1))
    }
    const onClickSeason = (season) => {
        window.scrollTo(0, 0)
        dispatch(setSeasons(season))
        dispatch(setPage(1))
    }
    const onClickSound = (sound) => {
        window.scrollTo(0, 0)
        dispatch(setSounds(sound))
        dispatch(setPage(1))
    }
    const onClickAge = useCallback((age) => {
        window.scrollTo(0, 0)
        dispatch(setAges(age))
        dispatch(setPage(1))
    }, [])

    const onClickReset = useCallback(() => {
        window.scrollTo(0, 0)
        dispatch(resetCatalog())
        dispatch(setPage(1))
    }, [])
    

    return {
        onClickAge, onClickGenre, onClickReset,
        onClickSeason, onClickSort, onClickSound,
        onClickStatus, onClickType,
        sort, genres, types, statuses,
        seasons, ages, soundes
    }
}