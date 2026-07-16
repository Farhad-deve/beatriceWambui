import TitlePage from "../components/TitlePage/TitlePage";
import FilteredCategories from "../components/filterCategories/FilteredCategories";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col gap-1-5r">
        <TitlePage>Portfolio</TitlePage>

        <FilteredCategories />
      </div>
    </>
  );
};

export default Portfolio;
