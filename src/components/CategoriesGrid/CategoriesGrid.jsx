import { useProductCategories } from "../../utils/hooks/useProductCategories";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";

const GridArea = styled.div`
  background: #6d8b74;
  display: flex;
  align-items: center;
  padding: 10px 0;
  overflow: auto;
`;

const GridTitleDiv = styled.div`
  background: #6d8b74;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridTitle = styled.p`
text-transform: uppercase;
text-align: center;
font-size: 1.2em;
font-weight: bold;
`;

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
