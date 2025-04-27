import styles from './Title.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const Title = memo( ({cls, children}) => {
  return (
    <h2 className={classNames(styles.title, {}, [styles[cls]])}>
      {children}
    </h2>
  )
})

export default Title