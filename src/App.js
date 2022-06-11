import Footer from "./components/Footer";
import StoreHeader from "./components/StoreHeader";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  
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
