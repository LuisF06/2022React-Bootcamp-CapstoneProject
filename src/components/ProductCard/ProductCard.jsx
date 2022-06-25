import {
  AddButton,
  Card,
  CardTitle,
  CardCategory,
  CardPrice,
  NavLink,
} from "./style";

const ProductCard = ({ name, image, price, category, id }) => {
  const product = "/product/" + id;
  return (
    <Card>
      <img src={image} alt={name} />
      <NavLink to={product}>
        <CardTitle>{name}</CardTitle>
      </NavLink>

      <CardCategory>{category}</CardCategory>
      <CardPrice>$ {price}</CardPrice>
      <AddButton>Add to Cart</AddButton>
    </Card>
  );
};

export default ProductCard;
