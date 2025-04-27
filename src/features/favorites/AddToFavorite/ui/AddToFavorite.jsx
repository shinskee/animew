import styles from './AddToFavorite.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesListActions } from '../../../../entities/FavoritesList/model/favoritesListSlice'
import { getFavoritesListData } from '../../../../entities/FavoritesList/model/selectors'

const AddToFavorite = memo( ({cls, item}) => {
  const dispacth = useDispatch()
  const favorites = useSelector(getFavoritesListData)
  const [ isFavorite, setIsFavorite ] = useState(false)

  useEffect(() => {
    if (favorites.find((title) => title.id === item.id)) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }
  }, [favorites, item.id])

  const onClickAdd = useCallback(() => {
    dispacth(favoritesListActions.addToFavorite(item))
  }, [dispacth, item])

  const onClickDelete = useCallback(() => {
    dispacth(favoritesListActions.deleteFromFavorite(item))
  }, [dispacth, item])

  return (
      isFavorite ? (
        <button onClick={onClickDelete} className={classNames(styles.addToFavorite, {}, [styles[cls]])}>
          Удалить с избранного
        </button>
      ) : (
        <button onClick={onClickAdd} className={classNames(styles.addToFavorite, {}, [styles[cls]])}>
          Добавить в избранное
        </button>
      )
  )
})

export default AddToFavorite