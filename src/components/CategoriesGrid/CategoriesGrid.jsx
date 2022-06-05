import { useProductCategories } from "../../utils/hooks/useProductCategories";
import ProductCard from "../ProductCard/ProductCard";

const CategoriesGrid = () => {
  const { data, isLoading } = useProductCategories();
  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <section>
      <h4>Categories</h4>
      <div>
        {data.results.map(({id, data}) => (
          <ProductCard
            key={id}
            id={id}
            name={data.name}
            image={data.main_image.url}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesGrid;
