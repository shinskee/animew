import styles from './TitleCard.module.scss'
import { classNames } from '@lib/classNames/classNames'
import { memo } from 'react'

const TitleCard = memo( ({cls}) => {
  return (
    <div className={classNames(styles.titleCard, {}, [styles[cls]])}>

    </div>
  )
})

export default TitleCard