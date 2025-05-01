import styles from './AddToFavorite.module.scss'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesListActions } from '../../../../entities/FavoritesList/model/favoritesListSlice'
import { getFavoritesListData } from '../../../../entities/FavoritesList/model/selectors'
import Button from '../../../../shared/ui/Button/ui/Button'
import ReduceIcon from '../../../../shared/ui/Icons/Reduce'
import AddIcon from '../../../../shared/ui/Icons/Add'

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
        <Button tooltip={'Удалить из избранного'} type={'icon'} onClick={onClickDelete} >
          <ReduceIcon />
        </Button>
      ) : (
        <Button tooltip={'Добавить в избранное'} type={'icon'} onClick={onClickAdd} >
          <AddIcon />
        </Button>
      )
  )
})

export default AddToFavorite