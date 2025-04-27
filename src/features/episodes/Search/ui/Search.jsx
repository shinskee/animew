import styles from './Search.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'

const Search = memo( ({cls, setSearchValue, searchValue}) => {
  const onChangeSearchValue = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [setSearchValue])

  return (
    <div onChange={(e) => onChangeSearchValue(e)} className={classNames(styles.search, {}, [styles[cls]])}>
      <input onChange={(e) => onChangeSearchValue(e)} type="number" name="search" id="search" value={searchValue} />
    </div>
  )
})

export default Search