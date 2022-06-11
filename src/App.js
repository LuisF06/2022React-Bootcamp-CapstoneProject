import Footer from "./components/Footer";
import StoreHeader from "./components/StoreHeader";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <StoreHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
