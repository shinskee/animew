import styles from './Episodes.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo, useCallback, useEffect, useState } from 'react'
import EpisodesList from '../../../entities/Episodes/EpisodesList/ui/EpisodesList'
import GridTypeChange from '../../../features/episodes/GridTypeChange/ui/GridTypeChange'
import ListTypeChange from '../../../features/episodes/ListTypeChange/ui/ListTypeChange'
import Sort from '../../../features/episodes/Sort/ui/Sort'
import Search from '../../../features/episodes/Search/ui/Search'

const Episodes = memo( ({cls, data, currentEpisode = ''}) => {
  const [ episodes, setEpisodes ] = useState(data)
  
  const [ filterEpisodes, setFilterEpisodes ] = useState(episodes)

  const [typeList, setTypeList] = useState('grid')
  const [sort, setSort] = useState('old')
  const [searchValue, setSearchValue] = useState('')

  const onClickListChange = useCallback(() => {
    setTypeList('list')
  }, [])

  const onClickGridChange = useCallback(() => {
    setTypeList('grid')
  }, [])

  const sortChange = useCallback(() => {
    if (sort === 'old') {
      setFilterEpisodes(filterEpisodes.sort((a, b) => a.episode - b.episode))
      setSort('new')
    } else {
      setFilterEpisodes(filterEpisodes.sort((a, b) => b.episode - a.episode))
      setSort('old')
    }
  }, [filterEpisodes, sort])

  useEffect(() => {
    setFilterEpisodes(episodes?.filter((episode) => episode.episode.toString().includes(searchValue)))
  }, [episodes, searchValue])

  return (
    <div className={classNames(styles.episodes, {}, [styles[cls], 'container'])}>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      <Sort onClick={sortChange} />
      <GridTypeChange cls={typeList === 'grid' && styles.isActive} onClick={onClickGridChange} />
      <ListTypeChange cls={typeList === 'list' && styles.isActive} onClick={onClickListChange} />
      <EpisodesList currentEpisode={currentEpisode} searchValue={searchValue} sort={sort} episodes={filterEpisodes} type={typeList} />
    </div>
  )
})

export default Episodes