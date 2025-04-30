import styles from './../../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import Left from './../../../../../images/left-arrow.svg?react'

const LeftArrow = memo( ({cls}) => {
  return (
    <Left className={classNames(styles.icon, {}, [cls])} />
  )
})

export default LeftArrow