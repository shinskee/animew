import styles from './[FTName].module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const [FTName] = memo( ({cls}) => {
  return (
    <div className={classNames(styles.<FTName | lowercasefirstchar>, {}, [styles[cls]])}>

    </div>
  )
})

export default [FTName]