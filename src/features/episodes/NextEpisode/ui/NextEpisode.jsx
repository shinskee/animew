import styles from './NextEpisode.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NextEpisode = memo( ({cls, totalEpisodes}) => {
  const navigate = useNavigate()
  const params = useParams()
  const next = +params.number + 1

  return (
    <button disabled={totalEpisodes === +params.number} onClick={() => navigate(`/title/${params.id}/episode/${next}`)} className={classNames(styles.nextEpisode, {}, [styles[cls]])}>
      Следущая серия
    </button>
  )
})

export default NextEpisode