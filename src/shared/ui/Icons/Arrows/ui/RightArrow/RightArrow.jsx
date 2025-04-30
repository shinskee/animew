import styles from './../../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import Right from './../../../../../images/right-arrow.svg?react'

const RightArrow = memo( ({cls}) => {
  return (
    <Right className={classNames(styles.icon, {}, [cls])} />
  )
})

export default RightArrow