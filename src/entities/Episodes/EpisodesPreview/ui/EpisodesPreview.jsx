import styles from "./EpisodesPreview.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import { API_IMAGES } from "../../../../shared/api/base";
import { useNavigate, useParams } from "react-router-dom";

const EpisodesPreview = memo(({ cls, episode, currentEpisode }) => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div onClick={() => navigate(`/title/${params.id}/episode/${episode.episode}`)} className={classNames(styles.episodesPreview, {}, [currentEpisode.episode === episode.episode && styles.isActive])}>
      <div className={styles.preview}>
        <img src={`${API_IMAGES}${episode.preview}`} alt={episode.episode} />
        <div className={styles.info}>
          <h2>{episode.episode} эпизод</h2>
        </div>
      </div>
    </div>
  );
});

export default EpisodesPreview;
