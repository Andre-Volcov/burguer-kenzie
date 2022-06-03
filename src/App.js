import "./reset.css";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Vitrine from "./components/Vitrine";
import { FlexDiv } from "./General";

function App() {
  //const [products, setproducts] = useState([]);
  const [mobile, setMobile] = useState(true);
  const [cart, setCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [ProductsList, setProductsList] = useState([]);
  const [showProductList, setShowProductList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => {
        setProductsList(response);
        setShowProductList(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.innerWidth > 830 ? setMobile(false) : setMobile(true);
  }, []);

  return (
    <main>
      <Header
        mobile={mobile}
        setShowProductList={setShowProductList}
        ProductsList={ProductsList}
      />
      <FlexDiv mobile={mobile}>
        <Vitrine
          mobile={mobile}
          showProductList={showProductList}
          setCart={setCart}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
          ProductsList={ProductsList}
          total={total}
          setTotal={setTotal}
        />
        <Footer
          mobile={mobile}
          cart={cart}
          setCart={setCart}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          total={total}
          setTotal={setTotal}
        />
      </FlexDiv>
    </main>
  );
}

export default App;
