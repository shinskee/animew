import styles from './EpisodeDescription.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import ReactPlayer from "react-player";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetTitle } from '../../../Title/TitleDescription/api/titleApi';
import Loader from '../../../../shared/ui/Loader/Loader';

const EpisodeDescription = memo( ({cls}) => {
  const params = useParams();
  const { isLoading } = useGetTitle(params.id);

  const data = useSelector(state => state.episodes?.episodesList)
  const host = useSelector(state => state.episodes?.host)
  const episode = data?.find(
    (item) => item.episode === +params.number
  );

  if (isLoading) return <Loader />

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
        url={`https://${host}${episode.hls.hd}`}
      />
    </div>
  )
})

export default EpisodeDescription