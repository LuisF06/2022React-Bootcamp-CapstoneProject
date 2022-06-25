//import { useCallback } from "react";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, StoreName, SearchBar, SearchBarButton } from "./style";

const StoreHeader = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <NavLink to="/home">
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
          <SearchBarButton
            onClick={() => {
              navigate("/search");
            }}
          >
            Search
          </SearchBarButton>
        </SearchBar>
        <NavLink to="/home">
          <FaShoppingCart size={32} />
        </NavLink>
      </Nav>
    </>
  );
};

export default StoreHeader;
