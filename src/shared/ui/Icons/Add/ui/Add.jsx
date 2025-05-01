import styles from './../../Icons.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import AddOneIcon from '@shared/images/icons/AddOne.svg?react'

const AddIcon = memo( ({cls}) => {
  return <AddOneIcon className={classNames(styles.icon, {}, [cls])} />
})

export default AddIcon