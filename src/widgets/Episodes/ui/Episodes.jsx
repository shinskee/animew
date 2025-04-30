import styles from './Episodes.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo, useCallback, useEffect, useState } from 'react'
import EpisodesList from '../../../entities/Episodes/EpisodesList/ui/EpisodesList'
import GridTypeChange from '../../../features/episodes/GridTypeChange/ui/GridTypeChange'
import ListTypeChange from '../../../features/episodes/ListTypeChange/ui/ListTypeChange'
import Sort from '../../../features/episodes/Sort/ui/Sort'
import Search from '../../../features/episodes/Search/ui/Search'
import Button from '../../../shared/ui/Button/ui/Button'
import { useSelector } from 'react-redux'

const Episodes = memo( ({cls, currentEpisode = ''}) => { 
  const data = useSelector(state => state?.episodes?.episodesList)
  
  const [ episodes, setEpisodes ] = useState(data)
  
  const [ chunk, setChunk ] = useState(10)
  const [ filterEpisodes, setFilterEpisodes ] = useState(episodes)

  const [typeList, setTypeList] = useState('grid')
  const [sort, setSort] = useState('old')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setFilterEpisodes(episodes?.filter((episode) => episode.episode.toString().includes(searchValue)))
  }, [episodes, searchValue])

  const onClickMore = useCallback(() => {
    setChunk(prev => prev + 5)
  }, [])

  return (
    <section className={classNames(styles.episodes, {}, [styles[cls], 'container'])}>
      <div className={styles.filter}  >
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
        <Sort typeList={typeList} chunk={chunk} data={data} setEpisodes={setEpisodes} sort={sort} setSort={setSort} />
        <GridTypeChange setTypeList={setTypeList} typeList={typeList} />
        <ListTypeChange setTypeList={setTypeList} typeList={typeList} />
      </div>
      <EpisodesList currentEpisode={currentEpisode} searchValue={searchValue} sort={sort} episodes={filterEpisodes} type={typeList} />
      {(typeList === 'list' && chunk < data.length) && (
        <Button type={'text'} align={'center'} onClick={onClickMore}>Показать еще</Button>
      )}
    </section>
  )
})

export default Episodes