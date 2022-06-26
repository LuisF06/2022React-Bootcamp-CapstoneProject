import Footer from "./components/Footer";
import StoreHeader from "./components/StoreHeader";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <StoreHeader />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/products" element={<ProductList />}>
          <Route path="?category=:categorySlug" element={<ProductList />} />
        </Route>
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path='/search' element={<ProductList />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
