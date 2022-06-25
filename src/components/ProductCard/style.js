import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Card = styled.div`
    width: 200px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid black;
    margin: 2px;
    padding: 2px;
`;

export const CardTitle = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
`;

export const CardCategory = styled.p`
text-transform: capitalize;
text-align: center;
font-size: 0.875em;
margin: 0;
`;

export const CardPrice = styled.p`
text-align: center;
font-size: 1em;
font-weight: bold;
margin: 5px;
`;

export const AddButton = styled.button`
  margin: 3px 40px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: black;
  color: #efead8;

  :hover {
    background-color: #efead8;
    color: black;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: #6d8b74;
  }
`;