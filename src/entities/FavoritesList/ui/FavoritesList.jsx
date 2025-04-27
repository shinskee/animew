import styles from "./FavoritesList.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import GridList from "../../../widgets/GridList/ui/GridList";
import { useSelector } from "react-redux";
import { getFavoritesListData } from "../model/selectors";
import TitlePreview from "../../Title/TitlePreview/ui/TitlePreview";

const FavoritesList = memo(({ cls }) => {
  const favorites = useSelector(getFavoritesListData);
  return (
    <section className={classNames(styles.favoritesList, {}, [styles[cls]])}>
      <GridList>
        {favorites.map((item) => (
          <TitlePreview item={item} key={item.id} />
        ))}
      </GridList>
    </section>
  );
});

export default FavoritesList;
