import styled from "styled-components";

export const ProductListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  vertical-align: middle;
`;

export const PLLeftSide = styled.div`
  background-color: #5f7161;
  width: 20%;
  padding: 20px 0px;
  text-align: center;
  float: left;
`;

export const PLRightSide = styled.div`
  background: #efead8;
  display: flex;
  width: 80%;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const PaginationButton = styled.button`
  margin: 3px 3px 5px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: black;
  color: #efead8;
  width: 100px;
  height: 30px;

  :hover {
    background-color: #efead8;
    color: black;
  }
`;

export const PaginationText = styled.div`
  color: black;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 8px 30px 10px;
`;