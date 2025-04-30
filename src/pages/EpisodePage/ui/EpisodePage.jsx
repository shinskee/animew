import styles from "./EpisodePage.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo, useEffect } from "react";
import EpisodeDescription from "../../../entities/Episodes/EpisodeDescription/ui/EpisodeDescription";
import { useNavigate, useParams } from "react-router-dom";
import Episodes from "../../../widgets/Episodes/ui/Episodes";
import Loader from "../../../shared/ui/Loader/Loader";
import NextEpisode from "../../../features/episodes/NextEpisode/ui/NextEpisode";
import PrevEpisode from "../../../features/episodes/PrevEpisode/ui/PrevEpisode";
import { useDispatch, useSelector } from "react-redux";
import { useGetTitle } from "../../../entities/Title/TitleDescription/api/titleApi";
import DynamicModuleLoader from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { titleDescriptionReducer } from "../../../entities/Title/TitleDescription";
import { episodesListActions, episodesListReducer } from "../../../entities/Episodes/EpisodesList/model/episodesListSlice";
import Breadcrumbs from "../../../shared/ui/Breadcrumbs/ui/Breadcrumbs";

const initialReducers = {
  title: titleDescriptionReducer,
  episodes: episodesListReducer,
};

const EpisodePage = memo(({ cls }) => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.episodes?.episodesList);

  const episode = data?.find((item) => item.episode === +params.number);

  useEffect(() => {
    dispatch(episodesListActions.setCurrentEpisode(episode))
  }, [dispatch, episode])

  return (
    <div className={classNames(styles.episodePage, {}, [styles[cls]])}>
      <DynamicModuleLoader reducers={initialReducers}>
        <Breadcrumbs />
        <button onClick={() => navigate(`/title/${params.id}`)}>Назад</button>
        <PrevEpisode totalEpisodes={data?.length} />
        <NextEpisode totalEpisodes={data?.length} />
        <EpisodeDescription />
        <Episodes currentEpisode={episode} />
      </DynamicModuleLoader>
    </div>
  );
});

export default EpisodePage;
