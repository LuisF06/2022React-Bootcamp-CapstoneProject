import { useProductData } from "../../utils/hooks/useProductData";
import { Carousel } from "react-responsive-carousel";
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

const ProductDetail = () => {
  const { data, isLoading } = useProductData(
    "",
    "1",
    "",
    window.location.pathname.split("/")[2]
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductContainer>
          <ProductImageContainer>
            <Carousel width="85%">
              {data.results[0].data.images.map((item, index) => (
                <div key={index}>
                  <img alt={item.image.alt} src={item.image.url} />
                </div>
              ))}
            </Carousel>
          </ProductImageContainer>

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
