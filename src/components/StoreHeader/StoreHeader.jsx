import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { createRef } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, NavLink, StoreName, SearchBar, SearchBarButton } from "./style";

const StoreHeader = () => {
  const navigate = useNavigate();
  const redirectToSearch = () => {
    // console.log(textInput.current.value); //For Debug Purposes
    navigate(`/search?q=${textInput.current.value}`);
  };

  let textInput = createRef();

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
            ref={textInput}
          />
          <SearchBarButton
            onClick={() => {
              redirectToSearch();
            }}
          >
            Search
          </SearchBarButton>
        </SearchBar>
        <NavLink to="/cart">
          <FaShoppingCart size={32} />
        </NavLink>
      </Nav>
    </>
  );
};

export default StoreHeader;
