import styles from './Button.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'

const Button = memo( ({cls, children, ...props}) => {
  return (
    <button {...props} className={classNames(styles.button, {}, [cls])}>
      {children}
    </button>
  )
})

export default Button