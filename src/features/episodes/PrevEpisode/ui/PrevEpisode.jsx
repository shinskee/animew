import styles from './PrevEpisode.module.scss'
import { classNames } from '@shared/lib/classNames/classNames'
import { memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PrevEpisode = memo( ({cls}) => {
  const navigate = useNavigate()
    const params = useParams()
    const prev = +params.number - 1
  
    return (
      <button disabled={+params.number === 1} onClick={() => navigate(`/title/${params.id}/episode/${prev}`)} className={classNames(styles.prevEpisode, {}, [styles[cls]])}>
        Предыдущая серия
      </button>
    )
})

export default PrevEpisode