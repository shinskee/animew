import { memo } from "react";
import styles from "./TitlePage.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import Loader from "../../../shared/ui/Loader/Loader";
import { useLocation, useMatches, useParams } from "react-router-dom";
import { useGetTitle } from "../../../entities/Title/TitleDescription/api/titleApi";
import TitleDescription, {
  titleDescriptionReducer,
} from "../../../entities/Title/TitleDescription";
import EpisodesList from "../../../entities/Episodes/EpisodesList/ui/EpisodesList";
import Episodes from "../../../widgets/Episodes/ui/Episodes";
import { useGetEpisode } from "../../../entities/Episodes/EpisodeDescription/api/episodeApi";
import Breadcrumbs from "../../../shared/ui/Breadcrumbs/ui/Breadcrumbs";
import DynamicModuleLoader from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { episodesListReducer } from "../../../entities/Episodes/EpisodesList/model/episodesListSlice";

const initialReducers = {
  title: titleDescriptionReducer,
  episodes: episodesListReducer,
};

const TitlePage = memo(() => {
  const params = useParams();
  const { isLoading } = useGetTitle(params.id);

  if (isLoading) return <Loader />;

  return (
    <main>
      <DynamicModuleLoader reducers={initialReducers} >
        <Breadcrumbs />
        <TitleDescription />
        <Episodes />
      </DynamicModuleLoader>
    </main>
  );
});

export default TitlePage;
