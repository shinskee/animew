import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import ReduceOneIcon from '@shared/images/icons/ReduceOne.svg?react'

const ReduceIcon = memo( ({cls}) => {
  return <ReduceOneIcon className={classNames(styles.icon, {}, [cls, styles.reduce])} />
})

export default ReduceIcon