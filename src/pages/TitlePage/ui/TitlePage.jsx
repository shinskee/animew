import { memo } from "react";
import styles from "./TitlePage.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import Loader from "../../../shared/ui/Loader/Loader";
import { useParams } from "react-router-dom";
import { useGetTitle } from "../../../entities/Title/TitleDescription/api/titleApi";
import TitleDescription from "../../../entities/Title/TitleDescription";
import EpisodesList from "../../../entities/Episodes/EpisodesList/ui/EpisodesList";
import Episodes from "../../../widgets/Episodes/ui/Episodes";

const TitlePage = memo(() => {  
  const params = useParams();
  const {data, isLoading, isError} = useGetTitle(params.id)

  if (isLoading) return <Loader />;
  if (isError) return <div>Ошибка, попробуйте позже</div>

  return (
      <main>
        <TitleDescription item={data} />
        <Episodes data={data.player.list} />
      </main>
  );
});

export default TitlePage;
