import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: ${({ mobile }) => (mobile ? "92vw" : "21vw")};
  height: 535px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29px;

  align-self: ${({ mobile }) => (mobile ? "center" : "")};

  h2 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
    padding-left: 21px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    justify-content: ${({ cartItens }) => (cartItens ? "center" : "")};
  }

  li {
    display: flex;
    flex-direction: row;
    width: 90%;
    ${({ mobile }) => (mobile ? "100%" : "13vw")};

    height: 70px;
    margin-top: 25px;
    justify-content: flex-start;
  }

  li > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 15px;
  }

  li > img {
    height: 70px;
    max-width: 70px;
    background: #e0e0e0;
    border-radius: 5px;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    margin-top: 56px;

    color: #333333;
  }

  ul > p {
    margin-top: 15px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    text-align: center;
    color: #828282;

    margin-top: 0px;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #333333;
    margin-top: 5px;
  }

  li > div > p {
    margin-top: 15px;
  }
`;

export const RemoveButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #bdbdbd;
  border: none;
  display: flex;

  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 5px;
  margin-right: 0px;
  margin-left: auto;
`;

export const StyledPreco = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  border: none;
  border-top: 2px solid #e0e0e0;

  margin-top: 15px;

  div {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-between;
  }

  h5 {
    margin-top: 21px;
  }

  .total {
    margin-top: 21px;
  }
`;

export const RemoveAllStyled = styled.button`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  width: 100%;
  height: 60px;

  background: #e0e0e0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  margin-top: 20px;
`;
