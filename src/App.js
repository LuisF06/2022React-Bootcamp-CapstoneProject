import Footer from "./components/Footer";
import StoreHeader from "./components/StoreHeader";
import Home from "./pages/Home/Home";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Router>
        <StoreHeader />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
