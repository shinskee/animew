import styles from './FavoritesPage.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import FavoritesList from '../../../entities/FavoritesList/ui/FavoritesList'

const FavoritesPage = memo( () => {
  return (
    <div className={classNames(styles.favoritesPage, {}, ['container'])}>
        <FavoritesList />
    </div>
  )
})

export default FavoritesPage