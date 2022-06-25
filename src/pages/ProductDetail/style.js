import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  background-color: #efead8;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProductImageContainer = styled.div`
  width: 60%;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100% !important;
  }
`;

export const ProductInfoContainer = styled.div`
  width: 40%;
  margin-top: 60px;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100% !important;
  }
`;

export const ProductDescription = styled.div`
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
`;

export const ProductCategory = styled.span`
  font-size: 12px;
  color: #5f7161;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
`;

export const ProductName = styled.h1`
  font-weight: 300;
  font-size: 36px;
  color: #43484d;
`;

export const ProductParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: black;
  line-height: 24px;
  padding: 20px 0;
`;

export const ProductSpecs = styled.ul`
  padding-bottom: 20px;
`;

export const TagIcon = styled.i`
  padding: 20px 0 0 20px;
`;

export const ProductPriceArea = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.span`
  font-size: 32px;
  font-weight: 300;
  color: black;
  margin-right: 20px;
`;

export const QuantityInput = styled.input.attrs({ type: "number" })`
  margin: 10px 20px;
`;


export const CartButton = styled.button`
  margin: 3px 3px 5px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: black;
  color: #efead8;

  :hover {
    background-color: #efead8;
    color: black;
  }
`;