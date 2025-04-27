import styles from './../Arrows.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import Right from './../../../../../images/right-arrow.svg?react'

const RightArrow = memo( ({cls}) => {
  return (
    <Right className={classNames(styles.arrow, {}, [cls])} />
  )
})

export default RightArrow