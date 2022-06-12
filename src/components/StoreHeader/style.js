import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #5f7161;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1440px) / 2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const NavLink = styled(Link)`
  color: #cdcdcd;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #cdcdcd;
  }

  :hover {
    color: white;
  }
`;

export const StoreName = styled.div`
  display: flex;
  align-items: center;
  color: #cdcdcd;
  font-familiy: "Heebo", sans-serif;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchBarButton = styled.button`
  margin: 3px 3px 5px;
  padding: 3px 8px;
  border-radius: 4px;
  background-color: #efead8;
  color: black;
  width: 80px;

  :hover {
    background-color: black;
    color: #efead8;
  }
`;
