import styles from './GridTypeChange.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const GridTypeChange = memo( ({cls, ...props}) => {
  return (
    <button {...props} className={classNames(styles.gridTypeChange, {}, [cls])}>
      Сеткой
    </button>
  )
})

export default GridTypeChange