import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import ListIconReact from '@shared/images/icons/ListCheckbox.svg?react'

const ListIcon = memo( ({cls}) => {
  return (
    <ListIconReact className={classNames(styles.icon, {}, [cls])} />
  )
})

export default ListIcon