import { HeaderStyle } from "./style";
import Mask from "./img/Mask.svg";
import { GeneralButton } from "../../General";
import { useState } from "react";

function Header({ mobile, ProductsList, setShowProductList }) {
  const [input, setInput] = useState("");

  function handleClick() {
    const filtered = ProductsList.filter((element) =>
      element.name.toLowerCase().includes(input.toLowerCase())
    );
    setInput("");
    return setShowProductList(filtered);
  }

  return (
    <HeaderStyle mobile={mobile}>
      <img src={Mask} alt="" className={"logo"} />
      <nav>
        <input
          value={input}
          placeholder={"Digitar Pesquisa"}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <GeneralButton onClick={() => handleClick()}>Pesquisar</GeneralButton>
      </nav>
    </HeaderStyle>
  );
}

export default Header;
