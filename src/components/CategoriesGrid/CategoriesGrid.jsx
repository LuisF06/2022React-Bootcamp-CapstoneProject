import { useProductCategories } from "../../utils/hooks/useProductCategories";
import ProductCard from "../ProductCard/ProductCard";
import {GridArea, GridTitleDiv, GridTitle} from "./style"

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
        {data.results.map(({ id, data }) => (
          <ProductCard
            key={id}
            id={id}
            name={data.name}
            image={data.main_image.url}
          />
        ))}
      </GridArea>
    </section>
  );
};

export default CategoriesGrid;
