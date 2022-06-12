import { useState } from "react";
import { useProducts } from "../../utils/hooks/useProducts";
import Sidebar from "../../components/SideBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  ProductListContent,
  PLLeftSide,
  PLRightSide,
  ProductContent,
  PaginationArea,
  PaginationButton,
  PaginationText,
} from "./style";

const ProductList = () => {
  const { data, isLoading } = useProducts();
  const [categoryArray, setCategoryArray] = useState([]);

  return (
    <>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <ProductListContent>
          <PLLeftSide>
            <Sidebar
              categoryArray={categoryArray}
              setCategoryArray={setCategoryArray}
            />
          </PLLeftSide>
          <PLRightSide>
            <ProductContent className="products">
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
              <PaginationArea>
                <PaginationButton>Previous</PaginationButton>
                <PaginationText>Page 1 of ?</PaginationText>
                <PaginationButton>Next</PaginationButton>
              </PaginationArea>
            </ProductContent>
          </PLRightSide>
        </ProductListContent>
      )}
    </>
  );
};

export default ProductList;
