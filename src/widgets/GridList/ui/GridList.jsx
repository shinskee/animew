import styles from './GridList.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const GridList = memo( ({children, cls, columns, type, ...props}) => {
  return (
    <div {...props} className={classNames(styles.gridList, {}, [cls, [styles[columns]], [styles[type]]])}>
        {children}
    </div>
  )
})

export default GridList