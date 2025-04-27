import styles from './Sort.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const Sort = memo( ({cls, onClick}) => {
  return (
    <button onClick={onClick} className={classNames(styles.sort, {}, [styles[cls]])}>
      Сначала новые
    </button>
  )
})

export default Sort