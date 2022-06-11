import styled from "styled-components";

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #efead8;
`;

export const ContentDivTitle = styled.div`
  background: #efead8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentDivButton = styled.div`
  background: #efead8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
`;

export const ViewAllButton = styled.button`
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
