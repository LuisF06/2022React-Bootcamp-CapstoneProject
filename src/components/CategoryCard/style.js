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

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;

  :hover {
    color: #efead8;
  }
`;
