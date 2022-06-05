import CategoriesGrid from "../../components/CategoriesGrid";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div>
      <Slider/>
      <CategoriesGrid/>
      <ProductGrid/>
    </div>
  );
};

export default Home;