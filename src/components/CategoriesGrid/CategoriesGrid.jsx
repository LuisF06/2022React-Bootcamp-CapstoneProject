import { useProductCategories } from "../../utils/hooks/useProductCategories";
import CategoryCard from "../CategoryCard/CategoryCard";
import { GridArea, GridTitleDiv, GridTitle } from "./style";

const CategoriesGrid = () => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <section>
      <GridTitleDiv>
        <GridTitle>Categories</GridTitle>
      </GridTitleDiv>
      <GridArea>
        {data.results.map(({ id, data, slugs }) => (
          <CategoryCard
            key={id}
            id={id}
            name={data.name}
            image={data.main_image.url}
            link={`/products?category=${slugs[0]}`}
          />
        ))}
      </GridArea>
    </section>
  );
};

export default CategoriesGrid;
