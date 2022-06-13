import { useEffect, useState } from "react";
import { useProducts } from "../../utils/hooks/useProducts";
import Sidebar from "../../components/SideBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading";
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
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const filtered = data.results?.filter((product) =>
      categoryArray?.includes(product.data.category.slug)
    );
    setFilteredProducts(filtered);
  }, [categoryArray, data.results]);

  return (
    <>
      {isLoading ? (
        <Loading/>
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
              {categoryArray.length === 0
                ? data.results.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.data.name}
                      image={product.data.mainimage.url}
                      price={product.data.price}
                      category={product.data.category.slug}
                      isProduct={true}
                    />
                  ))
                : filteredProducts.map((product) => (
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
