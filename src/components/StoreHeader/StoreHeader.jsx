import styled from "styled-components";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #ebebeb;
  width: 100%;
  height: 15%;
`;

const StoreHeader = () => {
  return (
    <>
      <Container className="rows">
        <a href="#default" className='logo'>
        <FaShoppingBag />
        </a>
        <input
          type="search"
          id="site-search"
          name="q"
          aria-label="Search through site content"
        />

        <button>Search</button>
        <div className="header-right">
          <a href="#shop">
          <FaShoppingCart />
          </a>
        </div>
      </Container>
    </>
  );
};

export default StoreHeader;
