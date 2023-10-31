import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./Component.js/CartPage";
import Navbar from "./Component.js/Navbar";
import ProductCart from "./Component.js/ProductCart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductCart />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
