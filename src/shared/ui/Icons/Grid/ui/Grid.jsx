import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import GridIconReact from '@shared/images/icons/ViewGridCard.svg?react'

const GridIcon = memo( ({cls}) => {
  return (
    <GridIconReact className={classNames(styles.icon, {}, [cls])} />
  )
})

export default GridIcon