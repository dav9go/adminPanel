import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import SalesPage from "./components/SalesPage";
import StockPage from "./components/StockPage";
import ProductsPage from "./components/ProductsPage";
import GeneralPage from "./components/GeneralPage";

function App() {
  const [generalPage, setGeneralPage] = useState(true);
  const [productsPage, setProductsPage] = useState(false);
  const [stockPage, setStockPage] = useState(false);
  const [salesPage, setSalesPage] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/?limit=100")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  function handleNav(name) {
    switch (name) {
      case "General":
        setGeneralPage(true);
        setProductsPage(false);
        setStockPage(false);
        setSalesPage(false);
        break;
      case "Products":
        setGeneralPage(false);
        setProductsPage(true);
        setStockPage(false);
        setSalesPage(false);
        break;
      case "Stock":
        setGeneralPage(false);
        setProductsPage(false);
        setStockPage(true);
        setSalesPage(false);
        break;
      case "Sales":
        setGeneralPage(false);
        setProductsPage(false);
        setStockPage(false);
        setSalesPage(true);
        break;
    }
  }
  return (
    <div className="App">
      <Navbar handleNav={handleNav} />
      <section>
        {generalPage && <GeneralPage />}
        {productsPage && <ProductsPage />}
        {stockPage && <StockPage />}
        {salesPage && <SalesPage />}
      </section>
    </div>
  );
}

export default App;
