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
        <Route index path="/2022React-Bootcamp-CapstoneProject" element={<Home />} />
        <Route path="/2022React-Bootcamp-CapstoneProject/ProductList" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
