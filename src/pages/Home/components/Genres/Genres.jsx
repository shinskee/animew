import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setGenres } from '../../../../features/catalog/catalogSlice';
import Carousel from '../../../../shared/ui/Carousel/Carousel';
import GenreCard from './GenreCard';

function Genres({ data, isLoading, isError }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickGenre = (genre) => {
        dispatch(setGenres(genre))
        navigate('/catalog')
    }

    if (isLoading) return <div>...Loading</div>
    if (isError) return <div>Ошибка попробуйте позже</div>

    return ( 
        <section className={`container`}>
            <Carousel 
              title={'Жанры'}
              slides={7}
              slidesTablet={5}
              slidesMobile={2}
            >
              {data.map(genre => (
                <GenreCard genre={genre} key={genre.id} onClickGenre={onClickGenre} />
              ))}
            </Carousel>
        </section>
     );
}

export default Genres;