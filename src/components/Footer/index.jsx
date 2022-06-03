import {
  RemoveButton,
  StyledFooter,
  StyledPreco,
  RemoveAllStyled,
} from "./style";

function Footer({
  mobile,
  cart,
  setCart,
  cartProducts,
  setCartProducts,
  total,
  setTotal,
}) {
  function removeFromCart(event) {
    const value = event.target.id;
    const newValue = cartProducts.filter(
      (element) => element.id === Number(value)
    );
    setTotal(total - newValue[0].price);
    const newCart = cartProducts.filter(
      (element) => element.id !== Number(value)
    );
    setCartProducts([...newCart]);
  }

  function eraseCart() {
    setTotal(0);
    setCartProducts([]);
    setCart(false);
  }

  return (
    <>
      {cart ? (
        <StyledFooter mobile={mobile}>
          <h2>Carrinho de compras</h2>
          <ul>
            {cartProducts.map((element) => (
              <li key={element.id}>
                <img src={element.img} alt="" />
                <div>
                  <h3>{element.name}</h3>
                  <p>{element.category}</p>
                </div>
                <RemoveButton
                  id={element.id}
                  onClick={(event) => removeFromCart(event)}
                >
                  Remover
                </RemoveButton>
              </li>
            ))}
          </ul>
          <StyledPreco>
            <div>
              <h5>Total</h5>
              <p className="total">R$ {total.toFixed(2)}</p>
            </div>
            <RemoveAllStyled onClick={eraseCart}>Remover todos</RemoveAllStyled>
          </StyledPreco>
        </StyledFooter>
      ) : (
        <StyledFooter mobile={mobile}>
          <h2>Carrinho de compras</h2>
          <ul>
            <h4>Sua sacola está vazia</h4>
            <p>Adicione itens</p>
          </ul>
        </StyledFooter>
      )}
    </>
  );
}

export default Footer;
