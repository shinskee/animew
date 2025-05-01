import { memo } from "react";
import styles from "./TitlePage.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import Loader from "../../../shared/ui/Loader/Loader";
import { useParams } from "react-router-dom";
import { useGetTitle } from "../../../entities/Title/TitleDescription/api/titleApi";
import TitleDescription, {
  titleDescriptionReducer,
} from "../../../entities/Title/TitleDescription";
import Episodes from "../../../widgets/Episodes/ui/Episodes";
import Breadcrumbs from "../../../shared/ui/Breadcrumbs/ui/Breadcrumbs";
import { episodesListReducer } from "../../../entities/Episodes/EpisodesList/model/episodesListSlice";
import { useDynamicReducers } from "../../../shared/helpers/useDynamicReducers/useDynamicReducers";

const initialReducers = {
  title: titleDescriptionReducer,
  episodes: episodesListReducer,
};

const TitlePage = memo(() => {
  const params = useParams();
  const { isLoading } = useGetTitle(params.id);
  useDynamicReducers(initialReducers)

  if (isLoading) return <Loader />;

  return (
    <main>
        <Breadcrumbs />
        <TitleDescription />
        <Episodes />
    </main>
  );
});

export default TitlePage;
