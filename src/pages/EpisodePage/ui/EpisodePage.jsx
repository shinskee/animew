import styles from "./EpisodePage.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import EpisodeDescription from "../../../entities/Episodes/EpisodeDescription/ui/EpisodeDescription";
import { useGetEpisode } from "../../../entities/Episodes/EpisodeDescription/api/episodeApi";
import { useNavigate, useParams } from "react-router-dom";
import Episodes from "../../../widgets/Episodes/ui/Episodes";
import Loader from "../../../shared/ui/Loader/Loader";
import NextEpisode from "../../../features/episodes/NextEpisode/ui/NextEpisode";
import PrevEpisode from "../../../features/episodes/PrevEpisode/ui/PrevEpisode";

const EpisodePage = memo(({ cls }) => {
  const params = useParams();
  const navigate = useNavigate()
  const { data: episodes, isLoading } = useGetEpisode(params.id);

  const episode = episodes?.player?.list?.find(
    (item) => item.episode === +params.number
  );

  if (isLoading) return <Loader />

  return (
    <div className={classNames(styles.episodePage, {}, [styles[cls]])}>
      <button onClick={() => navigate(`/title/${params.id}`)}>
        Назад
      </button>
      <PrevEpisode totalEpisodes={episodes.player.list.length} />
      <NextEpisode totalEpisodes={episodes.player.list.length} />
      <EpisodeDescription episode={episode} episodes={episodes} />
      <Episodes data={episodes.player.list} currentEpisode={episode} />
    </div>
  );
});

export default EpisodePage;
