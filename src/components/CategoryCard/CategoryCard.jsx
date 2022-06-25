import { Card, CardTitle, NavLink } from "./style";

const CategoryCard = ({ name, image }) => {
  const Category = "/products?category=" + name;
  return (
    <>
      <Card>
        <img src={image} alt={name} />
        <NavLink to={Category}>
          <CardTitle>{name}</CardTitle>
        </NavLink>
      </Card>
    </>
  );
};

export default CategoryCard;
