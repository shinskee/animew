import styles from './Slider.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const Slider = memo( ({cls}) => {
  return (
    <div className={classNames(styles.slider, {}, [styles[cls]])}>
      
    </div>
  )
})

export default Slider