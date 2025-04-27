import { useNavigate } from "react-router-dom";
import useFavorite from "../../helpers/useFavorite";
import favoriteIcon from "./../../../shared/images/favorite.svg";
import favoriteOffIcon from "./../../../shared/images/favorite-off.svg";
import styles from "./CardWithFavorite.module.scss";
import { memo } from "react";

const CardWithFavorite = memo(({ card, dataFavorites }) => {
  const navigate = useNavigate();
  const { onClickAddFavorite, onClickDeleteFavorite } = useFavorite();

  console.log(card);

  return (
    <li className={styles.card}>
      <img
        src={
          card.poster?.src
            ? `https://anilibria.tv${card.poster?.src}`
            : `https://anilibria.wtf${card.posters?.small.url}`
        }
        alt=""
        onClick={() => navigate(`/title/${card.id}`)}
      />
      {dataFavorites?.filter((item) => item.id === card.id).length === 1 ? (
        <button onClick={() => onClickDeleteFavorite(card.id, card)}>
          <img src={favoriteIcon} alt="" />
        </button>
      ) : (
        <button onClick={() => onClickAddFavorite(card.id, card)}>
          <img src={favoriteOffIcon} alt="" />
        </button>
      )}
    </li>
  );
});

export default CardWithFavorite;
