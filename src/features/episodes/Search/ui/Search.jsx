import styles from './Search.module.scss'
import { memo, useCallback } from 'react'
import Input from '../../../../shared/ui/Input/ui/Input'

const Search = memo( ({setSearchValue, searchValue}) => {
  const onChangeSearchValue = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [setSearchValue])

  return (
      <Input placeholder={'Введите номер эпизода...'} cls={styles.input} onChange={(e) => onChangeSearchValue(e)} type="number" name="search" value={searchValue} />
  )
})

export default Search