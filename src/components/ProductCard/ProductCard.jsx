import styled from "styled-components";

const Card = styled.div`
    width: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    margin: 2px;
    padding: 2px;
`;

const CardTitle = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
`;

const CardCategory = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
margin: 0;
`;

const CardPrice = styled.p`
text-align: center;
font-size: 1em;
font-weight: bold;
margin: 5px;
`;

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