import ProductCard from "../ProductCard/ProductCard";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #efead8;
`;

const ContentDivTitle = styled.div`
  background: #efead8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.p`
text-transform: uppercase;
text-align: center;
font-size: 1.2em;
font-weight: bold;
`;

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
      </div>
    </>
  );
};

export default ProductGrid;
