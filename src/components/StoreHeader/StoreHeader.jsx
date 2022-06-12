import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Nav, NavLink, StoreName, SearchBar, SearchBarButton } from "./style";

const StoreHeader = () => {
  return (
    <>
      <Nav>
        <NavLink to="/2022React-Bootcamp-CapstoneProject/Home">
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
          <SearchBarButton>Search</SearchBarButton>
        </SearchBar>
        <NavLink to="/2022React-Bootcamp-CapstoneProject/Home">
          <FaShoppingCart size={32} />
        </NavLink>
      </Nav>
    </>
  );
};

export default StoreHeader;
