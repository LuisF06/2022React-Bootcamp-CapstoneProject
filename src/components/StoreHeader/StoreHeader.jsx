import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { Nav, NavLink, StoreName, SearchBar } from "./style"

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
