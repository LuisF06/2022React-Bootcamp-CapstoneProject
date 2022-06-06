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

const ProductCard = ({ name, image, price, category, isProduct }) => {
  return (
    <Card>
      <img src={image} alt={name}/>
      <h6>{name}</h6>
      {isProduct && (
        <>
          <h5>{category}</h5>
          <h6>$ {price}</h6>
        </>
      )}
    </Card>
  );
};

export default ProductCard;