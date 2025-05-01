import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import CheckOneIcon from '@shared/images/icons/CheckOne.svg?react'

const CheckIcon = memo( ({cls}) => {
  return <CheckOneIcon className={classNames(styles.icon, {}, [cls])} />
})

export default CheckIcon