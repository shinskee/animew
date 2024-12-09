import Carousel from "../../../../shared/ui/Carousel/Carousel";
import CardWithFavorite from "../../../../shared/ui/CardWithFavorite/CardWithFavorite";

function Updates({ data, dataFavorites }) {
    
    return (
        <section className={`container`}>
            <Carousel 
                title={'Последние обновления'}
                slides={8}
                slidesTablet={5}
                slidesMobile={2}
            >
                {data.map(e => (
                    <CardWithFavorite key={e.id} card={e} dataFavorites={dataFavorites} />
                ))}
            </Carousel>
        </section>
     );
}

export default Updates;