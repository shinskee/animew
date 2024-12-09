import Carousel from "../../../../shared/ui/Carousel/Carousel";
import CardWithFavorite from "../../../../shared/ui/CardWithFavorite/CardWithFavorite";

function Favorites({ data }) {
    return (
            <section className={`container`}>
                <Carousel 
                    title={'Избранное'}
                    slides={8}
                    slidesTablet={5}
                    slidesMobile={2}
                >
                    {data.map(e => (
                        <CardWithFavorite key={e.id} card={e} dataFavorites={data} />
                    ))}
                </Carousel>
            </section>
    )
}

export default Favorites;