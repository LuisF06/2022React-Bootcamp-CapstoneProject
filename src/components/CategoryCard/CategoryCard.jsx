import PropTypes from "prop-types";
import { Card, CardTitle, NavLink } from "./style";

const CategoryCard = ({ name, image, link }) => {
  return (
    <>
      <Card>
        <img src={image} alt={name} />
        <NavLink to={link}>
          <CardTitle>{name}</CardTitle>
        </NavLink>
      </Card>
    </>
  );
};

CategoryCard.propTypes = {
  name:  PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CategoryCard;
