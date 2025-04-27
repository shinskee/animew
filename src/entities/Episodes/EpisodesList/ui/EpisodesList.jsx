import styles from './EpisodesList.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import GridList from '../../../../widgets/GridList/ui/GridList'
import EpisodesPreview from '../../EpisodesPreview/ui/EpisodesPreview'

const EpisodesList = memo( ({cls, sort, episodes, type, currentEpisode}) => {
  useEffect(() => {
  }, [sort])
  
  return (
    <section className={classNames(styles.episodesList, {}, [styles[cls], 'container'])}>
      <GridList cls={styles.grid} columns={'five'} type={type} >
        {episodes?.map((episode) => (
          <EpisodesPreview currentEpisode={currentEpisode} key={episode.episode} episode={episode} type={type} />
        ))}
      </GridList>
    </section>
  )
})

export default EpisodesList