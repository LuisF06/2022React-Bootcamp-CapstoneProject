import { Card, CardTitle, CardCategory, CardPrice } from "./style";

const ProductCard = ({ name, image, price, category, isProduct }) => {
  return (
    <Card>
      <img src={image} alt={name}/>
      <CardTitle>{name}</CardTitle>
      {isProduct && (
        <>
          <CardCategory>{category}</CardCategory>
          <CardPrice>$ {price}</CardPrice>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
