import { Card, List } from "./style";
import { GeneralButton } from "../../General";
import { useEffect, useRef, useState } from "react";
import Fail from "./modal";

function Vitrine({
  mobile,
  showProductList,
  setCart,
  setCartProducts,
  cartProducts,
  ProductsList,
  total,
  setTotal,
}) {
  const [modal, setModal] = useState(false);

  function addToCart(event) {
    const value = event.target.id;

    const newProduct = ProductsList.filter(
      (element) => element.id === Number(value)
    );
    setCart(true);

    const cartFilter = cartProducts.filter(
      (element) => element.id === newProduct[0].id
    );
    if (cartFilter.length === 0) {
      setTotal(total + newProduct[0].price);
      return setCartProducts([...cartProducts, ...newProduct]);
    } else {
      setModal(true);
    }
  }

  const modalRef = useRef();

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      if (!modalRef.current?.contains(target)) {
        setModal(false);
      }
    }
    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return (
    <List mobile={mobile}>
      {showProductList.map((element) => (
        <Card key={element.id}>
          <img src={element.img} alt="" />
          <h3>{element.name}</h3>
          <p>{element.category}</p>
          <h4>R$ {element.price.toFixed(2)}</h4>
          <GeneralButton
            id={element.id}
            margin-left={"21px"}
            onClick={(event) => addToCart(event)}
          >
            Adicionar
          </GeneralButton>
        </Card>
      ))}
      {modal && <Fail ref={modalRef} setModal={setModal} />}
    </List>
  );
}

export default Vitrine;
