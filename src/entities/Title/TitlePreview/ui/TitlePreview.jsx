import styles from "./TitlePreview.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import AddToFavorite from "../../../../features/favorites/addToFavorite";
import { API_IMAGES } from "../../../../shared/api/base";

const TitlePreview = memo(({ cls, item, ...props }) => {
  const navigate = useNavigate();

  return (
    <div {...props} className={classNames(styles.titlePreview, {}, [styles[cls]])}>
      <img
        src={
          `${API_IMAGES}${item?.posters.small.url}`
        }
        // style={{backgroundImage: `url(${API_IMAGES}${item?.posters.small.url})`}}
        alt=""
        onClick={() => navigate(`/title/${item.id}`)}
      />
      <div className={styles.favoriteButton}>
        <AddToFavorite item={item} />
      </div>
    </div>
  );
});

export default TitlePreview;
