import { memo, useMemo } from "react";
import Loader from "../../../shared/ui/Loader/Loader";
import Carousel from "@/widgets/Carousel";
import TitlePreview from "@/entities/Title/TitlePreview";
import { useGetUpdateTitleList } from "../../../entities/Title/UpdateTitleList/api/updateTitleListApi";

const Home = memo(() => {
  const { data: updates, isLoading } = useGetUpdateTitleList()

  const renderUpdateTitles = useMemo(() => {
    return updates?.list.map((title) => (
            <TitlePreview key={title.id} item={title} />
        ))
  }, [updates])

  if (isLoading) return <Loader />;

  return (
      <Carousel
        title={"Последние обновления"}
        slides={8}
        slidesTablet={5}
        slidesMobile={2}
      >
        {renderUpdateTitles}
      </Carousel>
  );
});

export default Home;
