import ProductCard from "../ProductCard/ProductCard";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import { NavLink as Link } from "react-router-dom";
import { ContentDiv,ContentDivTitle, ContentTitle, ContentDivButton, ViewAllButton } from "./style";

const ProductGrid = () => {
  const { data, isLoading } = useFeaturedProducts();

  if (isLoading) {
    return <div>{"..."}</div>;
  }

  return (
    <>
      <div>
        <ContentDivTitle>
          <ContentTitle>Featured Products</ContentTitle>
        </ContentDivTitle>
        <ContentDiv>
          {data.results.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.data.name}
              image={product.data.mainimage.url}
              price={product.data.price}
              category={product.data.category.slug}
              isProduct={true}
            />
          ))}
        </ContentDiv>
        <ContentDivButton>
          <Link to="/2022React-Bootcamp-CapstoneProject/ProductList">
            <ViewAllButton>View All Products</ViewAllButton>
          </Link>
        </ContentDivButton>
      </div>
    </>
  );
};

export default ProductGrid;
