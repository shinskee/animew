import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import SortNewIcon from '@shared/images/icons/SortAmountDown.svg?react'

const SortIcon = memo( ({cls}) => {
  return (
    <SortNewIcon className={classNames(styles.icon, {}, [cls])} />
  )
})

export default SortIcon