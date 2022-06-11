import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav`
  background: #5f7161;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1440px) / 2);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const NavLink = styled(Link)`
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

const StoreName = styled.div`
  display: flex;
  align-items: center;
  color: #cdcdcd;
  font-familiy: "Heebo", sans-serif;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const StoreHeader = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <FaShoppingBag size={56} />
        </NavLink>
        <StoreName> ECommerce Capstone Project: "The CapStore" </StoreName>
        <SearchBar>
          <input
            className="search-main"
            type="search"
            name="Search"
            placeholder="Search"
          />
          <button>Search</button>
        </SearchBar>
        <NavLink to="/">
          <FaShoppingCart size={32} />
        </NavLink>
      </Nav>
    </>
  );
};

export default StoreHeader;
