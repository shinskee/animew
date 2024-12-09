import styles from './Genres.module.scss'

function GenreCard({ genre, onClickGenre }) {
    return ( 
        <li key={genre.id} className={styles.genre} onClick={() => onClickGenre(genre)} >
            <div className={styles.image}>
                <img src={`https://anilibria.top${genre.image.preview}`} alt="" loading='lazy' />
            </div>
            <div className={styles.name}>
                {genre.name}
                <p>{genre.total_releases} релизов</p>
            </div>
        </li>
     );
}

export default GenreCard;