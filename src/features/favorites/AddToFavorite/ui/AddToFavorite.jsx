import styles from './AddToFavorite.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesListActions } from '../../../../entities/FavoritesList/model/favoritesListSlice'
import { getFavoritesListData } from '../../../../entities/FavoritesList/model/selectors'
import Button from '../../../../shared/ui/Button/ui/Button'

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
        <Button type={'text'} onClick={onClickDelete} cls={styles.button}>
          Удалить с избранного
        </Button>
      ) : (
        <Button type={'text'} onClick={onClickAdd} cls={styles.button}>
          Добавить в избранное
        </Button>
      )
  )
})

export default AddToFavorite