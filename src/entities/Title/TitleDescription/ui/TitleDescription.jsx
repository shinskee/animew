import styles from "./TitleDescription.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import AddToFavorite from "../../../../features/favorites/AddToFavorite/ui/AddToFavorite";
import { useSelector } from "react-redux";
import { getTitleData } from "../model/selectors";

const TitleDescription = memo(() => {
  const item = useSelector(getTitleData)

  return (
    <section className={classNames(styles.titleDescription, {}, ["container"])}>
      <div className={styles.poster}>
        <img src={`https://anilibria.wtf${item?.posters.small.url}`} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.names}>
          <h1 className={styles.nameRu}>{item.names.ru}</h1>
          <p className={styles.nameEng}>{item.names.en}</p>
        </div>
        <div className={styles.badges}>
          <div className={styles.age}></div>
          <div className={styles.day}></div>
        </div>
        <dl className={styles.infoList}>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Статус: </dt>
            <dd className={styles.value}>{item.status?.string}</dd>
          </div>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Тип: </dt>
            <dd className={styles.value}>{item.type?.string}</dd>
          </div>
          {item.type.length && (
            <div className={styles.infoItem}>
              <dt className={styles.key}>Длительность: </dt>
              <dd className={styles.value}>
                ~ {item.type?.length} мин.{" "}
                {item.type.string === "WEB" && "серия"}
              </dd>
            </div>
          )}
          <div className={styles.infoItem}>
            <dt className={styles.key}>Эпизоды: </dt>
            <dd className={styles.value}>
              {item.player?.episodes?.last} {item.type?.episodes && '/ ' + item.type?.episodes}
            </dd>
          </div>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Жанр: </dt>
            <div className={styles.infoItemList}>
              {item.genres?.map((genre, _, genres) => (
                <dd key={genre} className={styles.value}>
                  {genres[genres.length - 1] === genre ? genre : genre + ","}
                </dd>
              ))}
            </div>
          </div>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Сезон: </dt>
            <dd className={styles.value}>{item.season?.string}</dd>
          </div>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Год: </dt>
            <dd className={styles.value}>{item.season?.year}</dd>
          </div>
          <div className={styles.infoItem}>
            <dt className={styles.key}>Озвучка: </dt>
            <div className={styles.infoItemList}>
              {item.team?.voice?.map((voice, _, voices) => (
                <dd key={voice} className={styles.value}>
                  {voices[voices.length - 1] === voice ? voice : voice + ","}
                </dd>
              ))}
            </div>
          </div>
        </dl>
        <AddToFavorite item={item} />
      </div>
    </section>
  );
});

export default TitleDescription;
