import { useEffect, useState } from "react";
import { useProductData } from "../../utils/hooks/useProductData";
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
} from "./style";

const ProductList = () => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  const pathName = window.location.pathname;
  let params = new URL(document.location).searchParams;
  let query = params.get("q");

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const allProductsPageLimit = pathName.includes("products") ? 12 : 20;

  function handleClick(page) {
    return setCurrentPage(page === 0 ? 1 : page);
  }

  let paramsArray = [
    "product",
    pathName === "/products" ? 30 : 20,
    "",
    "",
    pathName === "/search" ? query : "",
  ];

  let { data, isLoading } = useProductData(
    paramsArray[0],
    paramsArray[1],
    paramsArray[2],
    paramsArray[3],
    paramsArray[4]
  );
  //console.log(data) // Debug Purposes

  useEffect(() => {
    if (data?.results?.length > 0) {
      return setProducts(data.results.slice(0, allProductsPageLimit));
    }
  }, [allProductsPageLimit, data]);

  useEffect(() => {
    if (products.length > 0) {
      if (categoryArray?.length >= 1) {
        return setProducts(
          data.results.filter((product) =>
            categoryArray.includes(product.data.category.slug)
          )
        );
      }
      return setProducts([
        ...data.results.slice(
          currentPage * allProductsPageLimit - allProductsPageLimit,
          allProductsPageLimit * currentPage
        ),
      ]);
    }
  }, [
    allProductsPageLimit,
    categoryArray,
    currentPage,
    data.results,
    products.length,
  ]);

  setTimeout(() => {
    if (isLoading === true) {
      setLoadingState(false);
    }
  }, 2000);

  function renderProductCards() {
    let productCardsArray = products.map((product) => {
      const cardWithLink = (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.data.name}
          image={product.data.mainimage.url}
          price={product.data.price}
          category={product.data.category.slug}
        />
      );

      if (categoryArray) {
        if (categoryArray.length === 0) {
          //Return all Products, since no category is currently selected
          return cardWithLink;
        } else {
          //Return Products Filtered by Category
          return (
            categoryArray.includes(product.data.category.slug) && cardWithLink
          );
        }
      } else {
        //Return all Products, without category filters
        return cardWithLink;
      }
    });

    return productCardsArray.every((productCard) => productCard === false) ? (
      <div>No products found</div>
    ) : (
      productCardsArray
    );
  }

  return (
    <>
      {loadingState ? (
        <Loading />
      ) : (
        <ProductListContent>
          <PLLeftSide>
            <Sidebar
              categoryArray={categoryArray}
              setCategoryArray={setCategoryArray}
            />
          </PLLeftSide>
          <PLRightSide>
            <ProductContent>
              {renderProductCards()}
              <PaginationArea>
                {currentPage !== 1 && (
                  <PaginationButton
                    onClick={() => {
                      handleClick(currentPage - 1);
                    }}
                  >
                    Previous
                  </PaginationButton>
                )}
                {products.length % allProductsPageLimit === 0 && (
                  <PaginationButton
                    onClick={() => {
                      handleClick(currentPage + 1);
                    }}
                  >
                    Next
                  </PaginationButton>
                )}
              </PaginationArea>
            </ProductContent>
          </PLRightSide>
        </ProductListContent>
      )}
    </>
  );
};

export default ProductList;
