import styles from './EpisodeDescription.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import ReactPlayer from "react-player";

const EpisodeDescription = memo( ({cls, episode, episodes}) => {
  return (
    <div className={classNames(styles.episodeDescription, {}, [styles[cls]])}>
      <div className={styles.episode}>
        {episode.episode}
      </div>
      <div className={styles.name}>
        {episode.name}
      </div>
      <ReactPlayer
        controls
        url={`https://${episodes.player.host}${episode.hls.hd}`}
      />
    </div>
  )
})

export default EpisodeDescription