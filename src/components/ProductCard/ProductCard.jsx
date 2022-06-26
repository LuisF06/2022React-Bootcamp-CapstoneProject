import PropTypes from "prop-types";
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

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
