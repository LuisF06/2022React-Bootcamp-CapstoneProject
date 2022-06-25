import { useProducts } from "../../utils/hooks/useProducts";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  CartButton,
  ProductCategory,
  ProductContainer,
  ProductImageContainer,
  ProductInfoContainer,
  ProductDescription,
  ProductParagraph,
  ProductName,
  ProductPrice,
  ProductPriceArea,
  ProductSpecs,
  QuantityInput,
  TagIcon,
} from "./style";
//import { useState } from "react";

const ProductDetail = () => {
  const { data, isLoading } = useProducts();
  const { productId } = useParams();

  console.log(productId)
  /*if (isLoading === false)
  {
    index = data.results.map((object => object.id).indexOf(productId));
  }*/

  console.log( String(isLoading) + " " + String(typeof data.results))

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        
        <ProductContainer>
          <ProductImageContainer>hola</ProductImageContainer>

          <ProductInfoContainer>
            <ProductDescription>
              <ProductCategory>
                {data.results[0].data.category.slug}
              </ProductCategory>
              <ProductName>{data.results[0].data.name}</ProductName>
              <label>SKU: {data.results[0].data.sku}</label>
              <div>
                {data.results[0].tags.map((tag) => {
                  return (
                    <label key={tag}>
                      <TagIcon className={`fa fa-tag`} />
                      {" " + tag}
                    </label>
                  );
                })}
              </div>
              <ProductParagraph>
                {data.results[0].data.description[0].text}
              </ProductParagraph>
              <ProductSpecs>
                {data.results[0].data.specs.map((spec) => {
                  return (
                    <li key={spec.spec_name}>
                      {spec.spec_name}: {spec.spec_value}
                    </li>
                  );
                })}
              </ProductSpecs>
            </ProductDescription>

            <ProductPriceArea>
              <ProductPrice>${data.results[0].data.price}</ProductPrice>
              <div className="buttonContainer">
                <QuantityInput defaultValue={1} min="1" max="100" />
                <CartButton>Add to cart</CartButton>
              </div>
            </ProductPriceArea>
          </ProductInfoContainer>
        </ProductContainer>
      )}
    </>
  );
};

export default ProductDetail;
